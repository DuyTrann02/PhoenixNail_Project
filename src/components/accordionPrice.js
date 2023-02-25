import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import Menu2 from './menu2';
import Menu from './menu';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({setHeightPriceChange}) {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  React.useEffect(()=>{
    setHeightPriceChange(expanded);},[expanded])
    
  return (
    <Box sx={{width:"95%", marginTop:"3vh"}} >
      <Accordion expanded={expanded === 'price1'} onChange={handleChange('price1')} sx={{borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography sx={{fontWeight:"bold", fontStyle:"italic",color:"#800080"}}>Chăm sóc móng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Menu/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'price2'} onChange={handleChange('price2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic",color:"#800080"}}>Nối móng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Menu2/>
        </AccordionDetails>
      </Accordion>
      
      
    </Box>
  );
}
