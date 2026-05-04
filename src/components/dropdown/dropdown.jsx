import { useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dropdown = ({ label, options = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* BUTTON STYLE */}
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          background: "linear-gradient(135deg, #7B6CF6, #6A5AE0)",
          color: "#fff",
          borderRadius: "10px",
          px: 2,
          py: 1.5,
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          "&:hover": {
            background: "linear-gradient(135deg, #6A5AE0, #5B4BD1)",
          },
        }}
      >
        {label}
      </Button>

      {/* DROPDOWN MENU */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Dropdown;