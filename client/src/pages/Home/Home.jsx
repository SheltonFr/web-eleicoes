import FeaturedChart from '../../components/FeaturedChart/FeaturedChart'
import NormalChart from '../../components/NormalChart/NormalChart'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Widget from '../../components/Widget/Widget'
import './home.scss'
import Table from '../../components/Table/Table'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <FeaturedChart />
            <NormalChart aspect={2 / 1} title={"Last 6 Months (Revenue)"} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home