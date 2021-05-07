import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";

import { AddShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";
import {
  addItemToCart,
  addJoggerToCart,
  addToCart,
} from "./../../redux/actions/cartActions";
// import { getJogger } from "../../redux/actions/joggerActions";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: "100%",
    height: "100%",
    boxShadow: "none",
  },
  media: {
    height: "70%",
    marginBottom: "1rem",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      // height: "70",
      // height: "60%"
    },
  },
  contentText: {
    paddingLeft: "1rem",
    // [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    // textAlign: "center",
    // },
  },
  productDataContainer: {
    display: "flex",
    // flexDirection: "row",
    marginTop: "1rem",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
  productPriceSection: {
    minWidth: "50%",
    alignItems: "center",
  },
  addToCart: {
    alignSelf: "flex-end",
    width: "3rem",
    margin: 0,
    marginRight: "2rem",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "2rem",
      marginRight: "2rem",
    },
  },
  productPrice: {
    textAlign: "start",
    alignSelf: "center",
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      textAlign: "left",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

function SimpleCard({ product, getJogger, addJoggerToCart, height }, props) {
  console.log("[jone width", window.innerWidth);
  if (window.innerWidth > 600) height = "";
  console.log(height);
  const classes = useStyles();
  console.log("proddd", product);
  const image = product.images[0]
    ? `data:image/jpeg;base64,${product.images[0].imgSource}`
    : "";
  // images[0].img.data.toString("base64"));
  // const chec = `data:image/png`
  // let con = product.images[0].data;
  // console.log("ccc array", con);
  // console.log("con array data", con.toString());
  // console.log("cccccccc", con.toString());

  // const imgs = ;
  // console.log(product.images[0].contentType);
  // console.log(imgs);

  // const test = `data:image/png;base64,${product.images[0].img.data.toString(
  //   "base64"
  // )}`;

  // console.log(window.location.pathname);
  const location = window.location.pathname;

  const handleAddToCart = async (e) => {
    e.preventDefault();

    console.log(product);
    let data = await product;
    let detailsToSave = { _id: product._id, type: "joggers" };
    console.log(data);
    let stringifyData;

    if (localStorage.getItem("cartItem")) {
      console.log("not empty");
      //true
      let savedData = localStorage.getItem("cartItem");
      let parsedData = JSON.parse(savedData);
      console.log("parsedData", parsedData);
      // let addToSave = parsedData.push({ _id: "hdhuuuh", type: "joggers" });
      // console.log("new Data", addToSave);
      parsedData.push({ _id: product._id, type: "joggers" });
      stringifyData = JSON.stringify(parsedData);

      console.log("new", parsedData);
      console.log("new stringify", stringifyData);
      window.localStorage.setItem("cartItem", stringifyData);
    } else {
      console.log("empty");
      window.localStorage.setItem(
        "cartItem",
        JSON.stringify([{ _id: product._id, type: "joggers" }])
      );

      // window.localStorage.setItem("cartItem", stringifyData);
    }

    console.log("stringifyData", window.localStorage.getItem("data"));

    // addJoggerToCart(data);
    addJoggerToCart(
      { productId: product._id, type: window.location.pathname },
      data
    );
  };

  const handleProductClick = (e) => {
    e.preventDefault();
    getJogger(product._id);
    // console.log("productid",)
  };
  console.log("product...", product);
  console.log("check", `/${product.producttype}/${product._id}`);
  // if (product) return <div> Loading...</div>;
  return (
    <Card className={classes.root}>
      <Link
        to={`/${product.producttype}/${product._id}`}
        className={classes.link}
        onClick={() => {
          console.log("you click me");
        }}
      >
        {/* <img
         src={`data:${product.images[0].contentType};base64,${product.images[0].imgSource}`}
        /> */}
        <img
          className={classes.media}
          src={image}
          style={{ height: height }}
          height={height}
          // src={`data:${product.images[0].contentType};base64,${product.images[0].imgSource}`}
          title="Contemplative Reptile"
          alt=""
          // onClick={(e) => handleProductClick(e)}
        />
      </Link>
      <CardContent style={{ padding: "0 0 24px 5px" }}>
        <Typography gutterBottom={2} className={classes.contentText} noWrap>
          {product.productname}
        </Typography>
        <Typography gutterBottom={2} className={classes.contentText} noWrap>
          {product.shortdetails}
        </Typography>
        <div className={classes.productDataContainer}>
          <div className={classes.productPriceSection}>
            <Typography
              gutterBottom
              variant="h3"
              component="h2"
              className={`${classes.contentText} ${classes.productPrice}`}
            >
              ₦{product.price}
            </Typography>
          </div>
          <div className={classes.productButtonSection}>
            {location === "/" ? (
              ""
            ) : (
              <Button
                variant="outlined"
                onClick={(e) => handleAddToCart(e)}
                className={`${classes.addToCart}`}
              >
                <AddShoppingCart style={{ width: "1rem" }} />
                <Typography> Add</Typography>
              </Button>
            )}
          </div>
        </div>
        {/* <div className={classes.productDataButton}> */}

        {/* </div> */}
      </CardContent>
    </Card>
  );
}

const mapStateToProps = (state) => {
  console.log("at simple card", state);
  return {
    cartItem: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    addItemToCart: (productId) => dispatch(addItemToCart(productId)),
    // getJogger: (productId) => dispatch(getJogger(productId)),
    addJoggerToCart: (productId, product) =>
      dispatch(addToCart(productId, product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCard);
