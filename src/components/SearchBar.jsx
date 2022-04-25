import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <>
        <div
          className="ui fluid action input"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{ margin: "2rem 0" }}
          />
          <button className="ui button" style={{ margin: "2rem 0" }}>
            Search
          </button>
        </div>
      </>
    );
  }
}
export default SearchBar;
