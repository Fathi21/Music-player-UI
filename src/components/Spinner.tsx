import React from "react";

function Spinner(props: any) {
  console.log();

  return (
    <div className={props.hide}>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
