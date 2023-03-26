import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        background: black;
        color: white;
        margin: 0;
        padding: 0;
    }
    .canvas{
        display: grid;
        min-height: 100vh;
        grid-auto-flow: row;
        gap: 0.5rem;
        text-align: center;
        align-items: center;
        width: 100vw;
    }
    .type-box{
        max-width: 1000px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }
    .words-wrapper{
        display: flex;
        flex-wrap: wrap;
        font-size: 32px;
    }
    .word{
        margin: 5px;
        padding-right: 2px;
    }
    .hidden-input{
        opacity: 0;
    }
    .correct{
        color: green;
    }
    .incorrect{
        color: red;
    }
    .current{
        border-left: 1px solid;
        animation: blinking 2s infinite;
        @keyframes blinking{
            0% {border-left-color:white;}
            25% {border-left-color:black;}
            50% {border-left-color:white;}
            75% {border-left-color:black;}
            100% {border-left-color:white;}
        }
    }
    .current-right{
        border-right: 1px solid;
        animation: blinkingRight 2s infinite;
        @keyframes blinkingRight{
            0% {border-right-color:white;}
            25% {border-right-color:black;}
            50% {border-right-color:white;}
            75% {border-right-color:black;}
            100% {border-right-color:white;}
        }
    }
    .skipped{
        color: grey;
    }
    .upper-menu{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        font-size: 1.4rem;
        padding: 0.5rem;
    }
    .modes{
        display: flex;
        gap: 5px;
    }
    .time-modes: hover{
        color: green;
        cursor: pointer;
    }
    .stats-box{
        display: flex;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
    .left{
        width: 30%;
        padding: 30px;
    }
    .right{
        width: 70%;
    }
    .title{
        font-size: 22px;
    }
    .subtitle{
        font-size: 30px;
        color: gold;
    }
    .restart{
        font-size: 40px;
        margin-top: 5px;
        cursor: pointer;
    }
    .header{
        display: flex;
        justify-content: space-between;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }
`;