import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Product/Product';
import useStyles from './styles';


const products = [
    { id: 1, name: 'Shoes' , description: 'Running shoes.', price: '$5' , image: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/256651_10_Running_Shoes_to_Try_1296x728-header.jpg?w=1155&h=1528' },
    { id: 2, name: 'Laptop' , description: 'Acer Laptop.', price: '$10' , image: 'https://static.acer.com/up/Resource/Acer/Laptops/Aspire_5/images/20201117/Acer-Aspire-5_A515-56-56G-56S-56T_Non-FP-with-Backlit_Silver_modelpreview.png' },
];

const Products = () => {
    const classes = useStyles();
    
    return (
        <main classsName={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />   
                    </Grid>
                ))}
            </Grid>
        </main>
    );    
}

export default Products; 

