import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import googleLogo from "../assets/google.png"
import { useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'



const style = {
    backgroundImage: `url("https://picsum.photos/1200/900")`,
    boxSizing: "border-box",
    backgroundPosition: "center",
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "88.2vh",
    padding: "1rem"
};

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { signIn, signUpProvider } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        signIn(email, password, navigate)
    };
    const handleProviderLogIn = () => {
        signUpProvider(navigate)
    }

    return (
        <div className={styles.container}>
            <Container component="main" maxWidth="xs" className={styles.mainContainer}>
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >

                    <img src={blog} alt="login" className={styles.image} />

                    <Typography component="h1" variant="h5">
                        ── Login ──
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <form id="register" action="" onSubmit={handleSubmit}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "#046582" }}

                            >
                                Login
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "black", backgroundColor: "white" }}
                                onClick={handleProviderLogIn}
                            >
                                WITH  <img src={googleLogo} alt="google" className={styles.googleImage}  />
                            </Button>

                        </form>
                    </Box>
                </Box>

            </Container>
        </div >
    );
}