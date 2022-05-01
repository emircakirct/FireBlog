import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { AuthContext } from '../context/AuthContext';
import { useContext } from "react";
import userImage from '../assets/user.png'

export default function Profile() {
    const { currentUser } = useContext(AuthContext)
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30rem',
                height: '30rem',
                textAlign: 'center',
                margin: 'auto',
                marginTop: '10rem',
                minWidth: 275,
            }}
        >
            <CardContent>
                <CardMedia component="img" height="230" image={userImage} alt="profile" />
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Display Name
                </Typography>
                <Typography variant="h5" component="div">
                    Emirhan Cakir
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Email: emirhancakirct@hotmail.com
                </Typography>
               
            </CardContent>
        </Card>
    );
}