import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';


const Cart = ({ cart }) => {
    const isEmpty = !cart.line_items.length;  // Putting "!" before "cart.line_items.length" is the same as adding "=== 0" at the end.
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in yur shopping car, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_width_symbol}</Typography> 
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                </div>
            </div>
        </>
    );

    return ( 
        <Container>
            <div className={classes.toolbar} /> {/*pushes content down so it appears under the navbar*/}
            <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart;

