import { FC } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="header__toolbar">
        <NavLink className="header__link" to="/login">
          Login
        </NavLink>
        <NavLink className="header__link" to="/">
          General
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
