import React from "react";
import ImageBox from "./ImageBox";
import "./imageList.css";

class ImageList extends React.Component {
  render() {
    return <ImageBox props={this.props} />;
  }
}
export default ImageList;
