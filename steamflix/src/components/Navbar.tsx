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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";

const user = { username: "Veemus", profilePic: "" };
const pages = [
  { pagename: "Store", pagelink: "" },
  { pagename: "Library", pagelink: "" },
  { pagename: "Community", pagelink: "" },
  { pagename: user.username, pagelink: "" },
];
const storeSubpages = [
  { pagename: "Account", pagelink: "" },
  { pagename: "Library", pagelink: "" },
  { pagename: "Community", pagelink: "" },
  { pagename: user.username, pagelink: "" },
];
const librarySubpages = [
  { pagename: "Account", pagelink: "" },
  { pagename: "Library", pagelink: "" },
  { pagename: "Community", pagelink: "" },
  { pagename: user.username, pagelink: "" },
];
const communitySubpages = [
  { pagename: "Account", pagelink: "" },
  { pagename: "Library", pagelink: "" },
  { pagename: "Community", pagelink: "" },
  { pagename: user.username, pagelink: "" },
];
const userSubpages = [
  { pagename: "Account", pagelink: "" },
  { pagename: "Library", pagelink: "" },
  { pagename: "Community", pagelink: "" },
  { pagename: user.username, pagelink: "" },
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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            STEAMFLIX
          </Typography>
          <Box
            className="leftMenu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.pagename}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.pagename}
              </Button>
            ))}
          </Box>

          <Box className="rightMenu" sx={{ flexGrow: 0 }}>
            <NotificationsIcon></NotificationsIcon>
            <Tooltip title="Open settings">
              <Box className="user">
                <IconButton onMouseOver={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.username} src={user.profilePic} />
                </IconButton>
                <Box className="username">{user.username}</Box>
              </Box>
            </Tooltip>
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
              {userSubpages.map((subpage) => (
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
