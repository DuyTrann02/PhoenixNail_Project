import { Box } from '@mui/material';
import TrainingBanner from './trainingBanner';
import AccordionNailTraining from './accordionNailTraining';
import TrainingBanner2 from './trainingBanner2';
import * as React from 'react';
import '../css/nailTrainingPage.css';
function NailTraining({index, setHeightPage}){

    const heightBox1 = React.useRef(null);

    React.useEffect(()=>{
        if(heightBox1.current){
            setHeightPage(heightBox1.current.clientHeight);
            console.log(heightBox1.current.clientHeight);
        }
        
    });
    return(
        
        <Box>
        {index===1&&
        
        <Box ref ={heightBox1} sx={{width:"95vw",background:"linear-gradient(180deg, #DAA0FD 0%, rgba(198, 143, 233, 0) 100%)",borderTopRightRadius:"5px", borderTopLeftRadius:"5px", marginX:"2vw",  position:"absolute", display:"flex",flexDirection:"column", alignItems:"center"}}>
            <Box sx={{border:"4px white double", width:"95%", borderRadius:"2%", marginTop:"3vh", padding:"5px"}}>
                 <p style={{fontWeight:"lighter", fontStyle:"italic", fontSize:"14px"}}>
                 Với sự hoàn thiện trong chất lượng dịch vụ, chúng tôi hiểu rằng trách nhiệm của chúng tôi là đem sự hoàn thiện đó đến với cộng đồng làm Nail. Và dịch vụ đào tạo nail chuyên nghiệp ra đời.
                 </p >
                 <p style={{fontWeight:"lighter", fontStyle:"italic", fontSize:"14px"}}>
                 Qua thời gian dài nghiên cứu, Phoenix nail luôn tự tin sự vượt trội về môi trường học tập, giáo án giảng dạy, phương tiện dạy học. Qua đó, đảm bảo lợi ích tuyệt đối của học viên học viện Phoenix nail.
                 </p>
                  
            </Box>

            <Box id='content1' sx={{ width:"95vw"}}>
            <Box id ='banner1' >
            <TrainingBanner/>
            <TrainingBanner2/>
            </Box>
            <AccordionNailTraining />
            </Box>
        </Box>
        }
        </Box>
        
        
    )
}
export default NailTraining;