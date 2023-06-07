import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './widget.scss'
import { useEffect, useState } from 'react';
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

const Widget = ({ type }) => {

    const [amount, setAmount] = useState(null)
    const [percentage, setPercentage] = useState(null)

    let data;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlineOutlined
                    className="icon"
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0,0 ,0.2)"
                    }}
                />
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartOutlined
                    className="icon"
                    style={{
                        color: "goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }}
                />
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlined
                    className="icon"
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)"
                    }}
                />
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
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

    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

            const lastMonthQuery = query(
                collection(db, 'users'),
                where("timeStamp", "<=", today),
                where("timeStamp", ">", lastMonth)
            );

            const prevMonthQuery = query(
                collection(db, 'users'),
                where("timeStamp", "<=", lastMonth),
                where("timeStamp", ">", prevMonth)
            );

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            setAmount(lastMonthData.docs.length)
            setPercentage(
                ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100
            )

        }

        fetchData();
    }, [])


    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUp />
                    {percentage}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget