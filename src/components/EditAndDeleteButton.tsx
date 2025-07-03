import GetPlayListById from "../Utilities/ApiCalls/GetPlayListById";
import React, { useEffect, useState } from "react";
import EditPlayList from "./EditPlayList";
function EditAndDeleteButton() {  

  return (
    <div className="EditAndDeleteButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="20"
        fill="currentColor"
        className="bi bi-three-dots dropdown-toggle"
        viewBox="0 0 16 16"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
      </svg>
      <ul className="dropdown-menu">
        <li
          className="list-group-item EditButton"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pen-fill"
            viewBox="0 0 16 16"
          >
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
          </svg>
          Edit
        </li>
        <li className="list-group-item DeleteButton"             
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            data-bs-whatever="@mdo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-archive-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
          </svg>
          Delete
        </li>
      </ul>
    </div>
    
  );
}

export default EditAndDeleteButton;
