import React from "react";

class ImageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageDOM = React.createRef();
  }
  setSpan = () => {
    const height = this.imageDOM.current.clientHeight;
    const spans = Math.ceil(height + 11);
    this.setState({ spans: spans });
  };
  componentDidMount() {
    this.imageDOM.current.addEventListener("load", this.setSpan);
  }

  render() {
    return (
      <img
        ref={this.imageDOM}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="image"
        alt={this.props.props.props.alt_description}
        src={this.props.props.props.urls.regular}
      />
    );
  }
}

export default ImageBox;
