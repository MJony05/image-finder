import React from "react";
import SearchBar from "./SearchBar.jsx";
import ImageList from "./ImageList.jsx";
import axios from "axios";
import "./imageList.css";
class App extends React.Component {
  state = {
    images: [],
    page: 1,
    keyword: "",
  };
  nextPage = async () => {
    let a = this.state.page + 1;
    await this.getSearchData(this.state.keyword);
    this.setState({ page: a });
  };
  prePage = async () => {
    await this.getSearchData(this.state.keyword);
    let a = this.state.page - 1;
    this.setState({ page: a });
  };

  getSearchData = async (keyword) => {
    const data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: keyword,
        per_page: 50,
        page: this.state.page,
      },
      headers: {
        Authorization: "Client-ID Wc90NIYsLDPrNlYsk6Ji37fAwaUphYLa-D-UCNdKjAY",
      },
    });
    let imageLinks = data.data.results.map((el) => {
      return el;
    });

    this.setState({ images: imageLinks, keyword: keyword });
  };
  // getResult = async () => {

  //   let imageLinks = data.data.results.map((el) => {
  //     return el.links.download;
  //   });

  //   this.setState({ images: imageLinks });
  // };
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Welcome!</h1>
        <SearchBar getData={this.getSearchData} />

        <div className="images-container">
          {this.state.images.map((el) => {
            return <ImageList props={el} key={el.id} />;
          })}
        </div>
        <div
          className="btn-container"
          style={{ margin: "0 auto", textAlign: "center" }}
        >
          <button
            className="next"
            style={{ padding: "0.5rem 1rem" }}
            onClick={this.prePage}
          >
            previus page
          </button>
          <button
            className="next"
            style={{ padding: "0.5rem 1rem" }}
            onClick={this.nextPage}
          >
            Next page
          </button>
        </div>
      </>
    );
  }
}

export default App;
