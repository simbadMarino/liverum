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

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <img src={BookExchange} width="200" height="200" />

      <Divider />
      <NumericInput min={1} max={100} mobile="auto" size={1} />

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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Count of Montecristo</MenuItem>
          <MenuItem value={20}>Robinson Crusoe</MenuItem>
          <MenuItem value={30}>1001 Nights</MenuItem>
        </Select>
      </FormControl>
      <Divider />
      <Button className={classes.button} onClick={handleOpen}>
        Share Book
      </Button>
    </div>
  );
}
