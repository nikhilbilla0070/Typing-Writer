import React, { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Select from 'react-select';
import { themeOptions } from '../Styles/theme';
import { ThemeContext } from '../Context/ThemeContext';

const Footer = () => {

    const {setTheme, defaultValue} = useContext(ThemeContext);

    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }

  return (
    <div className="footer">
        <div className="links">
        <a href='https://github.com/nikhilbilla0070'>
          <GitHubIcon style={{marginRight:'4px'}}/>
          </a>
          <a href='https://www.linkedin.com/in/nikhil-billa-a5b59b239/'>
          <LinkedInIcon/>
          </a>
        </div>
        <div className="themes">
            <Select 
                menuPlacement='top'
                options={themeOptions}
                onChange={handleThemeChange}
                defaultValue={{value: defaultValue, label: defaultValue.label}}/> 
        </div>
    </div>
  )
}

export default Footer;