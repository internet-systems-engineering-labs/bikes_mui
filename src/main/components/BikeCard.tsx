import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';

interface ComponentProps {
    bike: {
        img: string,
        title: string,
        description: string[],
    };
    bikeId: number;
    variant?: 'featured' | 'compact';
}

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    marginBottom: theme.spacing(1.5),
}));

function getCanvasFont(element: HTMLElement) {
    const styles = window.getComputedStyle(element);
    return [
        styles.fontStyle,
        styles.fontVariant,
        styles.fontWeight,
        styles.fontSize,
        styles.fontFamily,
    ].join(' ');
}

function fitTextByWords(text: string, availableWidth: number, font: string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context || availableWidth <= 0) {
        return { text, truncated: false };
    }

    context.font = font;
    if (context.measureText(text).width <= availableWidth) {
        return { text, truncated: false };
    }

    const words = text.split(/\s+/);
    let result = '';

    for (const word of words) {
        const next = result ? `${result} ${word}` : word;
        if (context.measureText(next).width > availableWidth) {
            break;
        }
        result = next;
    }

    return {
        text: result,
        truncated: result.length < text.length,
    };
}

function measureTextWidth(text: string, font: string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
        return 0;
    }

    context.font = font;
    return context.measureText(text).width;
}

function CompactTitle({ title }: { title: string }) {
    const titleRef = React.useRef<HTMLHeadingElement | null>(null);
    const [visibleTitle, setVisibleTitle] = React.useState({ text: title, truncated: false });

    React.useLayoutEffect(() => {
        const element = titleRef.current;
        if (!element) {
            return;
        }

        const updateTitle = () => {
            const font = getCanvasFont(element);
            const fitted = fitTextByWords(title, element.clientWidth - 20, font);
            setVisibleTitle(fitted);
        };

        updateTitle();
        const resizeObserver = new ResizeObserver(updateTitle);
        resizeObserver.observe(element);

        return () => resizeObserver.disconnect();
    }, [title]);

    return (
        <Typography
            ref={titleRef}
            gutterBottom
            variant="h6"
            sx={{
                textAlign: 'center',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                width: '100%',
            }}
        >
            {visibleTitle.text}
            {visibleTitle.truncated ? ' ...' : ''}
        </Typography>
    );
}

function CompactDescription({ text, bikeId }: { text: string; bikeId: number }) {
    const textRef = React.useRef<HTMLSpanElement | null>(null);
    const [visibleText, setVisibleText] = React.useState({ text, truncated: false });

    React.useLayoutEffect(() => {
        const textElement = textRef.current;

        if (!textElement) {
            return;
        }

        const updateText = () => {
            const font = getCanvasFont(textElement);
            const ellipsisWidth = measureTextWidth(' ...', font);
            const fullWidth = measureTextWidth(text, font);
            const availableWidth = fullWidth > textElement.clientWidth
                ? textElement.clientWidth - ellipsisWidth
                : textElement.clientWidth;
            const fitted = fitTextByWords(text, availableWidth, font);
            setVisibleText(fitted);
        };

        updateText();
        const resizeObserver = new ResizeObserver(updateText);
        resizeObserver.observe(textElement);

        return () => resizeObserver.disconnect();
    }, [text]);

    return (
        <Box
            sx={{
                width: '100%',
                minWidth: 0,
                textAlign: 'center',
            }}
        >
            <StyledTypography
                ref={textRef}
                variant="body2"
                sx={{
                    mb: 0,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textAlign: 'center',
                }}
            >
                {visibleText.text}
                <Box
                    component={Link}
                    to={`/bike/${bikeId}`}
                    sx={{
                        display: 'inline',
                        color: 'info.main',
                        textDecoration: 'underline',
                        fontWeight: 600,
                        visibility: visibleText.truncated ? 'visible' : 'hidden',
                    }}
                >
                    ...
                </Box>
            </StyledTypography>
        </Box>
    );
}

function BikeCard({ bike, bikeId, variant = 'compact' } : ComponentProps) {
    const isFeatured = variant === 'featured';

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: 0,
                borderRadius: isFeatured ? 6 : 0,
                bgcolor: isFeatured ? '#c7b6b0' : 'background.paper',
                pt: isFeatured ? 2 : 0,
                px: isFeatured ? 2 : 0,
                pb: isFeatured ? 0 : 0,
                alignItems: isFeatured ? 'stretch' : 'center',
            }}
        >
            <CardMedia
                component="img"
                alt={ bike.title }
                image={ bike.img }
                sx={{
                    width: isFeatured ? '100%' : '60%',
                    height: isFeatured ? 220 : 120,
                    objectFit: 'cover',
                    borderRadius: isFeatured ? 4 : 0,
                    bgcolor: 'common.white',
                    mt: isFeatured ? 0 : 2,
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    width: isFeatured ? '100%' : '60%',
                    alignItems: isFeatured ? 'stretch' : 'center',
                }}
            >
                <CardContent
                    sx={{
                        pb: isFeatured ? 0 : 2,
                        px: isFeatured ? 2 : 0,
                        pt: 2,
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {isFeatured ? (
                        <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                                textAlign: 'center',
                                fontWeight: 700,
                            }}
                        >
                            {bike.title}
                        </Typography>
                    ) : (
                        <CompactTitle title={bike.title} />
                    )}
                    {isFeatured ? (
                        bike.description.map((item, ind) => (
                            <StyledTypography key={ind} variant="body2">
                                { item }
                            </StyledTypography>
                        ))
                    ) : (
                        <CompactDescription text={bike.description[0]} bikeId={bikeId} />
                    )}
                </CardContent>
                {isFeatured ? (
                    <CardActions
                        sx={{
                            justifyContent: 'flex-start',
                            pt: 0,
                            px: 2,
                            pb: 1,
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Button
                            component={Link}
                            to={`/bike/${bikeId}`}
                            size="small"
                            variant="contained"
                            color="info"
                        >
                            Подробнее
                        </Button>
                    </CardActions>
                ) : null}
            </Box>
        </Card>
    )
}

export default BikeCard;
