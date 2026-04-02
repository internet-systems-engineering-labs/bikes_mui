import buildings from "../table";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {
    const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        { field: 'Название', headerName: 'Название', flex: 1},
        { field: 'Бренд', flex: 0.5},
        { field: 'Категория', flex: 0.7},
        { field: 'Год' },
        { field: 'Цена'},
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                showToolbar={true}
                rows={rows}
                columns={columns}
            />
        </Container>
    );
}

export default BuildingsGrid;
