import React from "react";
import DataTable from "../Components/DataTable";
import ToolBar from "../Components/ToolBar";
import Pagination from "@mui/material/Pagination";
import Form from "../Components/Form";
import Divider from "@mui/material/Divider";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageNumbers: 10, page: 1 };
  }
  pageNumberChanged = (e, page) => {
    console.log("pageNumberChanged :", page);
    this.setState({ page: page });
  };
  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", overflow: "auto" }}
      >
        <ToolBar />
        <div style={{ marginTop: 80, marginBottom: 20 }}>
          <Form />
        </div>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <DataTable />
        </div>
        {/* <div
          style={{
            marginTop: 50,
            marginBottom: 50,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pagination
            count={this.state.pageNumbers}
            page={this.state.page}
            size="large"
            onChange={(e, page) => {
              this.pageNumberChanged(e, page);
            }}
          />
        </div> */}
      </div>
    );
  }
}

export default Home;
