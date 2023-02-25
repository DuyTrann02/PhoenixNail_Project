import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import FacebookIcon from '@mui/icons-material/Facebook';

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <a href="https://www.facebook.com/nhuquynhfb" style={{textDecoration:"none"}}>
          <ListItem disablePadding>
            <ListItemButton>
            
              <ListItemIcon>
                <FacebookIcon/>
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItemButton>
          </ListItem>
          </a>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SmartphoneIcon/>
              </ListItemIcon>
              <ListItemText primary="Số điện thoại: 03382720362" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      
      
    </Box>
  );
}
