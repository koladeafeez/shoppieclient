import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CartItem from "./CartItem.js";
import { getItemInCart } from "../../redux/actions/cartActions.js";
import { Autocomplete } from "@material-ui/lab";
// import useStyles from "../../styles/Cartstyles";
// import { handleCartLoad } from "./../../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    maxWidth: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  cartHeading: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  table: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",

    gridTemplateRows: "repeat(auto-fill, 15% )",
    // minWidth: "100%",
  },
  productName: {
    width: "40%",
    color: "#8e8e93",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.14,
    textTransform: "uppercase",
  },
  otherColumn: {
    width: "20%",
    color: "#8e8e93",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: 1.14,
    textTransform: "uppercase",
  },
  totalLabel: {
    display: "inline",
  },
  totalAmount: {
    display: "inline",
    marginLeft: "2rem",
    color: "#f68b1e",
    fontWeight: 500,
    fontSize: "1.2rem",
  },
  btnContainer: {
    marginTop: "3rem",
    backgroundColor: "#ffffff",
    height: "5rem",
    [theme.breakpoints.down("xs")]: {
      height: "8rem",
    },
  },
  btn1: {
    minWidth: "30%",
    marginTop: "1rem",
    marginLeft: "1rem",
    color: "#f68b1e",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "2rem",
    },
  },
  btn2: {
    minWidth: "30%",
    marginTop: "1rem",
    marginLeft: theme.spacing(2),
    backgroundColor: "#f68b1e",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "2.5rem",
    },
  },
}));

const Cart = ({ itemNumber, getCart, cartItem, totalAmount }) => {
  // let cartItem = [];
  const classes = useStyles();

  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("cartItem") !== null) {
      let localDataString = window.localStorage.getItem("cartItem");

      let localData = JSON.parse(localDataString);
      getCart(localData);

      // cartLoad(localData)

      console.log("fresh", cartItem);
    }
  }, []);
  // if (saveItems.length > 0) {
  //   cartItem = [...cartItem, ...saveItems];
  // }

  const handleCallback = (childData) => {
    let newPrice = [...totalPrice];
    newPrice.push(childData);
    // setTotalPrice(childData);
  };

  // console.log("savedItems", saveItems);

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

  if (!cartItem) return <div> Loading</div>;
  return (
    <div className={classes.sectionContainer}>
      <Grid container>
        <Grid item className={`${classes.productName} ${classes.cartHeading}`}>
          ITEM
        </Grid>
        <Grid item className={`${classes.otherColumn} ${classes.cartHeading}`}>
          QUANTITY
        </Grid>
        <Grid item className={`${classes.otherColumn} ${classes.cartHeading}`}>
          UNIT PRICE
        </Grid>
        <Grid item className={`${classes.otherColumn} ${classes.cartHeading}`}>
          SUB TOTAL
        </Grid>
        {cartItem.map((item) => {
          console.log(item);
          return (
            <CartItem
              product={item}
              parentCallback={handleCallback}
              totalPrice={totalPrice}
            />
          );
        })}
      </Grid>
      <div style={{ float: "right" }}>
        <Typography className={classes.totalLabel}>Total: </Typography>
        <Typography
          className={classes.totalAmount}
          style={{ fontFamily: "Holtwood One SC" }}
        >
          {" "}
          ₦{totalAmount}
        </Typography>
      </div>

      <div className={classes.btnContainer}>
        <Button variant="contained" className={classes.btn1}>
          Go Back To Shop
        </Button>
        <Button variant="contained" className={classes.btn2}>
          {" "}
          Proceed To Checkout{" "}
        </Button>
      </div>
    </div>
  );

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
};

const mapStateToProps = (state) => {
  console.log("INside Cart", state.cartItem);

  return {
    // cartItem: state.cartItem.joggersInCart,
    itemNumber: state.cartItem.itemNumber,
    cartItem: state.cartItem.cartItem,
    totalAmount: state.cartItem.totalAmount,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    getCart: (localCart) => dispatch(getItemInCart(localCart)),
    // cartLoad: (currentCartValue) => dispatch(handleCartLoad(currentCartValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
