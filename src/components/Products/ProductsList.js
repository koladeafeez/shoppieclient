import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../../components/Shared/SimpleCard";

import Product from "./Product.js";
import { getAllJoggers } from "../../redux/actions/joggerActions";
// import useStyles from "../../styles/ProductsListStyles";
import { connect } from "react-redux";
import { Button, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: "6px !important",
    minHeight: "90vh",
    [theme.breakpoints.down("xs")]: {
      minHeight: "70vh",
      flexBasis: "90%",
    },
  },

  media: {
    // [theme.breakpoints.down("xs")]: {
    //   height: "40vh",
    // },
  },

  content: {
    // marginTop: "3rem",
    // marginBottom: "2rem",
    backgroundColor: theme.palette.background,
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: theme.palette.pageBackground,
    },
  },
  scrollItem1: {
    marginTop: 0,
  },
  container: {
    marginTop: 0,
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: theme.palette.background,
    },
  },
  notDisabled: {},
  disabled: {},
  paginationContainer: {
    height: "6rem",
    paddingTop: "2rem",
    backgroundColor: "#f5f5f5",
  },
  paginationUl: {
    padding: 0,
    // float: "right",
    marginTop: "2rem",
  },
  paginatedButton: {
    width: "5%",
    marginLeft: "1rem",
  },
  paginatedTypo: {
    display: "inline",
  },
  product: {
    // height: "100px",
    marginTop: theme.spacing(2),
  },
  divider: {
    height: 0,
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(3),
      position: "relative",
      top: "-40px",
    },
  },
}));

const Products = ({
  onAddToCart,
  onGetAllJoggers,
  joggers,
  cartItem,
  route,
  previous,
  next,
  pageLimit,
  searchTerm,
}) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const numberOfPages = [];

  fetch(
    "https://shoppieapi.herokuapp.com/api/product/joggers?page=1&limit=5&search=&price=0"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));

  // if (numberOfPages.length >= 10) {
  // let  moveForward = remove(previous.page);

  // }

  let pageLimits = 5;
  let currentPageValue = 1;
  let removePage = [];

  for (let i = 0; i < pageLimits; i++) {
    if (numberOfPages.length == 12) {
      break;
    }

    numberOfPages.push(i);
  }
  console.log(previous);
  console.log("number of pages", numberOfPages);

  console.log("cartitemvvv", cartItem);
  console.log("routeeeee", route);
  const getAllJoggers = async (number, searchTerm) => {
    await onGetAllJoggers(number, searchTerm);
    console.log("jjjjj", joggers);
  };
  // console.log(searchTerm)

  const handlePagination = (e, searchTerm) => {
    e.preventDefault();
    console.log("pagination term", searchTerm);

    getAllJoggers(e.target.value, searchTerm);
  };

  useEffect(() => {
    getAllJoggers();
  }, []);

  // products = [1, 2, 3, 4, 5, 6];
  if (!joggers.joggers.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid
        container
        justify="center"
        spacing={4}
        className={classes.container}
      >
        {console.log("the data", joggers)}
        {joggers.joggers.map((product) => (
          <Grid
            key={product._id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            className={classes.gridContainer}
          >
            {/* {console.log(product)} */}
            <SimpleCard
              product={product}
              // height={"40vh"}
              log={[1, 2, 3]}
              className={classes.product}
            />
            <Divider className={classes.divider} />
            {/* <Product product={product} onAddToCart={onAddToCart} /> */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.paginationContainer}>
        <ul className={classes.paginationUl}>
          <Button
            variant="outlined"
            value={!previous ? 0 : previous.page}
            disabled={!previous ? true : false}
            className={classes.paginatedButton}
            onClick={(e) => handlePagination(e, searchTerm)}
          >
            PREV
          </Button>

          <Typography className={classes.paginatedTypo}> 0/4</Typography>
          {/* {numberOfPages.map((pageNumber) => {
            return (
              <Button variant="outlined" className={classes.paginatedButton}>
                {" "}
                {pageNumber}{" "}
              </Button>
            );
          })} */}

          <Button
            value={!next ? 0 : next.page}
            onClick={(e) => handlePagination(e, searchTerm)}
            disabled={!next ? true : false}
            variant="outlined"
            className={classes.paginatedButton}
          >
            NEXT
          </Button>
        </ul>
      </div>
      <div style={{ width: "100%", height: "10px", marginTop: "4rem" }}></div>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state.joggers.previous);
  return {
    joggers: state.joggers,
    previous: state.joggers.previous,
    next: state.joggers.next,
    pageLimit: state.joggers.pageLimit,
    searchTerm: state.searchTerm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllJoggers: (number, term) => {
      dispatch(getAllJoggers(number, term));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
