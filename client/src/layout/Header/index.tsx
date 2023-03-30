import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  Menu as MenuIcon,
  DarkMode as DarkModeIcon,
  // LightMode as LightModeIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

import { useState } from "react";
// import { NAV_ITEMS } from '../../data';

const pages = ["Products", "Pricing", "Blog", "Contact", "Results"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid rgb(231, 235, 240)",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopBranding />
          <MobileBranding />
          <NavRightMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function DesktopBranding() {
  return (
    <>
      {/* Logo */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          color: "primary.main",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        DeveloperJobs
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <MuiLink
            href="/"
            key={page}
            sx={{
              my: 2,
              transition: "color .2s ease-in-out",
              display: "block",
              textDecoration: "none",
              px: 2,
              color: "text.primary",

              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {page}
          </MuiLink>
        ))}
      </Box>
    </>
  );
}

function NavRightMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Tooltip title="Toggle theme">
        <IconButton
          aria-label="toggle theme"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <DarkModeIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Help and support">
        <IconButton
          aria-label="help and support"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
      <Box>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/80"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
        {/* Menu dropdown for user profile */}
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
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
}

function MobileBranding() {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          color: "primary.main",
          fontFamily: "monospace",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        DevJobs
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
          {/* Todo: Render sidebar for nav here */}
        </IconButton>
      </Box>
    </>
  );
}

export default Header;
