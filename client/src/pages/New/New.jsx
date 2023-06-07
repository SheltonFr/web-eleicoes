/* eslint-disable react/prop-types */
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import api from '../../api/api'


const New = ({ inputs, title }) => {

  const [data, setData] = useState({})
  const navigate = useNavigate()
  const location = useLocation();


  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  const handleAdd = async (e) => {
    e.preventDefault()


    if (location.pathname.includes('product')) {
      console.log(data)
      api.post('/party', {
        name: data.name,
        description: data.description
      })
        .then((response) => {
          console.log(response)
          navigate('/')
        })
        .catch((err) => console.log(err));
    }

  }

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleAdd}>
              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleInput}
                    required
                  />
                </div>
              ))}

              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New