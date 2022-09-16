import React, { useState } from "react";
import { useTheme, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Contact from "./Contact";
import UserCards from "./UserCards";
import ProductList from "./ProductsList";

export default function Container() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Navbar value={value} handleChange={handleChange} />
      <div style={{ marginTop: 60 }}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <UserCards />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ProductList />
        </TabPanel>
      </div>
      <Contact />
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
