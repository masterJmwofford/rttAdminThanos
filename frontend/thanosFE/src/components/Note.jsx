import React from "react";

function Note({ data }) {
  return (
    <div className="noteGoat">
      <div className="top">
        <div className="noteTitle">{data.title}</div>
        <div className="noteBody">{data.body}</div>
      </div>

      <div className="bottom">
        <div className="editBtn">Edit</div>
        <div className="deleteBtn">Delete</div>
      </div>
    </div>
  );
}

export default Note;
