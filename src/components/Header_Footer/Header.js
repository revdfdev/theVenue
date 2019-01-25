import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "../SideDrawer/SideDrawer";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, showHeader] = useState(false);

  const toggleDrawer = value => {
    setDrawerOpen(value);
  };

  const userScroll = () => {
    if (window.scrollY > 0) {
      showHeader(true);
    } else {
      showHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", userScroll);

    return () => {
      window.removeEventListener("scroll", userScroll);
    };
  });

  return (
    <div>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical events</div>
          </div>

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={drawerOpen}
            onClose={value => toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
