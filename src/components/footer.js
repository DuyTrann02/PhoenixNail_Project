import { Box, Typography } from '@mui/material';


function Footer(){
    return(
      <Box id="footer" sx={{width:"100%",height:"14vh", background:"black", padding:"7px"}}> 
        <Box>
        <Typography sx={{ fontSize:"55%",color:"white",textAlign:'center'}}>
          All copyrights belong to Phoenix nail corporate communications.
        Responsible for the website - Vũ Đình Duy - 0338720362.
        </Typography>
        </Box>
        <Box>
        <Typography sx={{ fontSize:"55%",color:"white",textAlign:'center'}}>
          2023 version - last updated: 2023 - 02 - 01
        </Typography>
        </Box>
        
      </Box>
    )
}
export default Footer; 