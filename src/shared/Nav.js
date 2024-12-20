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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem"; // Added import
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./ContextSlice";
const pages = ["Home", "About", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openPage = (page) => {
    navigate(`/${page}`);
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => openPage(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Centered Navigation Links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => openPage(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Logout Button */}
          <Button
            color="inherit"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
            sx={{ fontWeight: "bold" }}
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
