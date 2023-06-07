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
          <span className="logo">ADMIN</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <NavLink to={'/'}>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <p className="title">LISTS</p>
          <li>
            <NavLink to={'/candidates'}>
              <EmojiPeopleOutlined className='icon' />
              <span>Candidatos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/partys'}>
              <GroupAddOutlined className='icon' />
              <span>Partidos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/voters'}>
              <Groups3Outlined className='icon' />
              <span>Eleitores</span>
            </NavLink>

          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <Logout className='icon' />
            <span>Logut</span>
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