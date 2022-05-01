import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { useState, useContext } from "react";
import googleLogo from "../assets/google.png"
import { AuthContext } from '../context/AuthContext';
import styles from './Login.module.css'


export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { createUser, signUpProvider } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(email, password, navigate)
    };

    const handleProviderRegister = () => {
        signUpProvider(navigate)
    }

    return (
        <div className={styles.container}>
            <Container component="main" maxWidth="xs" className={styles.mainContainer}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <img src={blog} alt="blog" className={styles.image} />

                    <Typography component="h1" variant="h5">
                        ── Register ──
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
                                REGISTER
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: "black", backgroundColor: "white" }}
                                onClick={handleProviderRegister}
                            >
                                WITH  <img src={googleLogo} alt="google" className={styles.googleImage} />
                            </Button>

                        </form>
                    </Box>

                </Box>

            </Container>
        </div>
    );
}