import { useState, useEffect } from "react";
import { connect } from "react-redux";
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
} from "@material-ui/core";
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

const drawerWidth = "200px";

function valuetext(value) {
  return `${value}°C`;
}

const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.pageBackground,
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
  showcaseHome: {
    height: "300px",
    width: "100%",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    // backgroundColor: theme.palette.complimentary,

    // position: "relative",
    // backgroundColor: "red",
    // backgroundImage: url("../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg"
    // ),
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
    "@media (max-width: 780px)": {
      order: 2,
    },
    "@media (min-width: 780px)": {
      minWidth: "17%",
    },
  },
  sidebarProduct: {
    // height: "400px",
    // minWidth: "17%",
    width: "100%",
    backgroundColor: theme.palette.background,
    paddingTop: "10px",
    textAlign: "center",
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
    [theme.breakpoints.down("sm")]: {},
  },
  categoryItem: {
    width: "50%",
  },
  formControl: {
    width: "100%",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  select: {
    width: "70%",
    marginTop: theme.spacing(2),
  },
  remove: {
    // display: "none",
  },
  file: {
    display: "none",
  },
}));

const Layout = ({ children, cartItem, onGetAllJoggers }) => {
  // console.log("childrennnn", children);
  const classes = useStyles();
  const [sort, setSort] = useState(false);
  const [value, setValue] = useState([1000, 20000]);
  const [deliveryState, setDeliveryState] = useState("lagos");
  const [deliveryStateLocation, setDeliveryStateLocation] = useState("berger");
  const [isLocationAccount, setIsLocationAccount] = useState(false);
  // let remove = "";

  let Location = window.location.pathname.includes("/product/");
  console.log("layoutcartitem", cartItem);
  let show = window.location.pathname === "/Account" ? "none" : "";
  let fullWidth =
    window.location.pathname === "/Account"
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
    onGetAllJoggers(1, undefined, value[1]);
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
        <Container id="body">
          {/* full width showcase */}
          <Paper id="showcase" className={classes.showcaseProduct}>
            {/* <img
                    src={img}
                    alt="commerce.js"
                    width="100%"
                    //   height="25px"
                  />{" "} */}
            <div className={classes.showcaseContent}>
              {/* <Typography variant="h2"> Welcome To Our Store </Typography>
                    <Typography variant="h4">
                      Nice Cloth With Affordable prices
                    </Typography> */}
            </div>
          </Paper>
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
                  <Typography id="range-slider" gutterBottom>
                    DELIVERY & RETURNS
                  </Typography>
                  <Divider />
                </div>
                <div>
                  <Typography id="range-slider" gutterBottom>
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
                      // label="Age"
                    >
                      {/* <div> */}
                      <MenuItem
                        value=""
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        value="lagos"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        LAGOS
                      </MenuItem>
                      <MenuItem
                        value="osun"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        OSUN
                      </MenuItem>
                      <MenuItem
                        value="oyo"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
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
                        value=""
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        <em>None</em>
                      </MenuItem>
                      <MenuItem
                        value="ikeja"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        IKEJA
                      </MenuItem>
                      <MenuItem
                        value="berger"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        BERGER
                      </MenuItem>
                      <MenuItem
                        value="oshodi"
                        style={{ backgroundColor: "#212121", color: "#ffffff" }}
                      >
                        OSHODI
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Divider />
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Typography>Call To Order</Typography>
                  <Typography>+2349077888777</Typography>
                </div>

                <Divider />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container id="body">
          {/* full width showcase */}
          <Paper
            id="showcase"
            style={{ display: show }}
            className={`${classes.showcaseHome} window.location.pathname === "/Account" ? ${classes.remove} : ""`}
          >
            {/* <img
            src={img}
            alt="commerce.js"
            width="100%"
            //   height="25px"
          />{" "} */}
            <div className={classes.showcaseContent}>
              {/* <Typography variant="h2"> Welcome To Our Store </Typography>
            <Typography variant="h4">
              Nice Cloth With Affordable prices
            </Typography> */}
            </div>
          </Paper>
          <Grid container className={classes.contentLayoutContainer}>
            <Grid
              item
              md={2}
              id="sidebar"
              style={{ display: show }}
              className={`${classes.sidebar} (window.location.pathname === "/Account" ? ${classes.remove} : "")`}
            >
              <Paper>
                <div>
                  <Typography
                    id="range-slider"
                    gutterBottom
                    style={{ fontWeight: "bolder" }}
                  >
                    PRICE (₦)
                  </Typography>

                  <Grid container className={classes.sliderContainer}>
                    <Grid item xs={2}>
                      <Typography style={{ fontWeight: "bold" }}>
                        Min
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
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

                        defaultValue={30}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{ fontWeight: "bold" }}>
                        Max
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button variant="contained" onClick={() => handleSort(value)}>
                    {" "}
                    Sort{" "}
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

                <Divider />
                <List>
                  <Typography style={{ fontWeight: "bold" }}>
                    {" "}
                    Categories{" "}
                  </Typography>
                  <div className={classes.categoryContainer}>
                    {[
                      "one",
                      "two",
                      "three",
                      "one",
                      "two",
                      "three",
                      "one",
                      "two",
                      "three",
                    ].map((text, index) => (
                      <div className={classes.categoryItem}>
                        <Typography key={index}> {text}</Typography>
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
