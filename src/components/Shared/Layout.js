import { useState, useEffect } from "react";
import { connect } from "react-redux";
import showcasejoggerimg from "../../assets/21634258-5.jpg";
import showcaseasookeimg from "../../assets/Agbadaa_2000x.jpg";
import imgBack from "../../assets/clothing-header-image.jpg";
import joggerBack from "../../assets/joggers.jpg";
import asookeBack from "../../assets/asooke.jpg";
import {
  Drawer,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

import { makeStyles } from "@material-ui/core/styles";
import Search from "./Search";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";
import Navbar from "../Shared/Navbar";
import Slider from "@material-ui/core/Slider";
import { findByLabelText } from "@testing-library/dom";
import { getAllJoggers } from "../../redux/actions/joggerActions";
// import "./layout.css";
import { Link } from "react-router-dom";

const drawerWidth = "200px";

let productTypeBgImg;
if (window.location.pathname === "/joggers") {
  productTypeBgImg = joggerBack;
} else {
  productTypeBgImg = asookeBack;
}

let isHome;
let isProduct;
if (window.location.pathname === "/") {
  isHome = "none";
  isProduct = "block";
} else {
  isHome = "block";
  isProduct = "none";
}
console.log("product type img", productTypeBgImg);

function valuetext(value) {
  return `${value}°C`;
}

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.pageBackground,
  },
  pageContainer: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "80px",
    },
    marginTop: "100px",
  },
  page: {
    // background: theme.palette.background,
    // width: "100%",
    marginLeft: theme.spacing(2),
    "@media (max-width: 800px)": {
      marginLeft: 0,
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerContent: {
    marginTop: 300,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },

  showcaseContainer: {
    padding: 0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },

  showCaseProductAll: {
    minHeight: "30vh",
    width: "100%",
    opacity: 1,
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    // marginBottom: theme.spacing(10),
    // backgroundColor: "#ffffff",
    backgroundImage: `url(${productTypeBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    backgroundPosition: "top",
    flexWrap: "wrap",
    alignItems: "center",
  },

  showcaseHome: {
    // fontFamily: "Farro sans-serif",
    fontFamily: "Anton, sans-serif",
    minHeight: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    // marginBottom: theme.spacing(10),
    // backgroundColor: "#ffffff",
    backgroundImage: `url(${imgBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundAttachment: "fixed",
    backgroundPosition: "center",
    flexWrap: "wrap",
    alignItems: "center",

    // opacity: 0.5,
    // backgroundColor: theme.palette.complimentary,

    // position: "relative",
    // backgroundColor: "red",
    // backgroundImage: url("../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg"
    // ),
  },
  showcaseJoggers: {
    maxHeight: "100%",
    flexBasis: "45%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    // backgroundColor: "red",
  },
  showcaseAsookes: {
    flexBasis: "45%",
    maxHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
  },

  showcaseProductNav: {
    lineHeight: "4rem",
    textAlign: "center",
    // position: " absolute",
    // display: "flex",
    // flexWrap: "wrap",
    top: "50%",
    left: "40%",
    [theme.breakpoints.down("sm")]: {
      top: "30%",
      left: "0",
      textAlign: "center",
      // left: "30%",
    },
  },
  showcaseProductHozDiv1: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    height: "50px",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      height: "30px",
      paddingBottom: "1rem",
    },
  },
  showcaseProductHozDiv2: {
    width: "100%",
    // backgroundColor: theme.,
    height: "10vh",
    marginBottom: "1rem",
  },

  hoz1: {
    float: "left",
    paddingLeft: "3rem",
    paddingTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
    },
  },
  hoz2: {
    float: "right",
    paddingRight: "3rem",
    paddingTop: "1rem",
    display: "absolute",
    fontFamily: "Source Serif Pro, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    [theme.breakpoints.down("xs")]: {
      paddingRight: "1rem",
    },
  },
  hoz22: {
    textTransform: "capitalize",
    paddingLeft: "1rem",
    paddingTop: "1rem",
    fontFamily: "Source Serif Pro, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },

  hozDivFirstGridNav: {
    fontFamily: "Source Serif Pro, serif",
    fontSize: "1rem",
    textDecoration: "none",
  },
  hozDivFirstGridTypo: {
    fontFamily: "Source Serif Pro, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
    },
  },

  showcaseProductH1: {
    fontSize: "xxx-large",
    letterSpacing: ".2rem",
    width: "100%",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "x-large",
    },
  },
  showcaseProductH3: {
    width: "100%",
    margin: 0,
    color: "gray",
  },
  showcaseProductBtn: {
    fontFamily: "inherit",
    letterSpacing: ".2rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    borderRadius: 0,
    margin: "auto",
    backgroundColor: theme.palette.showCaseButton,
    width: "12rem",
    height: "3rem",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      marginTop: "2rem",
      width: "9rem",
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "5rem",
    },
  },

  showcaseProduct: {
    height: "200px",
    width: "100%",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    // backgroundColor: theme.palette.complimentary,

    // position: "relative",
    // backgroundColor: "red",
    // backgroundImage: url("../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg"
    // ),
  },

  contentLayoutContainer: {
    margin: 0,
    padding: 0,
    justifyContent: "space-between",
  },
  showcaseContent: {
    position: "absolute",
    top: "30%",
    right: "20%",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  sidebar: {
    // display: "block",
    // height: "400px",
    // minWidth: "17%",
    width: "100%",
    backgroundColor: theme.palette.background,
    paddingTop: "100px",
    textAlign: "center",
    // marginRight: theme.spacing(2),
    "@media (max-width: 960px)": {
      order: 2,
    },
    "@media (min-width: 780px)": {
      minWidth: "17%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
  sidebarProduct: {
    // height: "400px",
    // minWidth: "17%",
    width: "100%",
    backgroundColor: theme.palette.background,
    paddingTop: "10px",
    textAlign: "center",
    height: "fit-content",
    // marginRight: theme.spacing(2),
    "@media (max-width: 780px)": {},
    "@media (min-width: 780px)": {
      minWidth: "17%",
    },
    [theme.breakpoints.down("sm")]: {
      order: 2,
      marginTop: theme.spacing(6),
    },
  },
  contentArea: {
    // height: "400px",
    width: "100%",
    // minWidth: "83%",
    // backgroundColor: "yellow",
    "@media (max-width: 780px)": {
      order: 1,
    },
    "@media (min-width: 780px)": {
      minWidth: "82%",
    },
  },
  footer: {
    // height: "400px",
    width: "100%",
    backgroundColor: "black",
    marginTop: 100,
    color: "#F9F9F9",
    padding: "100px 30px",
    maxWidth: "1446px",
    marginRight: "auto",
    marginLeft: "auto",
  },

  footerText: {
    color: "#737373",
    marginTop: theme.spacing(1),
  },
  footerItems: {
    margin: theme.spacing(1),
  },
  sliderContainer: {
    // width: 200,
    [theme.breakpoints.down("sm")]: {
      // display: "inline",
      // width: "100%",
      // display: "flex",
    },
    [theme.breakpoints.down("sm")]: {},
  },
  slider: {
    width: "90%",
    margin: "0 .3rem",
    [theme.breakpoints.down("sm")]: {
      // display: "inline",
      // width: "70%",
    },
  },
  sort: {
    height: "30px",
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {},
  },
  categoryItem: {
    width: "90%",
    "@media (max-width: 960px)": {
      width: "40%",
    },
  },
  formControl: {
    width: "100%",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  select: {
    width: "70%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      height: "2rem",
    },
  },

  file: {
    display: "none",
  },
  categorieslinks: {
    fontWeight: "bold",
    textDecoration: "undeline",
    marginTop: "1rem",
    minWidth: "100%",
  },
}));

const Layout = ({ children, cartItem, onGetAllJoggers }) => {
  // console.log("childrennnn", children);
  const classes = useStyles();
  const [sort, setSort] = useState(false);
  const [value, setValue] = useState(20000);
  const [deliveryState, setDeliveryState] = useState("lagos");
  const [deliveryStateLocation, setDeliveryStateLocation] = useState("berger");
  const [isLocationAccount, setIsLocationAccount] = useState(false);
  // let remove = "";

  console.log("value", value);

  let Location =
    window.location.pathname.includes("/product/") ||
    window.location.pathname.includes("/cart") ||
    window.location.pathname.includes("/jogger/");

  console.log("layoutcartitem", cartItem);
  let show =
    window.location.pathname === "/Account" ||
    window.location.pathname.startsWith("/jogger/") ||
    window.location.pathname.startsWith("/asooke/")
      ? "none"
      : "";

  let space =
    window.location.pathname.startsWith("/jogger/") ||
    window.location.pathname.startsWith("/asooke/")
      ? classes.pageContainer
      : "";

  let remove =
    window.location.pathname === "/Account" || window.location.pathname === "/"
      ? "none"
      : "";

  let isHome = window.location.pathname === "/" ? "" : "none";

  console.log("shooooooooow", show);

  let fullWidth =
    window.location.pathname === "/Account" || window.location.pathname === "/"
      ? { maxWidth: "100%", flexBasis: "100%" }
      : "";

  //   console.log("you are on account");
  //   // setIsLocationAccount(true);
  //   // remove = "classes.removeContent";
  // }

  useEffect(() => {}, []);

  function valuetext(value) {
    return `${value}°C`;
  }

  const handleSort = (value) => {
    onGetAllJoggers(1, undefined, value);
  };

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  const handleChange2 = (event) => {
    setDeliveryState(event.target.value);
  };
  const handleChange3 = (event) => {
    setDeliveryStateLocation(event.target.value);
  };
  return (
    <div className={classes.body}>
      {/* Navbar */}
      <Navbar cartItem={cartItem} />

      {/* sidebar */}
      {Location ? (
        <Container id="body" className={space} style={{ marginTop: "80px" }}>
          {/* full width showcase */}
          {/* <Paper
            id="showcase"
            className={classes.showcaseProduct}
            style={{ display: show }}
          >
            
            <div className={classes.showcaseContent}>
 
            </div>
          </Paper> */}
          <Grid container className={classes.contentLayoutContainer}>
            {/* content area */}
            <Grid
              item
              md={9}
              id="content-area"
              className={`${classes.contentArea} ${classes.ProductDetailsArea}`}
            >
              <div className={classes.page}>{children}</div>
            </Grid>

            <Grid item md={2} id="sidebar" className={classes.sidebarProduct}>
              <Paper>
                <div>
                  <Typography
                    id="range-slider"
                    gutterBottom
                    style={{ fontFamily: "Holtwood One SC" }}
                  >
                    DELIVERY
                  </Typography>
                  <Divider />
                </div>
                <div>
                  <Typography
                    id="range-slider"
                    gutterBottom
                    style={{ fontFamily: "Abril Fatface " }}
                  >
                    Choose Your Location
                  </Typography>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    {/* <InputLabel id="demo-simple-select-outlined-label">
                      Age
                    </InputLabel> */}
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={deliveryState}
                      onChange={handleChange2}
                      className={classes.select}
                      style={{ fontFamily: "Oxygen " }}
                      // label="Age"
                    >
                      {/* <div> */}
                      {/* <MenuItem
                        value=""
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        <em>None</em>
                      </MenuItem> */}
                      <MenuItem
                        value="lagos"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        LAGOS
                      </MenuItem>
                      <MenuItem
                        value="osun"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        OSUN
                      </MenuItem>
                      <MenuItem
                        value="oyo"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        OYO
                      </MenuItem>
                      {/* </div> */}
                    </Select>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={deliveryStateLocation}
                      onChange={handleChange3}
                      className={classes.select}
                      // label="Age"
                    >
                      <MenuItem
                        value="ikeja"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        IKEJA
                      </MenuItem>
                      <MenuItem
                        value="berger"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        BERGER
                      </MenuItem>
                      <MenuItem
                        value="oshodi"
                        style={{
                          backgroundColor: "#212121",
                          color: "#ffffff",
                          fontFamily: "Oxygen ",
                        }}
                      >
                        OSHODI
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Divider />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  {window.innerWidth < 400 ? (
                    <Button
                      style={{ backgroundColor: "#2268DD" }}
                      href="tel:+2348035962944"
                    >
                      {" "}
                      <CallIcon style={{ color: "blue" }} />{" "}
                      <Typography style={{ fontFamily: "Anton" }}>
                        Call To Order
                      </Typography>
                    </Button>
                  ) : (
                    <>
                      <Typography>Call To Order</Typography>
                      <Typography>+2349077888777</Typography>
                    </>
                  )}
                </div>

                <Divider />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container id="body" className={classes.showcaseContainer}>
          {/* full width showcase */}
          <Paper
            id="showcase"
            style={{ display: show }}
            className={
              window.location.pathname === "/"
                ? classes.showcaseHome
                : classes.showCaseProductAll
            }
          >
            <div
              className={classes.showcaseProductNav}
              style={{ display: isHome }}
            >
              <h1 className={classes.showcaseProductH1}>This is Commerce</h1>
              <h3 className={classes.showcaseProductH3}>
                {" "}
                great product at affordable price{" "}
              </h3>
              <Button
                variant="contained"
                className={classes.showcaseProductBtn}
              >
                Shop Joggers{" "}
              </Button>
              <Button
                variant="contained"
                className={classes.showcaseProductBtn}
                style={{ marginLeft: "1.5rem" }}
              >
                Shop AsooKes{" "}
              </Button>
            </div>

            {/* <div className={classes.showcaseAsookes}>
              <img
                src={showcaseasookeimg}
                alt="commerce.js"
                width="100%"
                height="100%"
              />
            </div> */}

            {/* <div className={classes.showcaseJoggers}>
              <img
                src={showcasejoggerimg}
                alt="commerce.js"
                width="100%"
                height="100%"
              />
            </div> */}
          </Paper>

          {window.location.pathname === "/" ? (
            <div className={classes.showcaseProductHozDiv1}>
              <div className={classes.hoz1}>
                <Typography className={classes.hozDivFirstGridTypo}>
                  Complete Collection At Discount Price &#128525;
                </Typography>{" "}
              </div>
              <div className={classes.hoz2}>
                <Typography className={classes.hozDivFirstGridTypo}>
                  Easy Delivery
                </Typography>
              </div>
            </div>
          ) : (
            <div className={classes.showcaseProductHozDiv2}>
              {window.innerWidth > 500 ? (
                <div className={classes.hoz1}>
                  <Typography className={classes.hozDivFirstGridNav}>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#002EAD" }}
                    >
                      Home
                    </Link>{" "}
                    {">"}{" "}
                    <Link style={{ textDecoration: "none", color: "#002EAD" }}>
                      Joggers
                    </Link>
                  </Typography>
                </div>
              ) : (
                <div>
                  <Typography className={classes.hoz22}>
                    {window.location.pathname} Collections
                  </Typography>
                </div>
              )}
            </div>
          )}
          <Container>
            <Grid container className={classes.contentLayoutContainer}>
              <Grid
                item
                md={2}
                id="sidebar"
                style={{ display: remove }}
                className={`${classes.sidebar} (window.location.pathname === "/Account" || window.location.pathname === "/")? ${classes.remove} : "")`}
              >
                <Paper>
                  <div>
                    <Typography
                      id="range-slider"
                      gutterBottom
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Abril Fatface, Sans-serif",
                      }}
                    >
                      PRICE (₦)
                    </Typography>

                    <Grid container className={classes.sliderContainer}>
                      {/* <Grid item xs={2}>
                      <Typography style={{ fontWeight: "bold" }}>
                        Min
                      </Typography>
                    </Grid> */}
                      <Grid item xs={12}>
                        <Slider
                          // defaultValue={5}
                          // step={5000}

                          // min={1000}
                          // max={20000}

                          // className={classes.slider}
                          // value={value}
                          // marks
                          // onChange={handleChange1}
                          // valueLabelDisplay="auto"
                          // aria-labelledby="range-slider"
                          // getAriaValueText={valuetext}
                          onChange={handleChange1}
                          value={value}
                          getAriaValueText={valuetext}
                          aria-labelledby="discrete-slider"
                          valueLabelDisplay="auto"
                          step={5000}
                          marks
                          min={1000}
                          max={20000}
                        />
                      </Grid>
                      {/* <Grid item xs={2}>
                      <Typography style={{ fontWeight: "bold" }}>
                        Max
                      </Typography>
                    </Grid> */}
                    </Grid>
                    <Button
                      style={{ color: "#2268DD", marginBottom: "1rem" }}
                      variant="contained"
                      onClick={() => handleSort(value)}
                    >
                      Apply
                    </Button>
                    {sort === true ? (
                      <div className={classes.sort}>
                        <Typography style={{ fontWeight: "bold" }}>
                          Sort By
                        </Typography>
                        <Button>Apply</Button>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>

                  <Divider style={{ backgroundColor: "gray" }} />
                  <List>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontFamily: "Holtwood One SC",
                      }}
                    >
                      Categories
                    </Typography>

                    <div className={classes.categoryContainer}>
                      {[
                        "short",
                        "long",
                        "top",
                        "trouser",
                        "crop",
                        "flair",
                        "men",
                        "female",
                        "unisex",
                      ].map((text, index) => (
                        <div className={classes.categoryItem}>
                          <Button
                            variant="contained"
                            className={classes.categorieslinks}
                            style={{
                              fontFamily: "PT Sans",
                              fontWeight: "bolder",
                            }}
                          >
                            {text}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </List>
                  <Divider />
                </Paper>
              </Grid>

              {/* content area */}
              <Grid
                item
                md={9}
                id="content-area"
                style={{
                  maxWidth: fullWidth.maxWidth,
                  flexBasis: fullWidth.flexBasis,
                }}
                className={classes.contentArea}
              >
                <div className={classes.page}>{children}</div>
              </Grid>
            </Grid>
          </Container>
        </Container>
      )}

      {/* full width footer */}
      <Grid
        container
        id="footer"
        className={classes.footer}
        backgroundColor="primary"
      >
        <Grid item md={3} className={classes.footerItems}>
          <Typography variant="h4">TheShop</Typography>
          <Typography className={classes.footerText}>
            The5kShop is an independent online retailer offering variety of
            products ranging from branded products, stock from other retailers
            to its own label ‘T5S’.
          </Typography>
        </Grid>
        <Grid item md={3} className={classes.footerItems}>
          <Typography variant="h4">ContactUs</Typography>
          <Typography className={classes.footerText}>
            Lekki Lagos, Nigeria
          </Typography>
          <Typography className={classes.footerText}>
            phone: +234 902 424 6912
          </Typography>
          <Typography className={classes.footerText}>
            e-mail: hello@the5kshop.com
          </Typography>
          <Typography className={classes.footerText}>
            www.the5kshop.com
          </Typography>
        </Grid>
        <Grid item md={3} className={classes.footerItems}>
          <Typography variant="h4">help</Typography>
          <Typography className={classes.footerText}>
            frequently asked questions
          </Typography>
          <Typography className={classes.footerText}>
            delivery & returns
          </Typography>
          <Typography className={classes.footerText}>Privacy policy</Typography>
          <Typography className={classes.footerText}>
            terms & conditions
          </Typography>
          <Typography className={classes.footerText}>Size guide</Typography>
        </Grid>
        <Grid item md={2} className={classes.footerItems}>
          <Typography variant="h4">JoinUs</Typography>
          <Typography className={classes.footerText}>WhatApp</Typography>
          <Typography className={classes.footerText}>Facebook</Typography>
          <Typography className={classes.footerText}>Instagram</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state of layout", state);
  return {
    cartItem: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    postAssetProvidersDetails: () => dispatch(),
    onGetAllJoggers: (number, searchTerm, price) =>
      dispatch(getAllJoggers(number, searchTerm, price)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

// export default Layout;
