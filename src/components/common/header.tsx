import { FC } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">General</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
