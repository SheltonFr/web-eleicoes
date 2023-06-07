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

export const voterColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 170 },
    { field: 'bi', headerName: 'BI', width: 130 },
    {
        field: 'username',
        headerName: 'username',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={"https://gravatar.com/avatar/jose?d=identicon"} alt="avatar" />
                    {params.row.user.username}
                </div>
            )
        }
    },
    {
        field: 'isActive',
        headerName: 'Status',
        with: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.user.isActive ? "active" : "passive"}`}>
                    {params.row.user.isActive ? "Activo" : "Inactivo"}
                </div>
            )
        }
    },
]

export const partiesColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 170 },
    { field: 'description', headerName: 'Descrição', width: 200 },
    {
        field: 'createdAt',
        headerName: 'Registro',
        with: 160,
    },
]

export const candidateColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'name',
        headerName: 'Nome',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={"https://gravatar.com/avatar/jose?d=identicon"} alt="avatar" />
                    {params.row.name}
                </div>
            )
        }
    },
    {
        field: 'party',
        headerName: 'Partido',
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {params.row.party.name}
                </div>
            )
        }
    },
]