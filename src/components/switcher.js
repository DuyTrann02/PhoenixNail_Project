import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import React from 'react';

import '../css/switcher.css'


function Switcher({handleOnClickChangeStatus}){
    
    const [status, setStatus] = React.useState(false);
    const handleOnclickChangeNailDesignView = (e)=>{
          setStatus(false);
          handleOnClickChangeStatus(0);
    }
    const handleOnclickChangeTrainingCourseView = (e)=>{
          setStatus(true);
          handleOnClickChangeStatus(1);
    }


    return(
      <Box sx={{display:"flex",justifyContent:"center",marginBottom:"-1px"}}>
        {status===false &&
          <>
          <Box sx={{display:"flex",justifyContent:"center", background:"#D69DF9"}} className ="switcher"  onClick ={handleOnclickChangeNailDesignView}> <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Dịch vu</Typography></Box>
          <Box sx={{display:"flex",justifyContent:"center", background:"#593686"}} className ="switcher"  onClick ={handleOnclickChangeTrainingCourseView}><Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Đào tạo</Typography></Box>
          </>
        }
        {
        status===true &&
          <>
          <Box sx={{display:"flex",justifyContent:"center", background:"#593686"}} className ="switcher"  onClick={handleOnclickChangeNailDesignView}> <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Dịch vụ</Typography></Box>
          <Box sx={{display:"flex",justifyContent:"center", background:"#D69DF9"}} className ="switcher"  onClick={handleOnclickChangeTrainingCourseView}><Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Đào tạo</Typography></Box>
          </>
        }

      </Box>
    )
}
export default Switcher;