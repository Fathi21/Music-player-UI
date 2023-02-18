import React from "react";

function LinesEllipsis(props: any) {
  let textLength = 0;
  const comingFrom = props.from;
  let textOutPut = props.text;

  switch (comingFrom) {
    case "songData.Title":
      if (textOutPut.length > 20) {
        textLength = 25;
        return textOutPut.substring(0, textLength) + "...";
      }
      break;

    case "songData.Artist":
      textLength = 15;

      if (textOutPut.length > 10) {
        return textOutPut.substring(0, textLength) + "...";
      }
      break;

    case "musicData.Artist":
      textLength = 15;

      if (textOutPut.length > 10) {
        return textOutPut.substring(0, textLength) + "...";
      }
      break;

    case "musicData.Title":
      textLength = 25;

      if (textOutPut.length > 20) {
        return textOutPut.substring(0, textLength) + "...";
      }
      break;

    case "search.input":
      textLength = 25;

      if (textOutPut.length > 20) {
        return textOutPut.substring(0, textLength) + "...";
      }
      break;

    default:
      break;
  }

  return textOutPut;
}

export default LinesEllipsis;
