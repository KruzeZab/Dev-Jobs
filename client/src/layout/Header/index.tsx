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
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import {
  Menu as MenuIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  HelpOutline as HelpOutlineIcon,
} from "@mui/icons-material";

import { useContext, useMemo, useState } from "react";
import { NAV_ITEMS } from "../../data";
import { ColorModeContext } from "../../theme/ColorModeContext";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

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
          {isMediumScreen ? <DesktopNav /> : <MobileNav />}
          <NavRightMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

function DesktopNav() {
  return (
    <>
      {/* Logo */}
      <Typography
        variant="h6"
        noWrap
        component={RouterLink}
        to="/"
        replace
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
        {NAV_ITEMS.map((item) => (
          <MuiLink
            component={RouterLink}
            to={item.pathname}
            replace
            key={item.pathname}
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
            {item.label}
          </MuiLink>
        ))}
      </Box>
    </>
  );
}

function NavRightMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const colorMode = useContext(ColorModeContext);

  const theme = useTheme();

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
      <Box>
        <Tooltip title="Toggle theme">
          <IconButton
            onClick={colorMode.toggleColorMode}
            aria-label="toggle theme"
            sx={{
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      <Box pr={1}>
        <Tooltip title="Help and support">
          <IconButton
            component={RouterLink}
            to="guide/"
            replace
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
      </Box>
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
          id="devjobs-navbar"
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

function MobileNav() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        alignItems: "center",
      }}
    >
      <>
        <MobileNavMenu /> {/* Menu Icon button and drawer */}
        <Typography
          variant="h6"
          noWrap
          component={RouterLink}
          to="/"
          replace
          sx={{
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
      </>
    </Box>
  );
}

function MobileNavMenu() {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMenuActive(open);
    };

  const renderList = useMemo(() => {
    return (
      <Box
        sx={{
          width: 250,
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.pathname} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }, [toggleDrawer]);

  return (
    <>
      <IconButton
        size="large"
        sx={{ mr: 1 }}
        aria-label="open navigation menu"
        aria-controls="devjobs-navbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={menuActive}
        onClose={toggleDrawer(false)}
        aria-describedby="devjobs-navbar"
      >
        <Box mt={2} ml={2} mb={1.5}>
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            replace
            sx={{
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
        </Box>
        {renderList}
      </Drawer>
    </>
  );
}

export default Header;
