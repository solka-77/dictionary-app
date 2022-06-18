import React from "react";
export default function Synonyms(props) {
  if (props.Synonyms) {
    return (
      <div className="Synonyms">
        {props.Synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
