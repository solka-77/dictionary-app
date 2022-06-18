import React from "react";
export default function Synonyms(props) {
  if (props.Synonyms) {
    return (
      <ul className="Synonyms">
        {props.Synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
