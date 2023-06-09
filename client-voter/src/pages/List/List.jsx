/* eslint-disable react/prop-types */
import './list.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import DataTable from '../../components/DataTable/DataTable'

const List = ({title = "", dataColumns, query}) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTable title={title} dataColumns={dataColumns} query={query}/>
      </div>
    </div>
  )
}

export default List