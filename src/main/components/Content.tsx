import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import structures from "../../data";
import BuildCard from './BuildCard';

const cardData = [3, 6, 9, 7];

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((buildingId, index) => (
                    <Grid key={buildingId} size={{ xs: 12, md: 6 }}>
                        <BuildCard
                            building={structures[buildingId]}
                            cardNumber={index + 1}
                            buildingId={buildingId}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;
