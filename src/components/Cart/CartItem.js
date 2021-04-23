import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "red",
  },
  productName: {
    width: "40%",
  },
  otherColumn: {
    width: "20%",
  },
  firstColumn: {
    display: "flex",
    justifyContent: "space-between",
  },
  productImage: {
    width: "10%",
  },
  productDetails: {
    width: "80%",
  },
}));
// import useStyles from "../../styles/CartItemstyles";

const CartItem = ({ product, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    // <Card className="cart-item">
    //   <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
    //   <CardContent className={classes.cardContent}>
    //     <Typography variant="h4">{item.name}</Typography>
    //     <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <div className={classes.buttons}>
    //       <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
    //       <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
    //       <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
    //     </div>
    //     <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
    //   </CardActions>
    // </Card>

    // <Paper>
    // <ul>
    //   <li>
    //     <Typography>image</Typography>
    //     <Typography>Product Name</Typography>
    //     <Typography>Product Size </Typography>
    //     <Typography>Location for pick up</Typography>
    //     <Button> Remove </Button>
    //   </li>
    //   <li>
    //     <Typography>1</Typography>
    //   </li>
    //   <li>
    //     <Typography> #4000 </Typography>
    //   </li>
    //   <li> #4000 </li>
    // </ul>
    // </Paper>
    <Grid container className={classes.container}>
      <Grid item className={`${classes.productName} ${classes.firstColumn}`}>
        <div className={classes.productImage}>
          <Typography> img</Typography>
        </div>
        <div className={classes.productDetails}>
          {" "}
          <Typography>first row</Typography>
          <Typography>{product.productname}</Typography>
          <Typography>SIZE</Typography>
          <Typography>{product.shortdetails}</Typography>
          <Button> REMOVE </Button>
        </div>
      </Grid>
      <Grid item className={classes.otherColumn}>
        <Typography>1</Typography>
      </Grid>
      <Grid item className={classes.otherColumn}>
        <Typography>$2000</Typography>
      </Grid>
      <Grid item className={classes.otherColumn}>
        <Typography>$2000</Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
