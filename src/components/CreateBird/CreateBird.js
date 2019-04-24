import React, { Component } from "react";

class CreateBird extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genus: "",
      image: "",
      homepage: "",
      conservationStatus: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(this.props);
  }

  handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;

    this.setState({
      [name]: value
    });
    evt.preventDefault();
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onNewBird(this.state);
    console.log(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <h3>Add a New Bird</h3>
          <div>
            <h5 className="formLabel">Name</h5>
            <input
              name="name"
              type="text"
              size="40"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5 className="formLabel">Genus</h5>
            <input
              name="genus"
              type="text"
              size="40"
              value={this.state.genus}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5 className="formLabel">Image</h5>
            <input
              name="image"
              type="text"
              size="40"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5 className="formLabel">Homepage</h5>
            <input
              name="homepage"
              type="text"
              size="40"
              value={this.state.homepage}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <h5 className="formLabel">Conservation Status</h5>
            <textarea
              name="conservationStatus"
              value={this.state.conservationStatus}
              cols="40"
              rows="5"
              onChange={this.handleChange}
            />
          </div>
          <input
            className="button"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default CreateBird;
