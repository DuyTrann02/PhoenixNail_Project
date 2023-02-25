import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import '../css/nailBanner.css'
import { Typography } from '@mui/material';

function AdvertisementSlider(){
  
  

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

    const advertisementList = [
      'media/Blood1.jpg',
      "media/Blood2.jpg",
      "media/Blood3.jpg",
      "media/Blood4.jpg"
    ]
   
    const slideContainer = React.useRef(null);
    const currentRadio = React.useRef([]);
    
    let index=0;
    const handleDirectionChange = (event) => {
      index = event.target.value;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    };

    function next(){
      if(index<advertisementList.length-1){
        index++;
      }else{
        index=0;
      }
      currentRadio.current[index].checked=true;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    }

    function prev(){
      if(index===0){
        index= advertisementList.length-1
      }else{
        index--;
      }
      currentRadio.current[index].checked=true;
      slideContainer.current.style.transform = `translateX(-${slideContainer.current.clientWidth*index}px)`;
    }

   
  const autoSilder = React.useEffect(()=>{

    const autoNextSlide = setInterval(()=>{
      next();
      currentRadio.current[index].checked=true;
      
  },3000);
  return ()=>{
        clearInterval(autoNextSlide);
  }
  },[]);

    
    
    return(
       <Box id ="box1" sx={{display:"flex", width:"95vw", marginLeft:"4.5vw"}}>
        <Box sx={{position:"absolute",zIndex:"6"}}><Typography sx={{fontWeight:"bold", marginLeft:"2vw", backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>Bộ sưu tập "Hoa hồng, máu và em" - mùa thu 2022</Typography></Box>
         <Box className='buttonBox1'>
          <ThemeProvider theme={theme}>
          <Button color="primary" className='control1' id='prev1' onClick={prev}><ArrowBackIosNewIcon sx={{color:"black"}}/></Button>
          </ThemeProvider>
         
         <Box sx={{display:"flex", alignItems:"flex-end"}}>
        
          {
            advertisementList.map((image,indexList)=>(
              <input key={indexList} onClick={handleDirectionChange} value={indexList} type="radio" name ="radioGroup1" ref={st=>currentRadio.current[indexList]=st} style={{margin:"2vh", accentColor:"#404040"}} />
              )
            )
          }
        
         </Box>
         <ThemeProvider theme={theme}>
         <Button color="primary" className='control1' id='next' onClick={next}><ArrowForwardIosIcon sx={{color:"black"}}/></Button>
         </ThemeProvider>
         
         </Box>

         <Box className ='slide-container1'>
           <Box id='slides1'  ref={slideContainer}>
             {
               advertisementList.map((image,index)=>(
                 <div key ={index}>
                    <img src ={image}  alt="" className='slide1' />
                 </div>
               ))

             }
           </Box>
         </Box>  
       </Box>
    )
}
export default AdvertisementSlider;