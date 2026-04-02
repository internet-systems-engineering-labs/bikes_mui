import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import structures from '../data';

function Building() {
    const { id } = useParams();
    const parsedId = Number(id);
    const buildingIndex =
        Number.isInteger(parsedId) && parsedId >= 0 && parsedId < structures.length
            ? parsedId
            : 0;
    const building = structures[buildingIndex];

    return (
        <Box>
            <Navbar active="" />
            <Container maxWidth="xl" sx={{ mt: 3, mb: 5 }}>
                <Breadcrumbs separator=">" sx={{ mb: 5 }}>
                    <Link
                        component={RouterLink}
                        underline="hover"
                        to="/"
                    >
                        ГЛАВНАЯ
                    </Link>
                    <Typography color="text.primary">{building.title}</Typography>
                </Breadcrumbs>

                <Stack spacing={4} alignItems="center">
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            color: 'text.secondary',
                        }}
                    >
                        {building.title}
                    </Typography>

                    <Box
                        component="img"
                        src={building.img}
                        alt={building.title}
                        sx={{
                            width: '100%',
                            maxWidth: 520,
                            height: 'auto',
                            display: 'block',
                        }}
                    />

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                            gap: 3,
                            alignItems: 'start',
                            width: '100%',
                        }}
                    >
                        {building.description.map((text, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                align="justify"
                            >
                                {text}
                            </Typography>
                        ))}
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default Building;
