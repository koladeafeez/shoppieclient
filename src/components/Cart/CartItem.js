import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Grid,
  IconButton,
  Divider,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 7%), 0px 1px 3px 0px rgb(0 0 0 / 6%)",
    marginBottom: theme.spacing(2),
    backgroundColor: "#ffffff",
    maxHeight: "6rem",
  },
  productName: {
    width: "40%",
  },
  otherColumn: {
    width: "20%",
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  firstColumn: {
    display: "flex",
    justifyContent: "space-between",
  },
  productImage: {
    width: "20%",
  },
  productDetails: {
    width: "70%",
  },
  name: {
    fontSize: "16px",
    // fontWeight: 500,
    lineHeight: "1.25",
    backgroundColor: "transparent",
    color: "#000",
    fontWeight: "bolder",
    // paddingTop: ".5rem",
    // lineHeight: 1.25
  },
  size: {
    color: "#ababab",
    fontSize: "14px",
    lineHeight: 1,
    paddingTop: ".5rem",
  },
  button: {
    fontWeight: 500,
    color: "#f68b1e",
    fontSize: ".8rem",
    float: "right",
    padding: 0,
    marginRight: "2rem",
    // marginLeft: "100%",
  },
  qltyP: {
    paddingLeft: theme.spacing(2),
  },
}));
// import useStyles from "../../styles/CartItemstyles";

const CartItem = ({ product, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

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

    <Grid container className={classes.container} elevation={2}>
      <Grid item className={`${classes.productName} ${classes.firstColumn}`}>
        <div className={classes.productImage}>
          <img src={img} width="100%" height="80%" alt="" />
        </div>
        <div className={classes.productDetails}>
          {" "}
          <Typography>first row</Typography>
          <Typography className={classes.name}>
            {product.productname}
          </Typography>
          <Typography className={classes.size}>Size</Typography>
          <Typography>{product.shortdetails}</Typography>
          <IconButton className={classes.button}>
            {" "}
            <DeleteIcon></DeleteIcon> REMOVE{" "}
          </IconButton>
        </div>
      </Grid>
      {/* <Divider orientation="vertical" /> */}
      <Grid item className={classes.otherColumn}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={quantity}
          onChange={handleQuantityChange}
          className={classes.select}
          // label="Age"
        >
          <MenuItem
            value="1"
            style={{ backgroundColor: "#212121", color: "#ffffff" }}
          >
            1
          </MenuItem>
          <MenuItem
            value="2"
            style={{ backgroundColor: "#212121", color: "#ffffff" }}
          >
            2
          </MenuItem>
          <MenuItem
            value="3"
            style={{ backgroundColor: "#212121", color: "#ffffff" }}
          >
            3
          </MenuItem>
          <MenuItem
            value="4"
            style={{ backgroundColor: "#212121", color: "#ffffff" }}
          >
            4
          </MenuItem>
        </Select>

        {/* <IconButton>
          <AddIcon />
        </IconButton>
        <Typography className={classes.qltyP}>1</Typography>
        <IconButton>
          <RemoveIcon />
        </IconButton> */}
      </Grid>
      {/* <Divider orientation="vertical" flexItem /> */}
      <Grid item className={classes.otherColumn}>
        <Typography>$2000</Typography>
      </Grid>
      {/* <Divider orientation="vertical" /> */}
      <Grid item className={classes.otherColumn}>
        <Typography style={{ color: "#f68b1e" }}>$2000</Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
