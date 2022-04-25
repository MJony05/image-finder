import React from "react";
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";
import axios from "axios";
class App extends React.Component {
  state = {
    kalit: "",
    images: [],
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
        per_page: 30,
      },
      headers: {
        Authorization: "Client-ID Zn0BdWt4lW0tA_Vdp-x-rlwZRBGqPg_0Q2eJRgGiius",
      },
    });
    let imageLinks = data.data.results.map((el) => {
      return el.links.html;
    });
    this.setState({ images: imageLinks });
  };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
          App component
        </h1>
        <SearchBar getData={this.getSearchData} />
        {this.state.images.map((el) => {
          return <ImageList link={el} />;
        })}
      </>
    );
  }
}

export default App;
