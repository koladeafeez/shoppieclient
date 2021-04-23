import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SimpleCard from "../../components/Shared/SimpleCard";

import Product from "./Product.js";
import { getAllJoggers } from "../../redux/actions/joggerActions";
// import useStyles from "../../styles/ProductsListStyles";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  notDisabled: {},
  disabled: {},
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
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            {/* {console.log(product)} */}
            <SimpleCard product={product} log={[1, 2, 3]} />
            {/* <Product product={product} onAddToCart={onAddToCart} /> */}
          </Grid>
        ))}
      </Grid>
      <div>
        <ul>
          <button
            value={!previous ? 0 : previous.page}
            disabled={!previous ? true : false}
            className={classes.notDisabled}
            onClick={(e) => handlePagination(e, searchTerm)}
          >
            PREVIOUS
          </button>
          {numberOfPages.map((pageNumber) => {
            // if (currentPageValue == 6) {
            //   removePage = numberOfPages.shift(2, 5);
            // }
            if (pageNumber <= 10) {
              currentPageValue += 1;
              return <Button> {pageNumber} </Button>;
            } else {
              return <p> ... </p>;
            }
          })}
          {/* {numberOfPages.map((pageNumber) => {
            
          })} */}
          <button
            value={!next ? 0 : next.page}
            onClick={(e) => handlePagination(e, searchTerm)}
            disabled={!next ? true : false}
            className={classes.notDisabled}
          >
            NEXT
          </button>
        </ul>
      </div>
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
