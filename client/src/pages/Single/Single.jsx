import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import NormalChart from '../../components/NormalChart/NormalChart'
import Table from '../../components/Table/Table'
import { useParams, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'
import { fetchVoter, toggleActiveVoter } from '../../repository/repository'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import SimpleBackdrop from '../../components/Backdrop/Backdrop'



const Single = () => {

  const { id } = useParams();
  const location = useLocation();
  const { token } = useContext(AuthContext)


  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState(null)


  useEffect(() => {
    fetchVoter(id).then((res) => {
      console.log(res.data)
      setResult(res.data)
    }).catch((err) => console.log(err))
  }, [])

  const toggleActiveVoterState = async () => {
    setIsOpen(true)
    await toggleActiveVoter(id, token)
    fetchVoter(id).then((res) => {
      console.log(res.data)
      setResult(res.data)
    }).catch((err) => console.log(err)).finally(() => setIsOpen(false))
  }


  if (!result) {
    return <h1></h1>
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
                src={result.avatar}
                alt=""
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{result.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Id:</span>
                  <span className="itemValue">{result._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">BI:</span>
                  <span className="itemValue">{result.bi}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username</span>
                  <span className="itemValue">{result.user.username}</span>
                </div>
              </div>
            </div>

            {location.pathname.includes('voters') &&
              <div className="button-container">

                {result.user.isActive ?
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
      </div>
      <SimpleBackdrop open={isOpen} />
    </div>
  )
}

export default Single