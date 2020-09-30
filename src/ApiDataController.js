// import React, { Component } from "react";
// import SidePanelBox from "./SidePanel/SidePanelBox";
// import axios from "axios";

// export default class ApiDataController extends Component {
//   constructor(){

//   }
//   getModuleDetailsById(moduleId) {
//     axios({
//       url:
//         "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=" +
//         { moduleId },
//       method: "get",
//       headers: {
//         "hk-access-token": "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     return <SidePanelBox getModuleDetailsById={this.getModuleDetailsById()} />;
//   }
// }
