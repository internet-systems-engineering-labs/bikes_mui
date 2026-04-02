import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as React from 'react';
import { years, brands, categories } from "./groupdata";
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';

type tSelect = "Бренд" | "Год" | "Категория";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Бренд");

    const [groupData, setGroupData] = React.useState(brands);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as tSelect;
        setGroup(value);

        if (value === "Бренд") {
            setGroupData(brands);
        } else if (value === "Год") {
            setGroupData(years);
        } else {
            setGroupData(categories);
        }
    }

    return (
        <div>
            <Navbar active="charts" />
            <Box sx={{ width: "200px", mt: "20px", mx: "auto" }}>
            <FormControl fullWidth>
                <InputLabel> Группировать по </InputLabel>
                <Select
                    id="select-group"
                    value={ group }
                    label="Группировать по"
                    onChange={ handleChange }
                >
                    <MenuItem value="Бренд"> Бренду </MenuItem>
                    <MenuItem value="Год"> Году </MenuItem>
                    <MenuItem value="Категория"> Категории </MenuItem>
                </Select>
            </FormControl>
            </Box>
            <GroupChart data={groupData} />
            <GroupGrid data={groupData} />
            <Footer />
        </div>
    );
}

export default Chart;
