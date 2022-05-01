import { useLocation, useNavigate } from "react-router";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";
import { Box, Container, CssBaseline, Stack } from "@mui/material";


const Details = () => {
    const location = useLocation();
    const item = location.state.item;
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext);
    const { DeleteBlog } = useContext(BlogContext);

    const handleDelete = (id) => {
        DeleteBlog(id)
        navigate("/")
    }

    const handleUpdate = () => {
        navigate("/updateblog", { state: { item } });
    }


    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
        <Typography
          sx={{ color: "#046582", fontFamily: "Girassol" }}
          variant="h2"
          component="h2"
          textAlign="center"
          marginTop="2rem"
        >
          ──── DETAILS ────
        </Typography>
        <Box sx={{ height: "92%" }}>
          <Card
            sx={{
              width: "80%",
              height: "40%",
              display: "block",
              margin: "auto",
              marginBottom: 4,
            }}
          >
            <CardMedia
              component="img"
              alt={item.title}
              height="60%"
              image={item.imageURL}
              objectfit="contain"
            />
            <CardContent
              sx={{
                display: "block",
                backgroundColor: "#EFEEFE",
                padding: "0.5rem",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Girassol",
                  color: "#046582",
                  fontSize: "2rem",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {item.content}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ color: "black", textAlign: "start" }}>
                <IconButton sx={{ color: "black" }}>
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
                {item.author}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: -2 }}>
              <IconButton aria-label="add to favorites" style={{color:"red"}}>
                <FavoriteIcon />
              </IconButton>
              <span>34</span>
              <IconButton aria-label="comment">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <span>34</span>
            </CardActions>
          </Card>
          {item.author === currentUser?.email ? (
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginY: 3,
              }}
            >
              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={() => {
                  handleUpdate(item.id);
                }}
              >
                Update
              </Button>
              <Button
                size="large"
                variant="contained"
                color="error"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </Button>
            </Stack>
          ) : null}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Details;