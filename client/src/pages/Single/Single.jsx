import './single.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import NormalChart from '../../components/NormalChart/NormalChart'
import Table from '../../components/Table/Table'


const data = [
  { name: 'January', Total: 1200 },
  { name: 'January', Total: 2200 },
  { name: 'January', Total: 800 },
  { name: 'January', Total: 1600 },
  { name: 'January', Total: 900 },
  { name: 'January', Total: 1700 }
];

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Jane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+258 872 321 421</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Matola, Mozambique</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">Mz</span>
                </div>
              </div>
            </div>
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
    </div>
  )
}

export default Single