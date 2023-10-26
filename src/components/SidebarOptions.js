import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import "../css/SidebarOptions.css";
import { height } from '@mui/system';

function SidebarOptions() {
    return (<div className='sidebarOptions'>
        <div className='sidebaroption'>

            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse2.mm.bing.net/th?id=OIP.Aqq0rbdu_0VFfE00yLorNQHaE8&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Bussiness</p>
            </div>

            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse3.mm.bing.net/th?id=OIP.snfhgC6pVOANMRGxg5PopgHaEy&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Psychology</p>
            </div>
            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse1.mm.bing.net/th?id=OIP.Vf6vEHTSwJ4MtdbfExtZPgHaHa&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Cooking</p>
            </div>

            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse3.mm.bing.net/th?id=OIP.vlqa7apnhs47vTPI90K2fwHaF9&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Music</p>
            </div>

            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse2.mm.bing.net/th?id=OIP.Y2vib7vh_eFU_t0TerM8oQHaEL&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Science</p>
            </div>

            <div style={{ width: "30px", margin: "30px auto" }}>
                <img
                    src='https://tse1.mm.bing.net/th?id=OIP.tZ8TVOiZ5aPOQLZT5XPzqgHaE-&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Health</p>
            </div>

            <div style={{ width: "70px", margin: "50px auto" }}>
                <img
                    src='https://tse3.mm.bing.net/th?id=OIP.pFVP1NgEuviWtH5JQJ2UfgAAAA&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Movies</p>
            </div>

            <div style={{ width: "70px", margin: "50px auto" }}>
                <img
                    src='https://tse3.mm.bing.net/th?id=OIP.mxT51VwUIzF1AwzXA219kgAAAA&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Technology</p>
            </div>

            <div style={{ width: "70px", margin: "50px auto" }}>
                <img
                    src='https://tse2.mm.bing.net/th?id=OIP.RPWHk9Nq_tMZCgM1ApLFdAHaFj&pid=Api&P=0&h=180'
                    alt="react logo" style={{ width: '100px', }}
                />
                <p>Education</p>
            </div>
            <div className='sidebaroption'>
                <AddIcon />
                <p className='text'>Discover Spaces </p>
            </div>
        </div>
    </div>
    )
}

export default SidebarOptions;
