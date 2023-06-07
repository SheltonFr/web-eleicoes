/* eslint-disable react/prop-types */
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createCandidate, createParty } from '../../repository/repository'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { fetchParties } from '../../repository/repository'
import { AuthContext } from '../../context/AuthContext'


const New = ({ inputs, title }) => {

  const [data, setData] = useState({})
  const navigate = useNavigate()
  const [parties, setParties] = useState([])
  const [party, setParty] = useState("")
  const location = useLocation();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {

    if (location.pathname.includes('candidates')) {
      fetchParties().then((res) => setParties(res.data.result))
    }
  })


  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  const handleSelectChange = (e) => {
    console.log(data)
    console.log(e.target.value)
    setParty(e.target.value);
  }

  const handleAdd = async (e) => {
    e.preventDefault()


    if (location.pathname.includes('partys')) {
      console.log(data)
      createParty(data).then(() => {
        navigate('/partys')
      }).catch((err) => console.log(err))

      return;
    }

    if (location.pathname.includes('candidates')) {
      console.log({ ...data, party })
      createCandidate({ ...data, party }, currentUser).then(() => {
        navigate('/candidates')
      }).catch((err) => console.log(err))
      return;
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
                  <TextField
                    fullWidth
                    placeholder={input.placeholder}
                    id={input.id} onChange={handleInput}
                    label={input.label}
                    variant="standard"
                    required />
                </div>
              ))}

              {
                location.pathname.includes('candidates') && (
                  <div className="formInput">
                    <FormControl variant="standard" fullWidth style={{ padding: '0', margin: '0' }} >
                      <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                      <Select
                        className='select'
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={party}
                        onChange={e => handleSelectChange(e)}
                        label="Partido"
                        required
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {parties.map(p => <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>)}
                      </Select>
                    </FormControl>
                  </div>
                )
              }

              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New