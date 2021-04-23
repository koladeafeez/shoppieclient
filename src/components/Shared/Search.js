import { FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  textfield: {
    width: "50%",
  },
  btn: {
    width: "20%",
    marginLeft: "5px",
  },
});

const Search = () => {
  const classes = useStyles();
  return (
    <FormControl id="formControl" className={classes.root}>
      <TextField
        label="Search"
        variant="outlined"
        className={classes.textfield}
      />
      <Button color="secondary" variant="outlined" className={classes.btn}>
        Search
      </Button>
    </FormControl>
  );
};

export default Search;
