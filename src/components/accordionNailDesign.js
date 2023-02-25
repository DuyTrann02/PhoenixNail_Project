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
import Price from './accordionPrice';



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

  const [expanded, setExpanded] = React.useState('panel1');
  const [price, setPrice]=React.useState('');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    
  };
  const handleChange2 = (key)=>{
    if(key==="price1"){
      setPrice("panel21")

    }else if(key==="price2"){
      setPrice("panel22")
    }else{
      setPrice("panel20")
    }
  }
  
 
  
  return (
    <Box sx={{width:"90.25vw" }} id="box" >
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{borderTopLeftRadius:"10px", borderTopRightRadius:"10px"}} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Chất lượng dịch vụ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx = {{height:'57.5vh', overflowY:'scroll'}}>
              <Typography sx={{fontWeight:"bold", color:"#800080"}}>I. Sự hài hòa tuyệt đối giữ con mắt nghệ thuật và cá tính khách hàng.</Typography>
              <p>Đến với Phoenix nail, khái niệm nghệ thuật không còn quá trìu tượng khi chúng tôi sẽ hiện hữu nó trên đầu ngón tay của bạn. Từ cơ sở lý thuyết nail cơ bản như phối màu, bố cục, tạo hình, chúng tôi thổi hồn thêm chất liệu sáng tạo cùng tư duy đột phá để mang tới một trải nghiệm tuyệt vời về thị giác.</p>
              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/Design1.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một mẫu nổi bật trong bộ sưu tập Thạch Hậu mùa xuân 2022. Tỉ mỉ, chú trọng cẩn thận dù chỉ là những chi tiết nhỏ nhất.</p></Box>
              </Box>
              
              <p>Nghệ thuật quan trọng, nhưng với chúng tôi, nhu cầu và cá tính khách hàng mới là kim chỉ nam cho từng sản phẩm dịch vụ. Không gò bó, ko tiêu chuẩn, luôn sẵn sàng tôn trọng và "flex" theo mọi sở thích, cá tính của từng khách hàng nhưng vẫn giữ "nghệ thuật" trong đó.</p>
              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/Design2.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một mẫu móng đậm chất cá nhân của một khách hàng cá tính.</p></Box>
              </Box>
              <Typography sx={{fontWeight:"bold", color:"#800080"}}>II. Công nghệ đi đầu, vật liệu tạo tác chất lượng.</Typography>
              <p>Luôn đi cùng tôn chỉ "uy tín đi cùng chất lượng", Phoenix nail luôn chuẩn bị mọi công nghệ cũng như vật liệu tạo tác để tối ưu nhất chất lượng dịch vụ. Mọi vật liệu được thực hiện trên móng của bạn đều được kiểm định rõ nguồn hàng, do đó, quý khách hàng yên tâm 100% về chất lượng móng cũng như an toàn sức khỏe. Bên cạnh đó, để đảm bảo tuyệt đối quyền lợi khách hàng, chúng tôi còn có chính sách bảo hành dịch vụ khác nhau đối với từng loại dịch vụ.</p>
              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/May say Uv.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Mẫu máy sấy UV hiện tại được Phoenix-nail tin dùng - Một trong những mẫu máy sấy mới nhất trên thị trường hiện tại.</p></Box>
              </Box>
              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/Design4.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Một góc nhỏ trong kho nguyên liệu tạo tác của Phoenix-nail.</p></Box>
              </Box>
              <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/room.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Phoenix-nail còn vô cùng chú trọng trải nghiệm khách hàng tại cửa hàng. Khu Nailing đầy tiện nghi và thoải mái.</p></Box>
              </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Bảng giá dịch vụ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Phoenix Nails luôn đảm bảo giá dịch vụ cạnh tranh và đi kèm chất lượng phục vụ. Dưới đây là bảng giá dịch vụ chi tiết.
          </Typography>
          <Price setHeightPriceChange={handleChange2}/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Thành tựu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{overflowY:'scroll',height:'58vh'}}>
          <Typography sx={{fontWeight:"bold", color:"#800080"}}>I. Hoàn thành nhiều khóa học lớn trong nước và ngoài nước.</Typography>
          <p>Với tinh thần, học hỏi để hoàn thiện hơn, từ thời điểm thành lập, Phoenix nail không ngừng trao đổi, tiếp thu thêm nhiều kiến thức và kỹ năng từ nhiều học viện lớn nhỏ cả trong nước và ngoài nước. Thời điểm hiện tại, dù gặt hái nhiều thành công, Phoenix vẫn luôn giữ tinh thần khiêm tốn để hoàn thiện hơn bởi sau cùng thì sự hoàn thiện chất lượng của phoenix nail là sự hài lòng của khách hàng.</p>
          <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/certificate.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Xyz certificate 2019</p></Box>
              </Box>
          <Typography sx={{fontWeight:"bold", color:"#800080"}}>II. Giám khảo nhiều cuộc thi móng nghệ thuật trong nước.</Typography>
          <p>"Sức mạnh càng lớn, nghĩa vụ càng cao", vì vậy, Phoenix nail đảm nhiệm lời mời giám khảo của nhiều cuộc thi Nail trong nước, để đóng góp kiến thức của bản thân cho cộng đồng Nail Việt Nam phát triển.</p>
          <Box sx={{height:"70vh", overflow:"hidden", marginTop:"2vh"}}>
                   <img style={{objectFit:"cover", width:"100%", height:"60vh", borderRadius:"10px"}} src ={"media/GiamKhao.jpg"}  className='image1' alt='chua load dc'/>
                   <Box sx={{textAlign:"center"}}><p style={{fontSize:"12px", fontStyle:"italic", fontWeight:"bold"}}>Phoenix-nail đảm nhận trọng trách đại diện cho thế hệ Nailing đi đầu để làm giám khảo tại sự kiện Xyz</p></Box>
              </Box>
          <Typography sx={{fontWeight:"bold", color:"#800080"}}>III. Chương trình đào tạo chuyên nghiệp và bài bản.</Typography>
          <p>Không chỉ dừng lại làm giám khảo, Phoenix nail đã thiết kế và tổ chức khóa học nail với trọng trách ươm mầm những tài năng tương lai trong nghề Nail. Qua hơn 5 năm thực hiện, học viện nhận được sự ủng hộ của hàng trăm học viên trong nước và ngoài nước.Để có cái nhìn chi tiết hơn, mời bạn tham khảo qua phần "Đào tạo".</p>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{fontWeight:"bold", fontStyle:"italic"}}>Liên hệ - đặt lịch dịch vụ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Booking/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
