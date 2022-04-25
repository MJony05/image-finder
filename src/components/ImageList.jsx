import React from "react";

class ImageList extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.link}</h1>
        <img src={this.props.link} alt="image from unsplash" />
      </>
    );
  }
}
export default ImageList;
