import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

const settings = [{
  name: 'Profile',
  url: '/profile',
},
{
  name: 'Workspace',
  url: '/workspace/settings',
},
{
  name: 'Logout',
  url: '/',
},
];

const AppBar = ({ user }) => {
  const [initials, setInitials] = useState();
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    // setInitials(user?.firstName.charAt(0).toUpperCase() + user?.lastName.charAt(0).toUpperCase());
    setInitials('HI');
  }, [user]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mt={2}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar>{initials}</Avatar>
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">
                <Link href={setting.url} underline="none">{setting.name}</Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Container>
  );
};
export default AppBar;
