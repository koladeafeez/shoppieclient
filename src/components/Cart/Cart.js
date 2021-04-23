import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CartItem from "./CartItem.js";
import { getItemInCart } from "../../redux/actions/cartActions.js";
// import useStyles from "../../styles/Cartstyles";

const useStyles = makeStyles((theme) => ({
  table: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",

    gridTemplateRows: "repeat(auto-fill, 15% )",
    // minWidth: "100%",
  },
  productName: {
    width: "40%",
  },
  otherColumn: {
    width: "20%",
  },
}));

const Cart = ({ itemNumber, cartItem, getCart, saveItems }) => {
  const classes = useStyles();

  useEffect(() => {
    if (window.localStorage.getItem("cartItem") !== null && itemNumber === 0) {
      let localDataString = window.localStorage.getItem("cartItem");
      console.log("localData parse", JSON.parse(localDataString));
      let localData = JSON.parse(localDataString);
      getCart(localData);
    }
  }, []);
  cartItem = saveItems.length > 0 ? saveItems : cartItem;
  console.log("savedItems", saveItems);
  console.log("cartItemsssss", cartItem);

  // const handleEmptyCart = () => onEmptyCart();

  // const renderEmptyCart = () => (
  //   <Typography variant="subtitle1">
  //     You have no items in your shopping cart,
  //     <Link className={classes.link} to="/">
  //       start adding some
  //     </Link>
  //     !
  //   </Typography>
  // );

  // if (!cart.line_items) return "Loading";

  // const renderCart = () => (
  //   <>
  //     <Grid container spacing={3}>
  //       {cart.line_items.map((lineItem) => (
  //         <Grid item xs={12} sm={4} key={lineItem.id}>
  //           <CartItem
  //             item={lineItem}
  //             onUpdateCartQty={onUpdateCartQty}
  //             onRemoveFromCart={onRemoveFromCart}
  //           />
  //         </Grid>
  //       ))}
  //     </Grid>
  //     <div className={classes.cardDetails}>
  //       <Typography variant="h4">
  //         Subtotal: {cart.subtotal.formatted_with_symbol}
  //       </Typography>
  //       <div>
  //         <Button
  //           className={classes.emptyButton}
  //           size="large"
  //           type="button"
  //           variant="contained"
  //           color="secondary"
  //           onClick={handleEmptyCart}
  //         >
  //           Empty cart
  //         </Button>
  //         <Button
  //           className={classes.checkoutButton}
  //           component={Link}
  //           to="/checkout"
  //           size="large"
  //           type="button"
  //           variant="contained"
  //           color="primary"
  //         >
  //           Checkout
  //         </Button>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <Grid container>
        <Grid item className={classes.productName}>
          ITEM
        </Grid>
        <Grid item className={classes.otherColumn}>
          QUANTITY
        </Grid>
        <Grid item className={classes.otherColumn}>
          UNIT PRICE
        </Grid>
        <Grid item className={classes.otherColumn}>
          SUB TOTAL
        </Grid>
        {cartItem.map((item) => {
          console.log(item);
          return <CartItem product={item} />;
        })}
      </Grid>
      <div>
        <Typography>Total </Typography>
        <Typography> $5000 </Typography>
      </div>

      <div>
        <Button>Go Back To Shop</Button>
        <Button> Checkout </Button>
      </div>
    </>

    // <Container>
    // <table className={classes.table}>
    //   <tr>
    //     <th>ITEM</th>
    //     <th>QUANTITY</th>
    //     <th>UNIT PRICE</th>
    //     <th>SUB TOTAL</th>
    //   </tr>
    //   <CartItem />
    // </table>
    /* <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() } */
    // </Container>
  );
};

const mapStateToProps = (state) => {
  console.log("INside Cart", state);

  return {
    cartItem: state.cart.joggersInCart,
    itemNumber: state.cart.itemNumber,
    saveItems:
      state.cartItem.cartItem === null ? [] : state.cartItem.cartItem.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    getCart: (localCart) => dispatch(getItemInCart(localCart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
