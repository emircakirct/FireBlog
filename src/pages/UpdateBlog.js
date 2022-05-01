import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { useState, useContext } from "react";
import { BlogContext } from '../context/BlogContext';
import { useLocation } from "react-router"
import styles from './Login.module.css'


const UpdateBlog = () => {

    const location = useLocation();
    const item = location.state.item;
    const navigate = useNavigate();
    const initialValues = { ...item };

    const { UpdateBlog } = useContext(BlogContext);
    const [info, setInfo] = useState(initialValues)




    const handleSubmit = (e) => {
        e.preventDefault();
        UpdateBlog(info)
        navigate("/")

    };


    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }



    return (
        <div className={styles.container}>
            <Container component="main" maxWidth="xs" className={styles.mainContainer}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',



                    }}
                    onSubmit={handleSubmit}
                >

                    <img src={blog} alt="login" className={styles.image} />

                    <Typography component="h1" variant="h5">
                        ── Update Blog ──
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }} >
                        <form id="register" action="" >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                name="title"
                                autoFocus
                                onChange={handleChange}
                                value={info.title}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="imageURL"
                                label="Image URL"
                                type="url"
                                id="imageURL"
                                onChange={handleChange}
                                value={info.imageURL}
                            />

                            <TextField
                                margin="normal"
                                multiline
                                minRows={10}
                                required
                                fullWidth
                                name="content"
                                label="content"
                                type="textarea"
                                id="content"
                                onChange={handleChange}
                                value={info.content}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ backgroundColor: "teal" }}


                            >
                                SUBMIT
                            </Button>


                        </form>
                    </Box>
                </Box>

            </Container>
        </div >
    )
}

export default UpdateBlog