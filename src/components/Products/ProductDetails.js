import React, { useRef, useEffect, useState } from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { Slider } from "../../components/Shared/slider";
import { connect } from "react-redux";
import { getJogger } from "../../redux/actions/joggerActions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
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
    maxWidth: "90%",
    marginRight: "auto",
    marginLeft: "auto",
    // minHeigth: "550px",
    backgroundColor: theme.palette.background,

    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
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
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
  productShortDetails: {
    minHeight: "8vh",
    // textAlign: "center",
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1rem",
      minHeight: 0,
    },
  },
  buttonForm: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      padding: 0,
      marginBottom: theme.spacing(2),
    },
  },
  productLongDetails: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background,
    padding: theme.spacing(3),

    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingLeft: ".3rem",
      paddingTop: "1rem",
      minHeight: "10rem",
    },
  },
  productPrice: {
    fontWeigth: 700,
    fontSize: "1.5rem",
  },
  productname: {
    fontWeight: 400,
    fontSize: "1.25rem",
  },
  btn: {
    fontWeight: 600,
    width: "4rem",
  },
  sliderContainer: {
    "&::-webkit-scrollbar": {
      height: "0",
      width: "0px" /* remove scrollbar space */,
      background: "transparent" /*optional: just make scrollbar invisible */,
    },
    width: "100%",
    height: "50px",
    display: "flex",
    // border: "1px solid #ccc",
    overflowX: "scroll",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  productAvatar: {
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  },
  div1: {
    minWidth: "100px",
    backgroundColor: "red",
  },
  div2: {
    minWidth: "100px",
    backgroundColor: "blue",
  },
  div3: {
    minWidth: "100px",
    backgroundColor: "green",
  },
  scrollContainer: {
    display: "flex",
    width: "100%",
  },
  scrollRight: {
    position: "relative",
  },
  scrollLeft: {
    position: "relative",
    // left: 20,
    right: "auto",
  },
  imageDivider: {
    [theme.breakpoints.down("xs")]: {
      height: ".5rem",
      backgroundColor: theme.palette.pageBackground,
    },
  },
}));

const ProductDetails = ({ routeProps, onGetJogger, product }) => {
  const classes = useStyles();

  let [image, setImage] = useState(null);

  // console.log("imageddd", image);
  // console.log(product.loading);

  // console.log("produuuuu", product);

  const getJogger = async (id, type) => {
    await onGetJogger(id, type);
  };
  console.log("jjjjj", product.data);
  useEffect(() => {
    let type = routeProps.match.path.split("/")[1];
    console.log("type", type);
    console.log("route params", routeProps.match.params.id);

    getJogger(routeProps.match.params.id, type);
  }, []);

  // cosnt getJogger = async() => {

  // }
  let type = routeProps.match.path.split("/")[1];
  console.log("type", type);
  console.log("routeProps", routeProps);
  // if (!product.loading) return <p>Loading...</p>;
  // let image = `data:image/jpeg;base64,${product.jogger.images[0].imgSource}`;\

  const container = useRef();
  const slideRight = useRef();
  const slideLeft = useRef();

  console.log(container.current);
  console.log(slideRight.current);
  const scrollRight = (e) => {
    container.current.scrollLeft += 40;
  };

  const scrollLeft = (e) => {
    container.current.scrollLeft += -40;
  };

  const handleImageChange = (e) => {
    console.log(e.target.currentSrc);
    setImage(e.target.currentSrc);
  };

  if (product.data.images == undefined) return <div>Loading</div>;
  return (
    <>
      <Grid container className={classes.root}>
        {/* <Paper elevation={4}> */}
        <Grid item sm={5} xs={12} className={classes.imageGrid}>
          <Card className={classes.card} elevation={2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  image ||
                  `data:image/jpeg;base64,${product.data.images[0].imgSource}`
                }
                // image={`data:image/jpeg;base64,${product.jogger.images[0].imgSource}`}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>

          <div className={classes.scrollContainer}>
            <IconButton
              ref={slideLeft}
              onClick={(e) => scrollLeft(e)}
              className={classes.scrollLeft}
            >
              <ChevronLeftIcon />
            </IconButton>

            <div className={classes.sliderContainer} ref={container}>
              {product.data.images.map((image) => {
                return (
                  <a onClick={(e) => handleImageChange(e)}>
                    <img
                      src={`data:image/jpeg;base64,${image.imgSource}`}
                      className={classes.productAvatar}
                      alt="productimage"
                    />
                  </a>
                );
              })}
              {/* <div className={classes.div1}></div>
            <div className={classes.div2}></div>
            <div className={classes.div3}></div> */}
            </div>
            <IconButton
              ref={slideRight}
              onClick={(e) => scrollRight(e)}
              className={classes.scrollRight}
            >
              <ChevronRightIcon />
            </IconButton>
          </div>

          {/* <IconButton
            ref={slideLeft}
            onClick={(e) => scrollLeft(e)}
            className={classes.scrollLeft}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            ref={slideRight}
            onClick={(e) => scrollRight(e)}
            className={classes.scrollRight}
          >
            <ChevronRightIcon />
          </IconButton> */}

          {/* <button
            id="slide"
            type="button"
            ref={slideLeft}
            onClick={(e) => scrollLeft(e)}
          >
            Slide left
          </button>
          <button
            id="slide"
            type="button"
            ref={slideRight}
            onClick={(e) => scrollRight(e)}
          >
            Slide right
          </button> */}

          {/* <Slider
            images={product.data.images}
            type={product.data.producttype}
          /> */}
        </Grid>
        <Grid item sm={6} xs={12}>
          <Divider className={classes.imageDivider} />

          <Typography
            id="range-slider"
            gutterBottom
            className={classes.productShortDetails}
          >
            <Typography> {product.data.shortdetails}</Typography>

            <Typography className={classes.productname}>
              {product.data.productname}
            </Typography>
            {/* 2 In 1 Men's Short Sleeve Shorts Set - Yellow */}
          </Typography>
          <Divider />
          <Typography
            id="range-slider"
            gutterBottom
            className={`${classes.productShortDetails} ${classes.productPrice}`}
          >
            {/* ₦ 3,900 */}₦{product.data.price}
          </Typography>
          <Divider />
          <Typography
            style={{ fontSize: ".875rem", fontWeight: 500 }}
            id="range-slider"
            gutterBottom
            className={classes.productShortDetails}
          >
            SELECT VARIATION
          </Typography>
          <form
            className={`${classes.productShortDetails} ${classes.buttonForm}`}
          >
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

          <Divider className={classes.imageDivider} />

          <Button
            variant="outlined"
            style={{ height: "6vh" }}
            className={`${classes.productShortDetails} ${classes.addToCart} `}
          >
            <AddShoppingCart style={{ marginRight: "auto" }} />{" "}
            <Typography style={{ paddingRight: "6rem" }}>
              Add To Cart
            </Typography>
          </Button>
          <Divider />
        </Grid>
        {/* </Paper> */}
      </Grid>
      <Paper className={classes.productLongDetails} elevation={2}>
        <Typography variants="h3">PRODUCT DESCRIPTION</Typography>
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
          {product.data.longdetails}
        </Typography>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("statevalue", state);
  return {
    cartItem: state,
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    onGetJogger: (productId, productType) =>
      dispatch(getJogger(productId, productType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
