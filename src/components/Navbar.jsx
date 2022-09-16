import React from "react";
import { AppBar, Tabs, Tab, useMediaQuery } from "@mui/material";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

export default function Navbar(props) {
  const isMobile = useMediaQuery("(max-width:600px)");
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
    };
  }

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#F04E23", display: "-webkit-inline-box" }}
    >
      <div
        style={{
          margin: "auto 20px",
          padding: 5,
          border: "1px solid white",
          borderRadius: "30%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PrecisionManufacturingIcon fontSize="small" />
        {!isMobile && <span>myProduct</span>}
      </div>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        indicatorColor={"#F04E23"}
        textColor="inherit"
        variant="fullWidth"
        allowScrollButtonsMobile
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Products" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
  );
}
