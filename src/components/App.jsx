import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
class App extends React.Component {
  state = {
    kalit: "",
  };
  getSearchData = (keyword) => {
    this.setState({ kalit: keyword });
  };
  componentDidUpdate() {
    this.getResult();
  }
  getResult = async () => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID xF1Pf3JI8CQqisc7F4_ZVd0qyiFDqrhqby0sB2j3loY",
      },
    });
    console.log(data.data);
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
          App component
        </h1>
        <SearchBar getData={this.getSearchData} />
      </>
    );
  }
}

export default App;
