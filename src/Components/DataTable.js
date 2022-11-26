import * as React from "react";
import ResultCard from "./ResultCard";
import DetailsModal from "./DetailsModal";

function createData(name, description) {
  return {
    name,
    description,
  };
}

const rows = [
  createData("River Side", "652W 1s Street"),
  createData("Town Lake", "652W 1s Street"),
  createData("New town", "652W 1s Street"),
  createData("SJ Enclave", "652W 1s Street"),
  createData("Ginger bread", "652W 1s Street"),
  createData("Paseo", "652W 1s Street"),
  createData("ButterField", "652W 1s Street"),
  createData("Free Mont", "652W 1s Street"),
  createData("Las Vegas", "652W 1s Street"),
  createData("New york", "652W 1s Street"),
  createData("New york", "652W 1s Street"),
  createData("New york", "652W 1s Street"),
];

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, data: {} };
  }

  seeDetailsClicked = (data) => {
    console.log("seeDetailsClicked :", data);
    this.setState({ data: data }, () => {
      this.setState({ isOpen: true });
    });
  };

  closeModal = () => {
    console.log("CloseModal :");
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 15,
          marginBottom: 25,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {rows ? (
          rows.map((row, index) => (
            <ResultCard
              key={index}
              seeDetailsClicked={() => this.seeDetailsClicked(row)}
              name={row.name}
              description={row.description}
            />
          ))
        ) : (
          <div>
            <h3>No Results Found !</h3>
          </div>
        )}
        <DetailsModal
          data={this.state.data}
          isOpen={this.state.isOpen}
          closeModal={() => this.closeModal()}
        />
      </div>
    );
  }
}

export default DataTable;
