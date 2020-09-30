import React, { Component } from "react";

export default class ExpertsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expertDetails: this.props.expertDetails,
    };
  }

  render() {
    return (
      <div className="experts-details">
        {this.props.expertDetails
          ? this.props.expertDetails.map((experts) => {
              return (
                <div className="experts-details">
                  <p>
                    {" "}
                    <img
                      src={experts.profilePic}
                      alt="sur"
                      height="100"
                      width="100"
                    />
                  </p>
                  <br />
                  <strong>
                    {experts.title} {experts.expertName}
                  </strong>
                  <br />
                  <p>{experts.qualification}</p>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
