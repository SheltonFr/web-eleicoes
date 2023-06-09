/* eslint-disable no-unused-vars */
import './home.scss'
import FeaturedChart from '../../components/FeaturedChart/FeaturedChart'
import BarChartComponent from '../../components/BarChart/BarChart'
import Backdrop from '../../components/Backdrop/Backdrop'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import { useEffect, useState } from 'react'
import { getStatistics } from '../../repository/repository'

const Home = () => {

  const [data, setData] = useState({})
  const [isLoading, setIsLodin] = useState(true)
  const [votes, setVotes] = useState([])

  useEffect(() => {

    async function fetchData() {

      const response = (await getStatistics()).data
      setData(response.statistics)
      setIsLodin(false)

    }
    fetchData()
  }, [])


  return (
    <div className='home'>

      {
        isLoading ? <Backdrop open={isLoading} /> :

          <>
            <Sidebar />
            <div className="homeContainer">
              <Navbar />
              <div className="widgets">
                <Widget type="candidate" amount={data.candidatesCount} />
                <Widget type="voter" amount={data.votersCount} />
                <Widget type="party" amount={data.partiesCount} />
                <Widget type="vote" amount={data.votesCount} />
              </div>

              {
                data.votes &&
                <div className="charts">
                  <FeaturedChart candidate={data.votes.winner} />
                  <BarChartComponent aspect={2 / 1} title={"Estado actual"} votes={data.votes} />
                </div>
              }


            </div>
          </>
      }

    </div>
  )
}

export default Home