import Backdrop from '../../components/Backdrop/Backdrop'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import './home.scss'
import { useEffect, useState } from 'react'
import { fetchCandidates } from '../../repository/repository'

const Home = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLodin] = useState(true)


  useEffect(() => {

    const fetchData = async () => {
      const response = (await fetchCandidates()).data;
      setData(response.result)
      setIsLodin(false)
      console.log(response);
    }

    fetchData();
  }, [])

  return (
    <div className='home'>

      {
        <>
          <Sidebar />
          <div className="homeContainer">
            <Navbar />
            <div className="widgets">
              {
                data.map((candidate) => <Widget type="candidate" key={candidate.id} candidate={candidate} />)
              }

            </div>

          </div>
        </>
      }
      <Backdrop open={isLoading} />
    </div>
  )
}

export default Home