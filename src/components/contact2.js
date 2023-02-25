import { Box } from '@mui/material';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import '../css/contact2.css'

const settings = ['Facebook', 'Sđt: 0338720362'];
function Contact2(){
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

 

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return(
        
        
        <Box id ="container" sx={{position:"fixed", borderRadius:"50%", width:"55px", height:"55px", background:"white", marginTop:"70vh", marginLeft:"80vw", zIndex:"7", border:"2px black solid", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , zIndex:"8"}}>
              <CallRoundedIcon/>
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
              
              <a href="https://www.facebook.com/nhuquynhfb" style={{textDecoration:"none"}}>
                <MenuItem  onClick={handleCloseUserMenu} > 
                    <Typography textAlign="center" sx={{fontWeight:"bold", fontStyle:"italic"}}>{settings[0]}</Typography>
                </MenuItem>
              </a>
                <MenuItem  onClick={handleCloseUserMenu} > 
                    <Typography textAlign="center" sx={{fontWeight:"bold", fontStyle:"italic"}}>{settings[1]}</Typography>
                </MenuItem>
              
            </Menu>
        </Box>
        
        
    )
}
export default Contact2;