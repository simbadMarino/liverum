var React = require("react");
var ReactDOM = require("react-dom");
var Coverflow = require("react-coverflow");

export default function Covers() {
  return (
    (
      <Coverflow
        width={960}
        height={480}
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
      >
        <div
          //onClick={() => fn()}
          //onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src="[../Library/liverum_covers/montecristo_cover.jpg]"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <img
          src="[../Library/liverum_covers/montecristo_cover.jpg]"
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="[../Library/liverum_covers/montecristo_cover.jpg]"
          alt="title or description"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
      </Coverflow>
    ),
    document.querySelector(".content")
  );
}
