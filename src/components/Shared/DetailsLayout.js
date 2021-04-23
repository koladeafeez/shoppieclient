import { useState } from "react";
import {
  Drawer,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
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
  showcase: {
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
  contentLayoutContainer: {
    margin: 0,
    padding: 0,
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
    [theme.breakpoints.down("sm")]: {
      // display: "inline",
      // width: "70%",
    },
  },
  sort: {
    height: "30px",
  },
}));

const DetailsLayout = ({ children }) => {
  const classes = useStyles();
  const [sort, setSort] = useState(false);
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.body}>
      {/* Navbar */}
      <Navbar />

      <Container id="body">
        {/* full width showcase */}
        <Paper id="showcase" className={classes.showcase}>
          {/* <img
            src={img}
            alt="commerce.js"
            width="100%"
            //   height="25px"
          />{" "} */}
          <div className={classes.showcaseContent}>
            <Typography variant="h2"> Welcome To Our Store </Typography>
            <Typography variant="h4">
              Nice Cloth With Affordable prices
            </Typography>
          </div>
        </Paper>

        {/* sidebar */}
        <Grid container className={classes.contentLayoutContainer}>
          {/* content area */}
          <Grid item md={2} id="content-area" className={classes.contentArea}>
            <div className={classes.page}>{children}</div>
          </Grid>
        </Grid>
        <Grid item md={2} id="sidebar" className={classes.sidebar}>
          <Paper>
            <div>
              <Typography id="range-slider" gutterBottom>
                PRICE in naira (₦)
              </Typography>

              <Grid container className={classes.sliderContainer}>
                <Grid item xs={2}>
                  <Typography>Min</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Slider
                    className={classes.slider}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography>Maximum</Typography>
                </Grid>
              </Grid>
              {sort === true ? (
                <div className={classes.sort}>
                  <Typography>Sort By</Typography>
                  <Button>Apply</Button>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <Divider />
            <List>
              <Typography> Categories </Typography>
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
                <Typography key={index}> {text}</Typography>
              ))}
            </List>
            <Divider />
          </Paper>
        </Grid>
      </Container>
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

export default DetailsLayout;
