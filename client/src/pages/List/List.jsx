/* eslint-disable react/prop-types */
import './list.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DataTable from '../../components/DataTable/DataTable'

const List = ({title = ""}) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title={title}/>
      </div>
    </div>
  )
}

export default List