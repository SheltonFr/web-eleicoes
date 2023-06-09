import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountCircleOutlined, Logout, Groups3Outlined, GroupAddOutlined, EmojiPeopleOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {


  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to={'/'}>
          <span className="logo">ELEITOR</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <NavLink to={'/'}>
              <DashboardIcon className='icon' />
              <span>Mesa de Votos</span>
            </NavLink>
          </li>
          <p className="title">LISTS</p>
          <li>
            <NavLink to={'/partys'}>
              <GroupAddOutlined className='icon' />
              <span>Resultados</span>
            </NavLink>
          </li>
      
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <Logout className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar