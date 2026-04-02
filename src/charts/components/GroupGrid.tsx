import Container from '@mui/material/Container';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { tGroup } from "../groupdata";

type GroupProps = {
    data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
    const rows: GridRowsProp = data;
    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа', flex: 1, minWidth: 180 },
        { field: 'Минимальная цена', headerName: 'Минимальная цена', flex: 1, minWidth: 180 },
        { field: 'Максимальная цена', headerName: 'Максимальная цена', flex: 1, minWidth: 180 },
        { field: 'Средняя цена', headerName: 'Средняя цена', flex: 1, minWidth: 180 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
            />
        </Container>
    );
}

export default GroupGrid;
