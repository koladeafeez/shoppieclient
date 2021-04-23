import React, { useRef, useEffect } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { Slider } from "../../components/Shared/slider";
import { connect } from "react-redux";
import { getJogger } from "../../redux/actions/joggerActions";

import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Divider,
  Checkbox,
  InputLabel,
  Button,
  IconButton,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Product from "./Product.js";
// import useStyles from "../../styles/ProductsListStyles";

import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: "100%",
    // minHeigth: "550px",
    backgroundColor: theme.palette.background,

    justifyContent: "space-between",
    alignItems: "center",
  },
  imageGrid: {
    width: "100%",
  },
  card: {
    // height: "100%",
    boxShadow: "none",
  },
  media: {
    height: 300,
    marginBottom: "1rem",
  },
  content: {
    // marginTop: "3rem",
    // marginBottom: "2rem",
    backgroundColor: theme.palette.background,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.pageBackground,
    },
  },
  scrollItem1: {
    marginTop: 0,
  },
  container: {
    marginTop: 0,
  },
  addToCart: {
    width: "100%",
    marginTop: theme.spacing(2),
    height: "6vh",
  },
  productShortDetails: {
    height: "8vh",
    textAlign: "center",
    padding: theme.spacing(1),
  },
  productLongDetails: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background,
    padding: theme.spacing(3),
  },
}));

const ProductDetails = ({ routeProps, onGetJogger, product }) => {
  const classes = useStyles();

  const getJogger = async (id) => {
    await onGetJogger(id);
  };
  console.log("jjjjj", product.jogger);
  useEffect(() => {
    console.log(routeProps.match.params.id);
    getJogger(routeProps.match.params.id);
  }, []);

  // cosnt getJogger = async() => {

  // }

  console.log("routeProps", routeProps);
  // if (!products.length) return <p>Loading...</p>;

  return (
    <>
      <Grid container className={classes.root}>
        {/* <Paper elevation={4}> */}
        <Grid item sm={5} xs={12} className={classes.imageGrid}>
          <Card className={classes.card} elevation={2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={img}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>

          <Slider />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography
            id="range-slider"
            gutterBottom
            className={classes.productShortDetails}
          >
            {product.jogger.shortdetails}
            {/* 2 In 1 Men's Short Sleeve Shorts Set - Yellow */}
          </Typography>
          <Divider />
          <Typography
            id="range-slider"
            gutterBottom
            className={classes.productShortDetails}
          >
            {/* ₦ 3,900 */}₦{product.jogger.price}
          </Typography>
          <Divider />
          <Typography
            id="range-slider"
            gutterBottom
            className={classes.productShortDetails}
          >
            SELECT VARIATION
          </Typography>
          <form className={classes.productShortDetails}>
            <Button
              variant="outlined"
              className={classes.btn}
              value="A"
              label="Aso"
            >
              L
            </Button>
            <Button
              variant="outlined"
              className={classes.btn}
              value="A"
              label="Aso"
            >
              M
            </Button>
            <Button
              variant="outlined"
              className={classes.btn}
              value="A"
              label="Aso"
            >
              S
            </Button>
            <Button
              variant="outlined"
              className={classes.btn}
              value="A"
              label="Aso"
            >
              XL
            </Button>
            <Button
              variant="outlined"
              className={classes.btn}
              value="A"
              label="Aso"
            >
              XXL
            </Button>
          </form>
          <Divider />
          <Button
            variant="outlined"
            style={{ height: "6vh" }}
            className={`${classes.productShortDetails} ${classes.addToCart} `}
          >
            <AddShoppingCart /> Add To Cart
          </Button>
          <Divider />
        </Grid>
        {/* </Paper> */}
      </Grid>
      <Paper className={classes.productLongDetails} elevation={2}>
        <Typography variants="h3">Product Details</Typography>
        <Divider />
        <Typography>
          {/* Our Effective, Breathable, Adjustable and Comfortable Posture
          Corrector with Upper Back Support for men, women, adults & kids
          alleviate all types of back pains and offer shoulder support and
          improves bad body posture. Aside from better posture, it enhances
          breathing, body alignment and gets rid of back, shoulder, neck and
          upper back pain. Our clavicle brace is lightweight with durable and
          breathable high-quality neoprene. Wearing it is so effortless you
          won't even know it's there, as long as you use a correct posture,
          helping you stop from slouching or hunching while working. Our posture
          corrector is effective and comes in universal size, it perfectly fits
          chests ranging from 28’’ to 48’’ in circumference. Our Posture belt is
          UNISEX and easy to use. */}
          {product.jogger.longdetails}
        </Typography>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("statevalue", state);
  return {
    cartItem: state,
    product: state.jogger,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    onGetJogger: (productId) => dispatch(getJogger(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
