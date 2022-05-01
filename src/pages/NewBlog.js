import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BlogContext } from '../context/BlogContext';
import Container from '@mui/material/Container';
import blog from "../assets/blog.png"
import { useState, useContext } from "react";
import styles from './Login.module.css'




export default function NewBlog() {
  const navigate = useNavigate();
  const [info, setInfo] = useState()
  const { AddNewBlog, UpdateBlog } = useContext(BlogContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      UpdateBlog(info)
    }
    else {
      AddNewBlog(info)
      navigate("/")
    }

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
        >

          <img src={blog} alt="login_blog" className={styles.image} />

          <Typography component="h1" variant="h5">
            ── New Blog ──
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form id="register" action="" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                onChange={handleChange}
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
              />

              <TextField
                margin="normal"
                multiline
                maxRows={10}
                required
                fullWidth
                name="content"
                label="content"
                type="textarea"
                id="content"
                onChange={handleChange}
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
  );
}