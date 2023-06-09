import './widget.scss'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountBalanceWalletOutlined, EmojiPeopleOutlined, GroupAddOutlined, Groups3Outlined } from '@mui/icons-material';

const Widget = ({ type, amount }) => {

    

    let data;

    switch (type) {
        case 'candidate':
            data = {
                title: 'CANDIDATOS',
                link: 'ver candidatos',
                path: "/candidates",
                icon: <EmojiPeopleOutlined
                    className="icon"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0,0 ,0.2)"
                    }}
                />
            };
            break;
        case 'voter':
            data = {
                title: 'ELEITORES',
                link: 'Ver eleitores',
                path: "/voters",
                icon: <Groups3Outlined
                    className="icon"
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }}
                />
            };
            break;
        case 'party':
            data = {
                title: 'PARTIDOS',
                isMoney: true,
                link: 'Ver partidos',
                path: "/candidates",
                icon: <GroupAddOutlined
                    className="icon"
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)"
                    }}
                />
            };
            break;
        case 'vote':
            data = {
                title: 'VOTOS',
                isMoney: true,
                link: 'Ver votos',
                icon: <AccountBalanceWalletOutlined
                    className="icon"
                    style={{
                        color: "purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)"
                    }}
                />
            };
            break;

        default:
            break;
    }

  


    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}</span>
                <NavLink className="link" to={data.path}>{data.link}</NavLink>
            </div>
            <div className="right">
                {data.icon}
            </div>
        </div>
    )
}

export default Widget