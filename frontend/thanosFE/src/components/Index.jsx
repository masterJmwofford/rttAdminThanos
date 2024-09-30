import React from "react";
import Note from "./Note";
function Index({ info }) {
  return (
    <div>
      <div className="dashTitle">Notes Dashboard</div>
      <div className="notesContainer">
        {info.map((note) => {
          return (
            <>
              <Note data={note}/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
