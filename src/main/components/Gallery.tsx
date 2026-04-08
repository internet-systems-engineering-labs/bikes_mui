import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import bikes from "../../data";
import { Link } from 'react-router-dom';

const galleryItems = bikes.slice(0, 5).map((bike, index) => ({
    ...bike,
    bikeId: index,
}));

const leftColumnItems = galleryItems.slice(0, 2);
const rightColumnItems = galleryItems.slice(2, 5);

function GalleryCard({
    img,
    title,
    bikeId,
}: {
    img: string;
    title: string;
    bikeId: number;
}) {
    return (
        <Link
            to={`/bike/${bikeId}`}
            style={{ display: 'block', height: '100%', textDecoration: 'none' }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    cursor: 'pointer',
                }}
            >
                <Box
                    component="img"
                    src={img}
                    alt={title}
                    loading="lazy"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.25s ease',
                        '&:hover': {
                            transform: 'scale(1.03)',
                        },
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        px: 2,
                        py: 1.5,
                    }}
                >
                    <Typography variant="h6" sx={{ color: 'common.white' }}>
                        {title}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
}

function Gallery() {
    return (
        <Container maxWidth="lg" sx={{ mt: 3 }}>
            <Box
                sx={{
                    display: 'grid',
                    gap: 1.5,
                    gridTemplateColumns: {
                        xs: '1fr',
                        md: '2fr 1fr',
                    },
                    alignItems: 'stretch',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gap: 1.5,
                        gridTemplateRows: {
                            xs: 'repeat(2, minmax(200px, auto))',
                            md: 'repeat(2, 1fr)',
                        },
                        height: {
                            md: 540,
                        },
                    }}
                >
                    {leftColumnItems.map((item) => (
                        <Box
                            key={item.img}
                            sx={{
                                minHeight: {
                                    xs: 200,
                                    md: 0,
                                },
                            }}
                        >
                            <GalleryCard img={item.img} title={item.title} bikeId={item.bikeId} />
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gap: 1.5,
                        gridTemplateRows: {
                            xs: 'repeat(3, minmax(200px, auto))',
                            md: 'repeat(3, 1fr)',
                        },
                        height: {
                            md: 540,
                        },
                    }}
                >
                    {rightColumnItems.map((item) => (
                        <Box
                            key={item.img}
                            sx={{
                                minHeight: {
                                    xs: 200,
                                    md: 0,
                                },
                            }}
                        >
                            <GalleryCard img={item.img} title={item.title} bikeId={item.bikeId} />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Gallery;
