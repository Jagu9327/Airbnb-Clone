import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar, Button } from '@mui/material';
import "../css/Navbar.css";

function Navbar() {
    return (<div className='qHeader'>
        <div className='qHeader__logo'>
            <img
                src='https://outbound.net/wp-content/uploads/2018/07/image-1-3.png'
                alt=''
            />
        </div>
        <div className='qHeader__icons'>
            <div className='qHeader__icon'>
                <HomeIcon />
            </div>
            <div className='qHeader__icon'>
                <FeaturedPlayListOutlinedIcon />
            </div>
            <div className='qHeader__icon'>
                <AssignmentTurnedInOutlinedIcon />
            </div>
            <div className='qHeader__icon'>
                <PeopleAltOutlinedIcon />
            </div>
            <div className='qHeader__icon'>
                <NotificationsOutlinedIcon />
            </div>
            <div className='qHeader__input'>
                <SearchIcon />
                <input type='text' placeholder='Search Quora' />
            </div>
            <div className='qHeader__Rem'>
                <div className='qHeader__avatar'>
                    <Avatar />
                </div>
                <LanguageIcon />
                <Button>Add Question</Button>
            </div>
        </div>
    </div>
    )
}

export default Navbar
