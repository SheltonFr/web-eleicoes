/* eslint-disable react/prop-types */
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCandidates, fetchParties, fetchVoters } from '../../repository/repository';



const DataTable = ({ title, dataColumns, query }) => {

  const [data, setData] = useState([])
  const location = useLocation();
  useEffect(() => {

    fetchData();

  }, [location.pathname])

  const fetchData = () => {
    if (location.pathname.includes('candidates')) {
      fetchCandidates().then((res) => setData(res.data.result))
      return;
    }

    if (location.pathname.includes('voters')) {
      fetchVoters().then((res) => setData(res.data.result))
      return;
    }

    if (location.pathname.includes('partys')) {
      fetchParties().then((res) => setData(res.data.result))
      return;
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleDelete = async () => {
    //TODO: Delete User
  }


  const actionColumn = [
    {
      field: 'action', headerName: 'Acções', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <NavLink to={`/${query}s/${params.row.id}`}>
              <div className="viewButton">Ver</div>
            </NavLink>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Apagar</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
      <div className={`datatableTitle ${query === 'voter' ? 'invisible' : ''}`}>
        {title}
        <NavLink to={`/${query}s/new`} className='link' >
          Novo
        </NavLink>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={dataColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable