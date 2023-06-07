/* eslint-disable react/prop-types */
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatableSource';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api/api';



const DataTable = ({title}) => {

  const [data, setData] = useState([])
  const [isUserLocation, setIsUSerLocation] = useState(true);
  const location = useLocation();

  useEffect(() => {

    setIsUSerLocation(location.pathname.includes('users'))
    api.get('/user').then((res) => setData(res.data.users))

  }, [])

  // eslint-disable-next-line no-unused-vars
  const handleDelete = async (id) => {
    //TODO: Delete User
  }


  const actionColumn = [
    {
      field: 'action', headerName: 'Acções', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <NavLink to={'/users/id'}>
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
      <div className={`datatableTitle ${isUserLocation ? 'invisible' : ''}`}>
        {title}
        <NavLink to={'/users/new'} className='link' >
          Novo
        </NavLink>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable