import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { connect } from "react-redux";
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
import {
  // handleCartLoad,
  handleQuantityChange,
  handleTotalChange,
  removeItemFromCart,
} from "../../redux/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 10%), 0px 1px 1px 0px rgb(0 0 0 / 7%), 0px 1px 3px 0px rgb(0 0 0 / 6%)",
    marginBottom: theme.spacing(2),
    backgroundColor: "#ffffff",
    maxHeight: "8rem",
    [theme.breakpoints.down("xs")]: {
      minHeight: "10rem",
      height: "100rem",
    },
  },

  secondColumn: {},

  // productName: {
  //   width: "40%",
  // },
  otherColumn: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingLeft: "1rem",
    },
  },
  select: {
    [theme.breakpoints.down("sm")]: {
      float: "right",
    },
  },
  selectGrid: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
      paddingRight: "2rem",
      marginTop: "1.2rem",
    },
  },
  priceGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  smButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: "1.5rem",
    },
  },

  lgButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  firstColumn: {
    height: "80%",
    // display: "flex",
    // justifyContent: "space-between",
  },

  productImage: {
    height: "100%",
  },
  // productDetails: {
  //   width: "70%",
  // },
  image: {
    width: "auto",
    height: "80%",
    paddingLeft: "2rem",
  },

  unitPrice: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "1rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      float: "none",
    },
  },
  qltyP: {
    paddingLeft: theme.spacing(2),
  },
}));

const CartItem = ({
  product,
  cartQty,
  parentCallback,
  totalPrice,
  onUpdateCartQty,
  onRemoveFromCart,
  removeItemFromCart,
  handleQtyChange,
  handleTlChange,
}) => {
  const classes = useStyles();

  // const [quantity, setQuantity] = useState(1);

  // const [subTotal, setSubTotal] = useState(quantity);

  const onTrigger = (total) => {
    // e.preventDefault();
    parentCallback(total);
  };

  useEffect(() => {
    let savedData = localStorage.getItem("cartItem");
    let parsedData = JSON.parse(savedData);
    console.log("parsedDDD", parsedData);
    if (parsedData.length > 0) {
      // parsedData.forEach((elm) => {
      //   if (elm._id == product._id) {
      //     setQuantity(parseInt(elm.unit));
      //     setSubTotal(product.price * elm.unit);
      //     console.log("elmUnit", elm.unit);
      //   }
      //   console.log("quantitu", quantity);
      // });

      handleTlChange(product.price);
      // }

      // console.log("ahhh", quantity);
      // setSubTotal(product.price * quantity);
    }
    // console.log("last chance", quantity);
  }, []);

  let quantity;
  cartQty.forEach((elm) => {
    if (elm._id === product._id) {
      quantity = elm.unit;
      console.log("qty", quantity);
    }
  });

  console.log("quantuiiii", quantity);

  // console.log("ahhh", quantity);

  // handleCrtLoad(product.price * quantity, product._id);
  // handleTlChange();

  const handleQuantityChange = (e, productId) => {
    // console.log("ahhh", quantity);
    // setQuantity(e.target.value);

    // let newSubTotal = parseInt(e.target.value) * product.price;
    console.log(e.target.value);
    handleQtyChange(productId, parseInt(e.target.value));
    handleTlChange(product.price);

    // setSubTotal(newSubTotal);

    let stringifyData;
    let savedData = localStorage.getItem("cartItem");
    let parsedData = JSON.parse(savedData);
    parsedData.forEach((elm, i) => {
      if (elm._id === productId) {
        elm.unit = parseInt(e.target.value);
        console.log(elm._id);
      }
    });

    localStorage.setItem("cartItem", JSON.stringify(parsedData));
  };

  const handleRemoveFromCart = async (e, productId, productType) => {
    e.preventDefault();

    let stringifyData;

    if (localStorage.getItem("cartItem")) {
      console.log("not empty");
      //true
      let savedData = localStorage.getItem("cartItem");
      let parsedData = JSON.parse(savedData);

      parsedData.forEach((elm, i) => {
        if (elm._id == productId) {
          parsedData.splice(i, 1);
        }
      });
      stringifyData = JSON.stringify(parsedData);

      window.localStorage.setItem("cartItem", stringifyData);
    }

    removeItemFromCart(productId, productType);
  };
  const image = product.images[0]
    ? `data:image/jpeg;base64,${product.images[0].imgSource}`
    : "";

  return (
    <Grid container className={classes.container} elevation={2}>
      <Grid
        item
        className={`${classes.productName} ${classes.firstColumn}`}
        md={2}
        xs={4}
      >
        <div className={classes.productImage}>
          <img src={image} alt="" className={classes.image} />
          <IconButton
            style={{ fontFamily: "Holtwood One SC" }}
            className={`${classes.button} ${classes.smButton}`}
            onClick={(e) =>
              handleRemoveFromCart(e, product._id, product.producttype)
            }
          >
            {" "}
            <DeleteIcon></DeleteIcon> REMOVE{" "}
          </IconButton>
        </div>
      </Grid>
      <Grid item className={classes.secondcolumn} md={10} xs={8}>
        <Grid container className={classes.otherColumn}>
          <Grid item md={3}>
            <div className={classes.productDetails}>
              {" "}
              <Typography>{product.shortdetails}</Typography>
              <Typography
                className={classes.name}
                style={{ fontFamily: "Source Serif Pro" }}
              >
                {product.productname}
              </Typography>
              <Typography className={classes.size}>Size</Typography>
              <Typography>{product.shortdetails}</Typography>
              <IconButton
                style={{ fontFamily: "Holtwood One SC" }}
                className={`${classes.button} ${classes.lgButton}`}
                onClick={(e) =>
                  handleRemoveFromCart(e, product._id, product.producttype)
                }
              >
                {" "}
                <DeleteIcon></DeleteIcon> REMOVE{" "}
              </IconButton>
            </div>
          </Grid>
          <Grid item className={classes.selectGrid} md={3}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={quantity}
              onChange={(e) => handleQuantityChange(e, product._id)}
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
          <Grid
            item
            className={classes.priceGrid}
            style={{ fontFamily: "Anton" }}
            md={3}
          >
            <Typography style={{ fontFamily: "Anton" }}>
              ₦{product.price}
            </Typography>
          </Grid>
          <Grid item className={classes.unitPrice} md={3}>
            <Typography style={{ color: "#f68b1e", fontFamily: "Anton" }}>
              ₦{quantity * product.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Grid>
  );
};

const mapStateToProps = (state) => {
  console.log("at cart Item", state);
  return {
    cartQty: state.cartItem.cartQty,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    removeItemFromCart: (productId, productType) =>
      dispatch(removeItemFromCart(productId, productType)),
    // handleCrtLoad: (newQty, productId) =>
    //   dispatch(handleCartLoad(newQty, productId)),
    handleTlChange: (price) => dispatch(handleTotalChange(price)),
    handleQtyChange: (productId, newUnit) =>
      dispatch(handleQuantityChange(productId, newUnit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
