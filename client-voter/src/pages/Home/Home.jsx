import FeaturedChart from '../../components/FeaturedChart/FeaturedChart'
import NormalChart from '../../components/NormalChart/NormalChart'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import './home.scss'
import Table from '../../components/Table/Table'
import { useEffect, useState } from 'react'
import { getStatistics } from '../../repository/repository'

const Home = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    getStatistics()
      .then((res) => setData(res.data.statistics))
      .catch()
  }, [])

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="candidate" amount={data.candidatesCount} />
          <Widget type="candidate" amount={data.votersCount} />
          <Widget type="candidate" amount={data.partiesCount} />
          <Widget type="candidate" amount={data.votesCount} />
        </div>
        
      
      </div>
    </div>
  )
}

export default Home