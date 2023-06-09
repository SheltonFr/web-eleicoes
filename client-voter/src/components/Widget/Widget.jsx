import './widget.scss'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountBalanceWalletOutlined, EmojiPeopleOutlined, GroupAddOutlined, Groups3Outlined } from '@mui/icons-material';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Widget = ({ type, amount }) => {

    useEffect(() => {
        const fetchData = async () => {
            

        }

        fetchData();
    }, [])


    return (
        <div className='widget'>
            <div>
                <p className="title">Partido: Frelimo</p>
                <img />
                <p className="nome"></p>
                <Button variant="text">votar</Button>
            </div>
        </div>
    )
}

export default Widget