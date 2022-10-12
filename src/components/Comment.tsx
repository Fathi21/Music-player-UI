import React from "react";

function Comment() {
  return (
    <div className="mb-3 CommentBox">
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label htmlFor="floatingTextarea">Add a comment</label>
      </div>
    </div>
  );
}

export default Comment;
