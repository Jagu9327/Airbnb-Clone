import React from 'react'
import logo from "../../assets/logo/logo-logo.png";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";

function Header() {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='navbar-logo'/>
        <div className='search-bar'>
            <div className='search-bar-text'>AnyWhere</div>
             <div className='search-bar-text'>Any Week</div>
              <div className='search-bar-text2'>Add guests</div>
              <div className='search-bar-div'>
              < SearchRoundedIcon className='search-icon'/>
        </div>
        </div>
        <div className='profile-container'>
            <div className='airbnb-your-home'>Airbnb Your Home</div>
            <div className='airbnb-your-home'>
                <LanguageIcon sx={{ fontSize: "1.3rem"}}/>
            </div>
            <div className='profile-div'>
                <BasicMenu/>
            </div>
        </div>
       {/* <MobileSearchBar/> */}
        <SimpleBottomNavigation/>
    </div>
  )
}

export default Header;
