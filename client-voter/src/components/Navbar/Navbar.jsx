import { DarkModeOutlined, LanguageOutlined, LightModeOutlined, SearchOutlined } from '@mui/icons-material'
import './navbar.scss'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'



const Navbar = () => {

    const { darkMode, dispatch } = useContext(DarkModeContext)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon' />
                        Português
                    </div>
                    <div className="item" onClick={() => dispatch({ type: 'TOGGLE' })} >
                        {darkMode ?
                            <LightModeOutlined className='icon' /> :
                            <DarkModeOutlined className='icon' />
                        }
                    </div>
                    <div className="item">
                        <img src="https://gravatar.com/avatar/shelton?d=identicon"
                            alt="user avatar"
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar