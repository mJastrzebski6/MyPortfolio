import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ScienceIcon from "@mui/icons-material/Science";
import "./Navbar.css";

const pages = ["about", "projects", "contact"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to={"/"} className="logoLink">
              <ScienceIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              HOME
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <CustomLink key={index} to={page}>
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    className="test2"
                  >
                    {page.toUpperCase()}
                  </MenuItem>
                </CustomLink>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link className="logoLink" to={"/"}>
              <ScienceIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              HOME
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <CustomLink key={index} to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#242424", display: "block" }}
                  className="test2"
                >
                  {page.toUpperCase()}
                </Button>
              </CustomLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

interface CustomLinkInterface {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkInterface) {
  return (
    <Link to={to} {...props} className="test">
      {children}
    </Link>
  );
}

export default Navbar;
