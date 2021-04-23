import { makeStyles } from "@material-ui/core/styles";
import { AddShoppingCart } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/christopher-czermak-ulG2K7id26s-unsplash.jpg";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: "100%",
    height: "40vh",
    boxShadow: "none",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.background,
    },
  },
  media: {
    height: 150,
    marginBottom: "1rem",
  },
  contentText: {
    // [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    // },
  },
  productGridContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },

  productGridImg: {
    [theme.breakpoints.down("xs")]: {
      // height: "100%",
      flexBasis: "40%",
    },
  },
}));

export default function Product({ product, onAddToCart }) {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.productGridContainer}>
        <CardMedia
          className={`${classes.media} ${classes.productGridImg}`}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.peoductGridContent}>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.contentText}
          >
            Lizard
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
            component="h2"
            className={classes.contentText}
          >
            ₦ 20000
          </Typography>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
