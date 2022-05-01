import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Emir from '../assets/emir.png'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import styles from './Navbar.module.css'


export default function Navbar() {
    const { currentUser, logOut } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();


    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDashboard = () => {
        navigate("/");
    };

    const handleLogout = () => {
        navigate("/login");
        handleMenuClose();
    }


    const name = "<Emir/>"
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" >
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDashboard}
                    >
                        <img src={Emir} className={styles.emirLogo} alt="emir logo" />
                    </IconButton>
                    <Typography onClick={() => navigate("/")} className={styles.para1} variant="h6" component="div" >
                        <h2 ><span className={styles.blog1}> {name}</span> Blog</h2>
                    </Typography>
                    <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none' } }}>
                        {currentUser?.displayName ? <span className={styles.blog2}>{currentUser?.displayName}</span> : ""}
                    </Typography>


                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle sx={{ width: "2rem", height: "2rem" }} />

                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}


                    >
                        {currentUser ? (
                            <div>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/profile");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/newblog");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">New Blog</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        logOut();
                                        navigate("/");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </div>
                        ) : (
                            <div>
                                <MenuItem
                                    onClick={handleLogout}
                                >
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        navigate("/register");
                                        setAnchorEl(null);
                                    }}
                                >
                                    <Typography textAlign="center">Register</Typography>
                                </MenuItem>
                            </div>
                        )}
                    </Menu>


                </Toolbar>
            </AppBar>
        </Box >
    );
}
