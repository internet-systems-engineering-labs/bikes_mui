import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import bikes from "../../data";
import BikeCard from './BikeCard';

const featuredBikeId = 3;
const compactBikeIds = [0, 6, 9, 4, 2, 8];

function Content() {
    return (
        <Container maxWidth="xl" sx={{ py: 5 }}>
            <Box
                sx={{
                    display: 'grid',
                    gap: 4,
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: 'repeat(3, minmax(220px, 1fr))',
                    },
                    gridTemplateAreas: {
                        xs: `
                            "featured"
                            "card1"
                            "card2"
                            "card3"
                            "card4"
                            "card5"
                            "card6"
                        `,
                        md: `
                            "card1 card2 card3"
                            "featured featured featured"
                            "card4 card5 card6"
                        `,
                    },
                    alignItems: 'stretch',
                }}
            >
                {compactBikeIds.map((bikeId, index) => (
                    <Box
                        key={bikeId}
                        sx={{
                            gridArea: `card${index + 1}`,
                            maxWidth: {
                                xs: '100%',
                                md: 260,
                            },
                            width: '100%',
                            justifySelf: 'center',
                        }}
                    >
                        <BikeCard
                            bike={bikes[bikeId]}
                            bikeId={bikeId}
                            variant="compact"
                        />
                    </Box>
                ))}

                <Box
                    sx={{
                        gridArea: 'featured',
                        maxWidth: {
                            xs: '100%',
                            md: 820,
                        },
                        width: '100%',
                        justifySelf: 'center',
                        mb: {
                            xs: 0,
                            md: 4,
                        },
                    }}
                >
                    <BikeCard
                        bike={bikes[featuredBikeId]}
                        bikeId={featuredBikeId}
                        variant="featured"
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Content;
