import React, { useRef, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Divider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJoggers, searchTerm } from "../../redux/actions/joggerActions";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    maxWidth: "1280px",
    alignItems: "center",
  },
  appbar: {
    padding: 10,
    backgroundColor: theme.palette.background,
    "@media (min-width: 1280px)": {
      maxWidth: "1280px",
      right: "0",
      left: "0",
      marginLeft: "auto",
      marginRight: "auto",
      // maxWidth: "1280px",
      // marginRight: "auto",
      // right: "auto",
      // left: "50%",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    display: "flex",
    borderColor: "#C7C7CD",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F5F5F5",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "30%",
    },
    // "@media (max-width: 780px)": {
    //   backgroundColor: "inherit",
    // },
    "@media (max-width: 780px)": {
      display: "none",
    },
  },
  showSearch: {
    // display: "block",
    position: "absolute",
    top: "80px",
    display: "flex",
    borderColor: "#C7C7CD",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: "red",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "30%",
    },
    // "@media (max-width: 780px)": {
    //   backgroundColor: "inherit",
    // },
    "@media (max-width: 780px)": {
      display: "block",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchIconMin: {
    padding: theme.spacing(0, 2),
    // height: "100%",
    // position: "relative",
    // pointerEvents: "none",
    display: "none",
    alignItems: "center",
    // justifyContent: "center",
    "@media (max-width: 780px)": {
      display: "flex",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    // "@media (max-width: 780px)": {
    //   display: "none",
    // },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  btn: {
    color: theme.palette.complimentary,
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
    },
  },
  btn1: {
    // marginRight: "0.9rem",
    color: theme.palette.complimentary,
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3vw",
      // marginRight: "0.2rem",
      // float: ""
    },
  },
  searchBtn: {
    backgroundColor: theme.palette.primary.main,
    width: "20%",
    marginLeft: "5px",

    // marginRight: "0.2rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "5rem",
    },
  },
  products: {
    float: "left",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },

    // marginRight: "100px",
  },
  link: {
    textDecoration: "none",
  },
  popMenu: {
    opacity: 4,
    // display: "none",
    // backgroundColor: theme.palette.background,
  },
  popMenuUl: {
    backgroundColor: "#212121",
    color: "#fff",
    height: "50%",
  },
  divider: {
    backgroundColor: "#fff",
  },
  hamburger: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileSearch: {
    backgroundColor: "#212121",
  },
  mobileSearchRoot: {
    backgroundColor: "#212121",
    color: "#fff",
    border: "1px solid black",
    borderRadius: "10px",
    width: "70%",
  },
  mobileSearchIcon: {},
}));

function PrimarySearchAppBar({
  cartItem,
  onGetSearchTermJoggers,
  onSaveSearch,
}) {
  console.log("layoutitem", cartItem);
  const classes = useStyles();
  const [searchValue, setSearchValue] = React.useState("good");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [showSearch, setShowSearch] = React.useState(false);

  const searchForm = useRef();
  const search = useRef();

  console.log(window.localStorage.getItem("itemCount") === null);
  let localCartNumber = window.localStorage.getItem("itemCount");
  let numberOfItemInCart =
    localCartNumber === null
      ? cartItem.cart.itemNumber
      : parseInt(localCartNumber);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchValue);
    localStorage.setItem("searchTerm", searchValue);
    onSaveSearch(searchValue);
    onGetSearchTermJoggers(1, searchValue);
  };

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
    let div = search.current;
    console.log(div.innerHTML.focus);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // let searchBackground = "#000";

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.popMenu}
    >
      <div className={classes.popMenuUl}>
        <MenuItem onClick={handleMenuClose}>Joggers</MenuItem>
        <Divider className={classes.divider} />
        <MenuItem onClick={handleMenuClose}>Aso Oke</MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.popMenu}
    >
      <div className={classes.popMenuUl}>
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <Divider className={classes.divider} />
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <Divider className={classes.divider} />

        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </div>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={`${classes.menuButton} ${classes.hamburger}`}
            color="inherit"
            aria-label="open drawer"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="h6" noWrap>
              {searchValue}
            </Typography>
          </Link>
          <div className={classes.searchIconMin}>
            <IconButton onClick={handleSearchIconClick}>
              {showSearch ? <AccountCircle /> : <SearchIcon />}
            </IconButton>
          </div>
          <form
            className={` ${showSearch ? classes.showSearch : classes.search}`}
          >
            <div
              className={classes.searchIcon}
              //
            >
              <SearchIcon
                className={`${showSearch ? classes.mobileSearchIcon : ""}`}
              />
            </div>
            <InputBase
              value={searchValue}
              onChange={(e) => handleSearchChange(e)}
              ref={search}
              placeholder="Search…"
              className={`${showSearch ? classes.mobileSearchRoot : ""}`}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <Button
              variant="contained"
              className={classes.searchBtn}
              onClick={(e) => handleSearch(e)}
            >
              Search
            </Button>
          </form>
          <div className={classes.grow} />
          <div className={classes.products}>
            <Link to="/joggers" className={classes.link}>
              <Button variant="text" className={classes.btn1}>
                Joggers
              </Button>
            </Link>
            <Button variant="text" className={classes.btn}>
              Aso Oke
            </Button>
          </div>
          <Link to="/cart" className={classes.link}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={numberOfItemInCart} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

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
    onSaveSearch: (term) => dispatch(searchTerm(term)),
    onGetSearchTermJoggers: (number, searchTerms) =>
      dispatch(getAllJoggers(number, searchTerms)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimarySearchAppBar);
