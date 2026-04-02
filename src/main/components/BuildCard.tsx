import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface ComponentProps {
    building: {
        img: string,
        title: string,
        description: string[],
    };
    cardNumber: number;
    buildingId: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
}));

function BuildCard({ building, cardNumber, buildingId } : ComponentProps) {
    const isOddCard = cardNumber % 2 !== 0;

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: isOddCard ? 'row-reverse' : 'row',
            }}
        >
            <CardMedia
                component="img"
                alt={ building.title }
                image={ building.img }
                sx={{ width: 220 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        { building.title }
                    </Typography>
                    { building.description.map((item, ind) => (
                        <StyledTypography key={ind} variant="body2">
                            { item }
                        </StyledTypography>
                    ))}
                </CardContent>
                <CardActions
                    sx={{ justifyContent: isOddCard ? 'flex-end' : 'flex-start' }}
                >
                    <Button
                        component={Link}
                        to={`/building/${buildingId}`}
                        size="small"
                    >
                        Подробнее
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default BuildCard;
