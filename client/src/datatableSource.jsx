export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'username',
        headerName: 'username',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={"https://gravatar.com/avatar/jose?d=identicon"} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'type', headerName: 'Tipo', with: 100 },
    {
        field: 'isActive',
        headerName: 'Status',
        with: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.isActive ? "active" : "passive"}`}>
                    {params.row.isActive ? "Activo" : "Inactivo"}
                </div>
            )
        }
    },
]