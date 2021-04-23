import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";

import useStyles from "../../styles/ProductStyles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  // const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} title="product1" />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            flower
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            #5000
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: "food" }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
