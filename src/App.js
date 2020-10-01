import React, { Component } from "react";
import FormExample from "./FormExample";
import Header from "./Header";
import ExpertsPanel from "./ExpertsPanel";
import SidepanelBox from "./SidePanel/SidePanelBox";
import axios from "axios";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: false,
      courseDetails: {},
      expertsData: [],
    };
    this.getModuleDetailsById = this.getModuleDetailsById.bind(this);
  }

  componentDidMount() {
    this.getApiData();
    this.getExpertsPanelData();
  }

  getApiData() {
    axios({
      url:
        "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy",
      method: "get",
      headers: {
        "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({
          isloading: true,
          courseDetails: response.data.courseDetails,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          courseDetails: err,
        });
      });
  }

  getExpertsPanelData() {
    axios({
      url:
        "https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts",
      method: "get",
      headers: {
        "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.setState({
          isloading: true,
          expertsData: response.data.expertDetails,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getModuleDetailsById(moduleId) {
    axios({
      url:
        "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=" +
        { moduleId },
      method: "get",
      headers: {
        "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.loading === false) {
      // eslint-disable-next-line no-unused-expressions
      <p>Loading.....!</p>;
    } else {
      return (
        <div>
          
          <Header courseDetails={this.state.courseDetails} />
          <ExpertsPanel expertDetails={this.state.expertsData} />
          <SidepanelBox getModuleDetailsById={this.getModuleDetailsById()} />
          <AmplifySignOut />
        </div>
      );
    }
  }
}
export default withAuthenticator(App);