import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import bikes from "../../data";
import BikeCard from './BikeCard';

const cardData = [3, 6, 9, 7];

function Content() {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={{ xs: 3, md: 6 }}>
                {cardData.map((bikeId, index) => (
                    <Grid key={bikeId} size={{ xs: 12, md: 6 }}>
                        <BikeCard
                            bike={bikes[bikeId]}
                            cardNumber={index + 1}
                            bikeId={bikeId}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Content;
