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
    bike: {
        img: string,
        title: string,
        description: string[],
    };
    cardNumber: number;
    bikeId: number;
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
}));

function BikeCard({ bike, cardNumber, bikeId } : ComponentProps) {
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
                alt={ bike.title }
                image={ bike.img }
                sx={{ width: 220 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" >
                        { bike.title }
                    </Typography>
                    { bike.description.map((item, ind) => (
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
                        to={`/bike/${bikeId}`}
                        size="small"
                    >
                        Подробнее
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default BikeCard;
