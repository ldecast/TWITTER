import React, { useState } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Person from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Button } from "@material-ui/core";

function Sidebar(props) {

  const [class_name, setState] = useState({
    root: "root__sidebar",
    side: "sidebar",
    dehaze: "dehaze"
  });

  function SetVisible() {
    let root = (class_name.root === 'root__sidebar' ? 'root__hidden' : 'root__sidebar');
    let side = (class_name.side === 'sidebar' ? 'sidebar__hidden' : 'sidebar');
    let dehaze = (class_name.dehaze === 'dehaze' ? 'dehaze__hidden' : 'dehaze');
    let tmp = {
      root: root,
      side: side,
      dehaze: dehaze
    };
    setState(tmp);
  }

  return (
    <div className={class_name.root}>
      <div className={class_name.dehaze} onClick={SetVisible}>
        <DehazeIcon />
      </div >
      <div className={class_name.side}>
        <SidebarOption Icon={HomeIcon} text="Home" url={"#"} />
        <SidebarOption Icon={Person} text="Profile" url={"#"} />
        <SidebarOption Icon={SearchIcon} text="Explore" url="https://twitter.com/explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Postear
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;