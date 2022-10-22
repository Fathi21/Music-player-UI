import React from "react";

function Spinner(props: any) {
  const hide = props.data > 0 ? "hide" : "loading";

  return (
    <div className={hide}>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
