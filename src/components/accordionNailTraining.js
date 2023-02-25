import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import '../css/accordionNailDesign.css'

import Booking from './bookingDesign';


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

export default function CustomizedAccordions({setHeightPage}) {
  const [expanded, setExpanded] = React.useState('training1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  
  
   
  return (
    <Box sx={{width:"95%", marginTop:"3vh"}} id="box" >
      <Accordion expanded={expanded === 'training1'} onChange={handleChange('training1')} sx={{borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Quyền lợi học viên</Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{height:'65vh', overflowY:'scroll'}}>
        <Typography sx={{fontWeight:"bold", color:"#800080"}}>I. Tiếp cận giáo trình giảng dạy hiện đại hàng đầu, chuẩn đầu ra quốc tế.</Typography>
        <p>Qua hơn 5 năm trên chặng đường giảng dạy, nghiên cứu, hoàn thiện, học hỏi, Phoenix-nail tự tin đảm bảo lộ trình để học viên hoàn thiện 100% kỹ năng cơ bản đến cận nâng cao. 
        Với khóa học của Phoenix-nail, học viên sẽ được rèn rũa những kỹ năng:</p>
      <p style={{marginLeft:"5vw"}}>+ Đắp bột</p>
      <p style={{marginLeft:"5vw"}}>+ Tạo form</p>
      <p style={{marginLeft:"5vw"}}>+ Lên màu và phối màu</p>
      <p style={{marginLeft:"5vw"}}>+ Giả vân đá</p>
      <p style={{marginLeft:"5vw"}}>+ ...</p>

      <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/mauNoiBat.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một mẫu thực hành học sinh nổi bật trong khóa học mùa xuân năm 2022.</p></Box>
              </Box>

      <Typography sx={{fontWeight:"bold", color:"#800080"}}>II. Có quyền tiếp cận và sử dụng những nguyên liệu tạo tác chuẩn và chất lượng.</Typography>
      <p>Chúng tôi không chỉ sẵn sàng chia sẻ kiến thức, đến với Phoenix nail, học viên có thể tiếp cận toàn bộ kho nguyên liệu khổng lồ của học viện để có cái nhìn ban đầu đúng đắn, tiêu chuẩn về quy trình làm nail.</p>

      <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/NguyenLieu.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một góc nhìn tổng quan về kho nguyên liệu tạo tác của học viện.</p></Box>
              </Box>

      <p>Ngòai ra, chương trình học cũng cung cấp cho học viên những trang thiết bị cần thiết, phù hợp cho từng bài học cụ thể.</p>

      <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/hocvien.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Học viên và bài thực hành thực tế trên nguyên liệu tạo tác do học viện cung cấp.</p></Box>
              </Box>
        
              <Typography sx={{fontWeight:"bold", color:"#800080"}}>III. Tiếp xúc với môi trường giảng dạy hiện đại, văn minh, thân thiện.</Typography>
              <p>Chúng tôi luôn quan niệm rằng, môi trường giảng dạy tốt đem đến nguồn cảm hứng cũng như tinh thần tiếp thu tốt. Phoenix nail trang bị đầy đủ trang thị cho phòng học: đèn, bàn, điều hòa, quạt,.. Đều được chúng tôi lựa chọn phù hợp với nhu cầu học viên cũng như đảm bảo không gian học lý tưởng nhất.</p>

              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/room.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một góc nhìn về phòng học học viện Phoenix nail.</p></Box>
              </Box>

              <Typography sx={{fontWeight:"bold", color:"#800080"}}>IV. Hoàn toàn linh hoạt thời gian giảng dạy, giãn cách khóa học phù hợp với nhu cầu học viên(thỏa thuận trước).</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'training2'} onChange={handleChange('training2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Thông tin khóa học</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography sx={{fontWeight:"bold", color:"#800080"}}>I. Thời gian khóa học. </Typography>
        <p>Thời gian học tiêu chuẩn của Phoenix-nail là 4-5 tuần học. ( có thể chọn nghỉ Chủ Nhật hoặc lên lớp ngày này để bổ túc thêm thực hành).</p>
        <Typography sx={{fontWeight:"bold", color:"#800080"}}>II. Học phí: (cập nhập 01/10/2022). </Typography>
        <p>Với chính sách mùa mới, hành trình mới. Phoenix-nail đang ưu đãi 30% giá khóa học tiêu chuẩn. </p>
        <p> - Viết bằng số: 7 000 000 VND</p>
        <p> - Viết bằng chữ: Bảy triệu việt nam đồng.</p>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'training3'} onChange={handleChange('training3')} sx={{borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Đăng kí khóa học</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Booking/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
