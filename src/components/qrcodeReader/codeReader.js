import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import BookExchange from "../files/bookExchange.png";
import NumericInput from "react-numeric-input";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { tileDataMod } from "../TronLinkInfo/index.js";
import TextField from "@material-ui/core/TextField";

var bookToTransfer = "";
var addyToTransfer = "";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
    console.log(event.target.value);
    bookToTransfer = event.target.value;
    console.log("Changing book");
  };

  const handleClick = () => {
    //console.log(tileDataMod);
    var transactionToken = window.tronWeb.trx.sendToken(
      addyToTransfer,
      1000000,
      bookToTransfer
    );
    console.log(transactionToken);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChangeAddy = event => {
    console.log(event.target.value);
    addyToTransfer = event.target.value;
  };

  return (
    <div>
      <img src={BookExchange} width="200" height="200" />
      <Divider />
      <FormControl className={classes.formControl}>
        <InputLabel id="BookList">Select Book</InputLabel>
        <Select
          labelId="BookList-label"
          id="BookList-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {tileDataMod.map(tile => (
            <MenuItem value={tile.tokenid}>{tile.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id="Txt_tokenid"
        label="Token ID"
        variant="filled"
        value={bookToTransfer}
      />
      <Divider />
      <TextField
        id="Txt_Addy"
        label="Receiver TRON Address"
        variant="outlined"
        onChange={handleChangeAddy}
      />

      <Button variant="outlined" onClick={handleClick}>
        Share book
      </Button>

      <Snackbar open_={open} autoHideDuration={6000} onClose_={handleClose}>
        <Alert onClose_={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

/*  <Divider />
  <NumericInput min={1} max={100} mobile="auto" size={1} />

  */
