import * as React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { theme } from '../../constants';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


const drawerWidth = 240;

const navItems = [
  { screen: 'Home', to: '/' },
  { screen: 'Ticket', to: '/ticket' },
  { screen: 'Favorite Ticket', to: '/favoriteTicket' },
  { screen: 'About Us', to: '/aboutUs' },
];

const Menu = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', paddingX: 2 }}>
                <ListItemText primary={item.screen} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Link to={'/login'} style={{ textDecoration: 'none' }}>
        <Button sx={{ width: '100%', mt: 2 }}>Login</Button>
      </Link>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" style={{ paddingInline: '50px' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              LOGO
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 0.1 }}>
              {navItems.map((item) => (
                <Button key={item.to} sx={{ color: '#fff', px: 2 }}>
                  <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {item.screen}
                  </Link>
                </Button>
              ))}
            </Box>
            <Button sx={{ color: '#fff', ml: 2 }}>
              <Link to={'/login'} style={{ textDecoration: 'none', color: 'inherit' }}>
                Login
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </ThemeProvider>
  );
}

Menu.propTypes = {
  window: PropTypes.func,
};

export default Menu;