import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed
} from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Post" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Tendencias para ti</h2>
        <div className="widgets__timeline">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="AWSLatam"
            options={{ height: 550 }}
            theme="dark"
          />
        </div>
        {/* <div className="widgets__timeline">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="CNCFStudents"
            options={{ height: 500 }}
            theme="dark"
          />
        </div> */}
        {/* <div className="widgets__embed">
          <TwitterTweetEmbed tweetId={"1443342195847741444"} />
        </div> */}
      </div>

      <div className="widgets__widgetCopyright">
        <p>Universidad de San Carlos de Guatemala</p>
        <p>Seminario de Sistemas 1&nbsp; · &nbsp;Grupo 10</p>
        <p>&copy; Proyecto 2022&nbsp; · &nbsp;Primer Semestre</p>
      </div>
    </div>
  );
}

export default Widgets;