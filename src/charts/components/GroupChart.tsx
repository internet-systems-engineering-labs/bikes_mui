import { BarChart } from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import { tGroup } from "../groupdata";
import React from 'react';
import SettingChart from './SettingChart';
import { LineChart } from '@mui/x-charts/LineChart';

type GroupChartProps = {
    data: tGroup;
};

function GroupChart({ data }: GroupChartProps) {
    const [series, setSeries] = React.useState({
        'Максимальная цена': true,
        'Средняя цена': false,
        'Минимальная цена': false,
    });

    const isSingleSeries = Object.values(series).filter(Boolean).length === 1;

    let seriesY = Object.entries(series)
        .filter(item => item[1] === true)
        .map(item => {
            return {
                "dataKey": item[0],
                "label": item[0],
                "barLabel": isSingleSeries ? 'value' as const : undefined,
            }
        });

    const chartSetting = {
        yAxis: [{
            label: 'Цена',
        }],
        height: 400,
    };

    const [isBar, setIsBar] = React.useState(true);

    return(
        <Container maxWidth="lg" sx={{ mt: '20px' }}>
            {isBar ? (
                <BarChart
                    dataset={ data }
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={ seriesY }
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            ) : (
                <LineChart
                    dataset={ data }
                    xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
                    series={ seriesY }
                    slotProps={{
                        legend: {
                            position: { vertical: 'bottom', horizontal: 'center' },
                        },
                    }}
                    {...chartSetting}
                />
            )}
            <SettingChart
                series={ series }
                setSeries={ setSeries }
                isBar={ isBar }
                setIsBar={ setIsBar }
            />
        </Container>
    )
}

export default GroupChart;
