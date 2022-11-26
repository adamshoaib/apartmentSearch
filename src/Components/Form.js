import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: 10,
      page: 1,
      form: {
        searchText: "",
        is2b2b: false,
        isSecure: false,
        age: 10,
        rent: 1000,
      },
    };
  }

  handleChange = (event) => {
    this.setState({ form: { ...this.state.form, age: event.target.value } });
  };

  handleRentChange = (event) => {
    this.setState({ form: { ...this.state.form, rent: event.target.value } });
  };

  onTextFieldChange = (e) => {
    this.setState({ form: { ...this.state.form, searchText: e.target.value } });
  };

  submitClicked = () => {
    console.log("This Form :", this.state.form);
  };

  render() {
    const { is2b2b, isSecure, age, rent } = this.state.form;
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => {
            this.onTextFieldChange(e);
          }}
          value={this.state.form.searchText}
          id="outlined-basic"
          label="Search Keyword"
          variant="outlined"
        />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={is2b2b} />}
            label="2 Bedroom"
          />
          <FormControlLabel
            control={<Checkbox checked={isSecure} />}
            label="3 Bedroom"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={is2b2b} />}
            label="1 Bedroom"
          />
          <FormControlLabel
            control={<Checkbox checked={isSecure} />}
            label="secure"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={is2b2b} />}
            label="Good Reviews"
          />
          <FormControlLabel
            control={<Checkbox checked={isSecure} />}
            label="Spacious"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={is2b2b} />}
            label="Gym"
          />
          <FormControlLabel
            control={<Checkbox checked={isSecure} />}
            label="Pool"
          />
        </FormGroup>
        <FormGroup>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Rent Range</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={rent}
              label="Rent Range"
              onChange={(e) => this.handleRentChange(e)}
            >
              <MenuItem value={1000}>$0 - $1000</MenuItem>
              <MenuItem value={2000}>$1000 - $2000</MenuItem>
              <MenuItem value={3000}>$2000 - $3000</MenuItem>
              <MenuItem value={4000}>$3000 - Above</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Address</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Address"
              onChange={(e) => this.handleChange(e)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </FormGroup>
        <div>
          <Button onClick={() => this.submitClicked()} variant="contained">
            Search
          </Button>
        </div>
      </Box>
    );
  }
}

export default Form;
