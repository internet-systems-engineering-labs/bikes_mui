import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Link} from 'react-router-dom';

interface ComponentProps {
    active: string;
}

interface NavbarItemProps {
    active: boolean;
    children: React.ReactNode;
}

function NavbarButtonItem({ active, children }: NavbarItemProps) {
    return (
        <Button
            variant={active ? 'contained' : 'text'}
            color="info"
            size="medium"
        >
            {children}
        </Button>
    );
}

function NavbarDrawerItem({ active, children }: NavbarItemProps) {
    return (
        <MenuItem
            sx={{
                color: 'common.black',
                backgroundColor: active ? 'info.main' : 'transparent',
                '&:hover': {
                    backgroundColor: '#bbdefb',
                },
            }}
        >
            {children}
        </MenuItem>
    );
}

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
}));

function Navbar({ active }: ComponentProps) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <AppBar
            position="static"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                mt: '28px',
            }}
        >
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
                        Самые высокие здания и сооружения
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="/">
                            <NavbarButtonItem active={active === 'main'}>
                                Главная
                            </NavbarButtonItem>
                        </Link>
                        <Link to="/list">
                            <NavbarButtonItem active={active === 'list'}>
                                Список зданий
                            </NavbarButtonItem>
                        </Link>
                        <Link to="/charts">
                            <NavbarButtonItem active={active === 'charts'}>
                                Диаграммы
                            </NavbarButtonItem>
                        </Link>
                        <Link to="/testing">
                            <NavbarButtonItem active={active === 'testing'}>
                                Проверь себя
                            </NavbarButtonItem>
                        </Link>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>

                        <Drawer
                            anchor="top"
                            open={ open }
                            onClose={toggleDrawer(false)}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <Link to="/">
                                    <NavbarDrawerItem active={active === 'main'}>
                                        Главная
                                    </NavbarDrawerItem>
                                </Link>
                                <Link to="/list">
                                    <NavbarDrawerItem active={active === 'list'}>
                                        Список зданий
                                    </NavbarDrawerItem>
                                </Link>
                                <Link to="/charts">
                                    <NavbarDrawerItem active={active === 'charts'}>
                                        Диаграммы
                                    </NavbarDrawerItem>
                                </Link>
                                <Link to="/testing">
                                    <NavbarDrawerItem active={active === 'testing'}>
                                        Проверь себя
                                    </NavbarDrawerItem>
                                </Link>
                            </Box>
                        </Drawer>

                    </Box>

                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
