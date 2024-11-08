import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CharCard = (props) => {
    return (
        <Card
            sx={{
                width: 250,
                height: 350,
                overflow: 'hidden',
                backgroundImage: 'url("https://i.pinimg.com/736x/df/7e/24/df7e24b8739397baab5bbc75918ccbf3.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid #0077cc',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease',
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.img}
                    alt={props.nombre}
                    sx={{
                        objectFit: 'contain',
                        padding: 1,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)', // Agrandamos la imagen en hover
                        },
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.nombre}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {props.especie}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

CharCard.defaultProps = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
    nombre: "_____",
    especie: "_____"
};

export default CharCard;









