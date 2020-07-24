import React from "react";
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
export default class Loader extends React.Component {
  
 
  render() {
    return (
      <div className="sweet-loading">
        <SyncLoader
          css={override}
          size={15}
          color={"#123abc"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}