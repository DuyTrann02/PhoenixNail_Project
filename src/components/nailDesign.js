import { Box } from '@mui/material';
import NailAdvertisement from './nailAdvertisment';
import AccordionNailDesign from './accordionNailDesign';
import AdvertisementNail2 from './advertisementNail2';
import '../css/nailDesignPage.css';

import * as React from 'react';



function NailDesign({index, setHeightPage}){
    const heightBox = React.useRef(null);
    

    React.useEffect(()=>{
        if(heightBox.current){
            setHeightPage(heightBox.current.clientHeight);
        }
        
        
    });
    
    return(
        <Box >
        {index===0&&
        
        <Box ref={heightBox} sx={{width:"95vw",height:"100vh",background:"linear-gradient(180deg, #DAA0FD 0%, rgba(198, 143, 233, 0) 100%)",borderTopRightRadius:"5px", borderTopLeftRadius:"5px", marginX:"2vw",  position:"absolute", display:"flex",flexDirection:"column", alignItems:"center"}}>
            <Box sx={{border:"4px white double", width:"95%", borderRadius:"2%", marginTop:"3vh", padding:"5px"}}>
                 <p style={{fontWeight:"lighter", fontStyle:"italic", fontSize:"14px"}}>
                 "Nghệ thuật không kén bất cứ một ai, không kén bất cứ một hình thức thể hiện nào, cho dù là trên đầu ngón tay của bạn."
                 </p >
                 <p style={{fontWeight:"lighter", fontStyle:"italic", fontSize:"14px"}}>
                 Với hơn 5 năm kinh nghiệm trong phục vụ dịch vụ chăm sóc và thiết kế móng, chúng tôi hiểu rằng "uy tín tới từ sự hài lòng của khách hàng".
                  Phoenix nail đem đến trải nghiệm khác biệt với chất liệu tạo tác cũng như công nghệ mới để đảm bảo chất lượng từng đầu ngón tay của bạn.
                 </p>
                  
            </Box>


            <Box id='content' sx={{ width:"95vw"}}>

            <Box id ='banner' >
            <NailAdvertisement/>
            <AdvertisementNail2/>
            </Box>
            
            <AccordionNailDesign />
            
            </Box>
            </Box>
        }
        </Box>
    )
}
export default NailDesign;