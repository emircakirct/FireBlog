import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router";
import { useState, useContext } from "react";
import BlogIcon from "../assets/blok.png";
import Box from "@mui/material/Box";
import { BlogContext } from "../context/BlogContext";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import styles from './BlogForm.module.css'

const BlogForm = () => {
  const location = useLocation();
  const { EditBlog } = useContext(BlogContext);
  const item = location.state.item;
  const initialValues = { ...item };
  const [info, setInfo] = useState(initialValues);
  const navigate = useNavigate();
  
  const handleUpdate = (e) => {
    e.preventDefault();
    EditBlog(info);
    const item = info;
    navigate("/details", { state: { item } });

  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };


  return (
    <div style={styles.container}>
      <Container
        component="main"
        maxWidth="xs"
        className={styles.containerStyle}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={BlogIcon}
            alt="login_blog"
            className={styles.imageStyle}
          />

          <Typography component="h1" variant="h5">
            ── UPDATE BLOG ──
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form id="register" action="" onSubmit={handleUpdate}>
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
                className={styles.buttonStyle}
              >
                UPDATE
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BlogForm;

