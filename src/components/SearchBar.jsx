import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }
  inputMalumotOl = (e) => {
    this.setState({ keyword: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <form
          className="ui fluid action input"
          style={{ width: "70%", margin: "0 auto" }}
          // onSubmit={(e) => this.onFormSubmit(e)}
          onSubmit={(e) => {
            this.props.getData(this.state.keyword);
            return this.onFormSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Search Image..."
            style={{ margin: "2rem 0" }}
            onChange={this.inputMalumotOl}
          />
          <button className="ui button" style={{ margin: "2rem 0" }}>
            Search
          </button>
        </form>
      </div>
    );
  }
}
export default SearchBar;
