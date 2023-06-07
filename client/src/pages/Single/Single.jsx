import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import NormalChart from '../../components/NormalChart/NormalChart'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '../../components/Table/Table'
import { useParams, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchVoter, toggleActiveVoter } from '../../repository/repository'



const Single = () => {

  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ user: { username: '', isActive: false } })
  const location = useLocation();

  useEffect(() => {
    fetchData()

  }, [data])

  const fetchData = () => {
    setData(true)
    if (location.pathname.includes('candidates')) {
      return;
    }

    if (location.pathname.includes('voters')) {
      fetchVoter(id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setOpen(false))
      return;
    }

    if (location.pathname.includes('partys')) {
      return;
    }
  }

  const toggleActiveVoterState = async () => {
    await toggleActiveVoter(id)
    fetchData()

  }

  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.avatar}
                alt=""
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Id:</span>
                  <span className="itemValue">{data._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">BI:</span>
                  <span className="itemValue">{data.bi}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username</span>
                  <span className="itemValue">{data.user.username}</span>
                </div>
              </div>
            </div>

            {location.pathname.includes('voters') &&
              <div className="button-container">
                {data.user.isActive ?
                  <Button className='btn' variant='contained' color='error' onClick={toggleActiveVoterState}>Desactivar Conta</Button>
                  :
                  <Button className='btn' variant='contained' color='success' onClick={toggleActiveVoterState}>Activar conta</Button>
                }
              </div>
            }
          </div>
          <div className="right">
            <NormalChart aspect={3 / 1} title="User Spanding (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Single