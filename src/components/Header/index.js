import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../../assets/images/logo.svg';
import { useDispatch } from 'react-redux';
import { UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

// const pages = ['Categories'];

export default function Header() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [category, setCategory] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCategory(event.target.value);
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: event.target.value,
    });
  };
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', mr: 1 }}>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="select-category">Category</InputLabel>
              <Select
                labelId="select-category"
                id="select-category"
                value={category}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">ALL</MenuItem>
                <MenuItem value="food">FOOD</MenuItem>
                <MenuItem value="furniture">FURNITURE</MenuItem>
                <MenuItem value="book">BOOK</MenuItem>
                <MenuItem value="clothes">CLOTHES</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="For Further Development">
              <IconButton
                // onClick={handleOpenUserMenu} 
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          </Box>
        </Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
          <FormControl fullWidth>
            <InputLabel id="select-category">Category</InputLabel>
            <Select
              labelId="select-category"
              id="select-category"
              value={category}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value="">ALL</MenuItem>
              <MenuItem value="food">FOOD</MenuItem>
              <MenuItem value="furniture">FURNITURE</MenuItem>
              <MenuItem value="book">BOOK</MenuItem>
              <MenuItem value="clothes">CLOTHES</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
    </AppBar>
  );
}