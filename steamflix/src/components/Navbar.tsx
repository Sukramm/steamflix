import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

const user = { username: "Veemus", profilePic: "", money: 500 };
const pages = [
  {
    //STORE
    pagename: "Store",
    pagelink: "",
    subpages: [
      { pagename: "Store", pagelink: "" },
      { pagename: "Featured", pagelink: "" },
      { pagename: "Wishlist", pagelink: "" },
      { pagename: "Stats", pagelink: "" },
    ],
  },
  {
    //LIBRARY
    pagename: "Library",
    pagelink: "/library",
    subpages: [
      { pagename: "Library", pagelink: "" },
      { pagename: "Collections", pagelink: "" },
    ],
  },
  {
    //COMMUNITY
    pagename: "Community",
    pagelink: "",
    subpages: [
      { pagename: "Home", pagelink: "" },
      { pagename: "Announcments", pagelink: "" },
      { pagename: "Discussions", pagelink: "" },
      { pagename: "News", pagelink: "" },
    ],
  },
  {
    //USER
    pagename: user.username,
    pagelink: "",
    subpages: [
      { pagename: "Account", pagelink: "" },
      { pagename: "Library", pagelink: "" },
      { pagename: "Community", pagelink: "" },
      { pagename: user.username, pagelink: "" },
    ],
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="header" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="logo hover-text"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          >
            <Link to={"/"}>STEAMFLIX</Link>
          </Typography>
          <Typography
            className="logo hover-effect"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
          ></Typography>
          <Box
            className="leftMenu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <>
                <Button
                  key={page.pagename}
                  onClick={handleOpenNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to={page.pagelink}>{page.pagename}</Link>
                </Button>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseNavMenu}
                >
                  {page.subpages.map((subpage) => (
                    <MenuItem
                      key={subpage.pagename}
                      onClick={handleCloseUserMenu}
                    >
                      <Typography textAlign="center">
                        {subpage.pagename}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ))}
          </Box>

          <Box className="rightMenu" sx={{ flexGrow: 0 }}>
            <NotificationsIcon></NotificationsIcon>
            <Box className="user">
              <IconButton onMouseOver={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.username} src={user.profilePic} />
              </IconButton>
              <Box className="username">{user.username}</Box>
              <Box className="money">{user.money}€</Box>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages[3].subpages.map((subpage) => (
                <MenuItem key={subpage.pagename} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{subpage.pagename}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
