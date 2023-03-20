import React, { createRef, useEffect, useRef, useState } from "react";
import { useTestMode } from "../Context/TestModeContext";

var randomWords = require("random-words");

const TypingBox = () => {
  const inputRef = useRef(null);
  const values = useTestMode();
  console.log(values)
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [countDown, setCountDown] = useState(15); 
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const wordSpanRef = Array(500)
    .fill(0)
    .map((i) => createRef());
  const [words, setWords] = useState(() => {
    return randomWords(500);
  });

  const startTimer = () => {
    const intervalId = setInterval(timer, 1000); // will run the timer function after every 1000ms

    function timer() {
      setCountDown((currCountDown) => {
        if (currCountDown === 1) {
          clearInterval(intervalId);
          setTestEnd(true);
          return 0;
        }
        return currCountDown - 1;
      });
    }
  };

  const handleUserInput = (e) => {
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }

    let allChildSpan = wordSpanRef[currWordIndex].current.childNodes;

    //logic for space
    if (e.keyCode === 32) {
      if (allChildSpan.length <= currCharIndex) {
        // cursor present at the end
        allChildSpan[currCharIndex - 1].classList.remove("current-right");
      } else {
        //cursor present in between
        for (let i = currCharIndex; i < allChildSpan.length; i++) {
          allChildSpan[i].className += " skipped";
        }
        allChildSpan[currCharIndex].classList.remove("current");
      }

      //scrolling line condition
      if (
        wordSpanRef[currWordIndex + 1].current.offsetLeft <
        wordSpanRef[currWordIndex].current.offsetLeft
      ) {
        //i am present at the last word of a line
        wordSpanRef[currWordIndex].current.scrollIntoView();
      }

      wordSpanRef[currWordIndex + 1].current.childNodes[0].className =
        "current";
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(0);
      return;
    }

    if (e.keyCode === 8) {
      if (currCharIndex !== 0) {
        if (currCharIndex === allChildSpan.length) {
          if (allChildSpan[currCharIndex - 1].className.includes("extra")) {
            allChildSpan[currCharIndex - 1].remove();
            allChildSpan[currCharIndex - 2].className += " current-right";
          } else {
            allChildSpan[currCharIndex - 1].className = "current";
          }

          setCurrCharIndex(currCharIndex - 1);
          return;
        }
        allChildSpan[currCharIndex].className = "";
        allChildSpan[currCharIndex - 1].className = "current";
        setCurrCharIndex(currCharIndex - 1);
      }

      return;
    }

    if (currCharIndex === allChildSpan.length) {
      //add new characters
      let newSpan = document.createElement("span"); // -> <span></span>
      newSpan.innerText = e.key;
      newSpan.className = "incorrect current-right extra";
      wordSpanRef[currWordIndex].current.append(newSpan);
      allChildSpan[currCharIndex - 1].classList.remove("current-right");
      setCurrCharIndex(currCharIndex + 1);
      return;
    }

    if (
      e.key ===
      wordSpanRef[currWordIndex].current.childNodes[currCharIndex].innerText
    ) {
      allChildSpan[currCharIndex].className = "correct";
    } else {
      allChildSpan[currCharIndex].className = "incorrect";
    }

    if (currCharIndex + 1 === allChildSpan.length) {
      allChildSpan[currCharIndex].className += " current-right";
    } else {
      allChildSpan[currCharIndex + 1].className = "current";
    }

    setCurrCharIndex(currCharIndex + 1);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
    wordSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  return (
    <div>
      {countDown}
      {testEnd ? (
        <div>test over</div>
      ) : (
        <>
          <div className="type-box" onClick={focusInput}>
            <div className="words-wrapper">
              {words.map((word, index) => (
                <span className="word" ref={wordSpanRef[index]}>
                  {word.split("").map((char) => (
                    <span>{char}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <input
            ref={inputRef}
            type="text"
            onKeyDown={handleUserInput}
            className="hidden-input"
          />
        </>
      )}
    </div>
  );
};

export default TypingBox;