import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { Navbar, Products, Cart, Checkout } from "./components";
import ProductDetails from "./components/Products/ProductDetails";

import { commerce } from "./lib/commerce";
import UserAccount from "./components/Account/Account";
import Home from "./components/Home/Home";
import Layout from "./components/Shared/Layout";
import DetailsLayout from "./components/Shared/DetailsLayout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#dd9022",
    },
    background: "#FFFFFF",
    complimentary: "#2268DD",
    pageBackground: "#F5F5F5",
  },
});

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  // useEffect(() => {
  //   fetchProducts();
  //   fetchCart();
  // }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          {/* <CssBaseline /> */}

          <Switch>
            <Layout>
              <Route exact path="/">
                <Home />
              </Route>

              <Route
                exact
                path="/joggers"
                render={(routeProps, cartItem) => (
                  <Products route={routeProps} cart={cartItem} />
                )}
              />

              {/* </Route> */}

              <Route
                path="/joggers/:id"
                render={(routeProps) => (
                  <ProductDetails routeProps={routeProps} />
                )}
              />

              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route path="/checkout" exact>
                <Checkout />
              </Route>
              <Route path="/Account" exact>
                <UserAccount />
              </Route>
            </Layout>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
