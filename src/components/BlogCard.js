import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {toastSuccessNotify} from "../helpers/toastNotify";
import styles from './BlogCard.module.css'


export default function BlogCard({ item }) {
    const { currentUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const [likeNumber, setLikeNumber] = useState(0);
    const [likeColor, setLikeColor] = useState();
    const [click, setClick] = useState(true);



    const handleClick = () => {

        return ((currentUser) ? (navigate("/details", { state: { item } })) : (navigate("/login"), toastSuccessNotify("Please log in to see the details")))

    }

    return (
        <Card sx={{ width: 350, height: 550 }} className={styles.card1} >
            <CardMedia
                component="img"
                height="230"
                image={item.imageURL}
                alt="blog photo"
                objectfit="contain"
                onClick={handleClick}
            />
            <CardContent className={styles.cardContent} onClick={handleClick}>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        display: "block",
                        backgroundColor: "#afeeee",
                        padding: "0.5rem",
                        height: "30%",
                    }}
                >
                    <div className={styles.cardColor}>
                        <h2>{`${item.title}`.substring(0, 20) + ""}</h2>
                        <h5 className={styles.date}>{item.date}</h5>
                        <h5 color="#046582">{`${item.content}`.substring(0, 30) + "..."}</h5>
                    </div>


                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "black", textAlign: "start", mt: 2 }}
                >
                    <IconButton sx={{ color: "black", fontSize: "small" }}>
                        <AccountCircleIcon fontSize="small" />
                        {item.author}
                    </IconButton>

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    sx={{ color: "red" }}
                    aria-label="add to favorites"
                >
                    <FavoriteIcon />
                </IconButton>
                <span>34</span>
                <IconButton aria-label="comment">
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <span>34</span>
            </CardActions>
        </Card>
    );
}