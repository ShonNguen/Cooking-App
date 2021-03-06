import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeFormSuccess({ setRecipePosted }) {
    function onClickSetter() {
        setRecipePosted(false); 
    }

    return (
        <Container component='main' maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component='h2' variant='h3'>
                    Successfully posted a recipe!
                </Typography>
                <Link to='/logged-in'>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mb: 1, bgcolor: '#673ab7' }}
                        onClick={onClickSetter}
                    >
                        Go Back To Dashboard
                    </Button>
                </Link>
                <Link to='/recipe-form'>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mb: 1 }}
                        onClick={onClickSetter}
                    >
                        Post new Recipe
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}
