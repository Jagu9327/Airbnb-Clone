import { Avatar } from '@mui/material'
import React from 'react'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import "../css/Post.css"
function Post() {
    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>
            </div>
            <div className='post__body'>
                <div className='post__question'>
                    <p>Question</p>
                    <button className='post__btnAnswer'>Answer</button>
                </div>
                <div className='post__answer'>
                    <p></p>
                </div>
                <img src='https://tse2.mm.bing.net/th?id=OIP.H1Z2DNBHBRouY2p4egENiwHaD3&pid=Api&P=0&h=180'
                    alt='' />
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>

                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                </div>
                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />
                <div className='post__footerAction'>
                    <ShareOutlinedIcon />
                    <MoreHorizOutlinedIcon />
                </div>

            </div>
        </div>
    )
}

export default Post
