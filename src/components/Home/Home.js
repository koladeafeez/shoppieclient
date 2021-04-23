import { useEffect } from "react";
import Filter from "../Shared/Filter";
import Search from "../Shared/Search";
import ProductsList from "../Products/ProductsList";
import Products from "./../Products/ProductsList";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../Shared/SimpleCard";
import Icon from "@material-ui/core/Icon";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import { addItemToCart } from "./../../redux/actions/cartActions";
import { getAllJoggers } from "../../redux/actions/joggerActions";
import { getShowcase } from "../../redux/actions/showcaseActions";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  showcase: {
    height: "400px",
    width: "100%",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(26),
    },
  },

  productHeader: {
    display: "inline",
    // [theme.breakpoints.down("sm")]: {
    lineHeight: 1.5,
    fontSize: "1rem",
    fontWeight: "bolder",
    paddingLeft: "2rem",
    // marginBottom: "1rem",
    // },

    // backgroundColor: "red",
  },
  seeMore: {
    backgroundColor: theme.palette.background,
    float: "right",
    color: theme.palette.complimentary,
    fontWeight: "bolder",
    // marginRight: 10,
  },

  contentPaper: {
    marginTop: theme.spacing(4),
    // marginBottom: theme.spacing(1),
  },
  card: {
    // width: "100%",
    // display: "flex",
    // alignItems: "spaceAround",
    // flexWrap: "nowrap",
  },
  cardContainer: {
    // width: "auto",
    // flexDirection: "row-reverse",
    flexWrap: "nowrap",
    overflow: "auto",
    minHeight: "40vh",
  },

  scrollItems: {
    marginTop: "3rem",
    marginBottom: "2rem",
    backgroundColor: theme.palette.background,
  },
  scrollItem1: {
    marginTop: 0,
  },

  griditem: {
    minWidth: "19%",
    marginLeft: "1%",
    "@media (max-width: 800px)": {
      minWidth: "50%",
      minHeight: "100%",
      marginLeft: theme.spacing(2),
    },
    // flex: "1 1 50%",
  },
  griditems: {
    // flexGrow: 0,
    minWidth: "200px",
  },
}));
// xs={6}
const Home = (
  { cartItem, addItemToCart, joggers, asooke, onGetShowcase },
  props
) => {
  console.log("props.children in home", props);
  const classes = useStyles();

  const getAllJoggers = async () => {
    await onGetShowcase();
    console.log("jjjjj", asooke);
  };

  useEffect(() => {
    getAllJoggers();
    axios
      .get("http://localhost:4000/all")
      .then((response) => {
        console.log("response is good", response);
        if (response.status === 200 && response.statusText === "OK") {
          console.log("response bodys", response.data);
          //   alert("Registration Successful!" + response.data.data);
          //   console.log(response.data.data);
          // dispatch(getAllJoggersSuccess(response.data));
          return;
        } else if (response.status === 200 && response.statusText !== "OK") {
          // alert('Registration Failed' + response.data.data)
          // dispatch(getAllJoggersError);
        }
      })
      .catch((error) => {
        console.log(error);
        //handle error
      });
  }, []);

  console.log("to cart", joggers);
  if (!joggers) return <p>Loading...</p>;
  // console.log("length", !joggers);
  // setTimeout(() => {
  //   console.log("length after", joggers.length);
  // }, 20000);
  return (
    <>
      {/* <div className={classes.root}> */}
      <div className={`${classes.scrollItems} ${classes.scrollItem1}`}>
        <Paper elevation={2}>
          <Grid item sm={6} style={{ paddingTop: "1rem" }}>
            <Typography variant="h2" className={classes.productHeader}>
              Deals Of Today
            </Typography>
          </Grid>
          <Grid container className={classes.cardContainer}>
            {joggers.map((product) => {
              return (
                <Grid item className={classes.griditem}>
                  <SimpleCard product={product} />
                </Grid>
              );
            })}

            {/* <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid> */}
          </Grid>
        </Paper>
      </div>

      <div className={classes.scrollItems}>
        <Grid item sm={6} style={{ paddingTop: "1rem" }}>
          <Typography variant="h2" className={classes.productHeader}>
            Deals Of Today
          </Typography>
        </Grid>
        <Paper elevation={2}>
          <Grid container className={classes.cardContainer}>
            {joggers.map((product) => {
              return (
                <Grid item className={classes.griditem}>
                  <SimpleCard product={product} />
                </Grid>
              );
            })}

            {/* <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid> */}
          </Grid>
        </Paper>
      </div>
      <div className={classes.scrollItems}>
        <Paper elevation={2} style={{ paddingTop: "1rem" }}>
          <Typography variant="h2" className={classes.productHeader}>
            Joggers
          </Typography>
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              console.log("click", addItemToCart);
              addItemToCart(500);
            }}
            className={classes.seeMore}
            endIcon={<ArrowForwardIosIcon />}
          >
            See All
          </Button>

          <Grid container className={classes.cardContainer}>
            {joggers.map((product) => {
              return (
                <Grid item className={classes.griditem}>
                  <SimpleCard product={product} />
                </Grid>
              );
            })}

            {/* <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid> */}
          </Grid>
        </Paper>
      </div>

      <div className={classes.scrollItems}>
        <Paper elevation={2} style={{ paddingTop: "1rem" }}>
          <Typography variant="h2" className={classes.productHeader}>
            Joggers
          </Typography>
          <Button
            variant="text"
            color="primary"
            className={classes.seeMore}
            endIcon={<ArrowForwardIosIcon />}
          >
            See All
          </Button>

          <Grid container className={classes.cardContainer}>
            {joggers.map((product) => {
              return (
                <Grid item className={classes.griditem}>
                  <SimpleCard product={product} />
                </Grid>
              );
            })}

            {/* <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid>
            <Grid item className={classes.griditem}>
              <SimpleCard />
            </Grid> */}
          </Grid>
        </Paper>
      </div>
    </>
    // <Container>
    //   <ProductsList products={products} />
    // </Container>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state.showcase.data[1]);
  return {
    cartItem: state,
    joggers: state.showcase.data[1],
    asooke: state.showcase.data[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch", dispatch);
  return {
    addItemToCart: (productId) => dispatch(addItemToCart(productId)),
    onGetAllJoggers: () => dispatch(getAllJoggers()),
    onGetShowcase: () => dispatch(getShowcase()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
