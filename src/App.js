
import { Box } from '@mui/material';
import { createTheme} from '@mui/material/styles';

import Header from './components/header'
import Advertisementslide from './components/advertisementSlide';
import Switcher from './components/switcher';
import NailDesign from './components/nailDesign';
import NailTraining from './components/nailTraining'
import Contact from './components/contact'
import Contact2 from './components/contact2'
import Footer from './components/footer';

import './App.css';
import React from 'react';

const theme = createTheme();
theme.typography.body1 = {
  
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
};

//Background color radial-gradient(95.33% 38.45% at 95.33% 1.46%, #AC9BC2 0%, #633D93 58.97%, #4E1F8A 77.17%, #330967 100%)
function App() {
  const [status, setStatus] = React.useState(0);
  
  const spaceHeader = React.useRef(null);
  //get height of header callback

  const setSpaceHeader =(num)=>{
    
    spaceHeader.current.style.height = `${num}px`
  }
  
  //spaceHeader.current.style.height = `${heightValue}px`
  const handleOnClickChangeStatus = React.useCallback((index)=>{
    setStatus(index);
},[]);
   const page = React.useRef(null);
 
   //autosize function
   const handleChangeHeight =(height)=>{
       
        page.current.style.height =  window.innerHeight +  height*1.25 + 'px';
       
         
      }
       
        
   
   
  return (
    <Box >
    <Contact2/>
    <Contact/>
    <Box sx={{height:"2.5vh", width:"100%"}}></Box>
    <Box ref={page} sx={{background:"radial-gradient(95.33% 38.45% at 95.33% 1.46%, #AC9BC2 0%, #633D93 58.97%, #4E1F8A 77.17%, #330967 100%)",width:"100%", height:"auto"}}>
          
          <Header  setSpaceHeader = {setSpaceHeader}/>

          <Box ref = {spaceHeader} sx={{ width:"100%"}}></Box>


          <Box sx={{display:"flex",justifyContent:"center"}}>
              <img id="hoa-tiet-1" src ={"media/Asset 4.png"}  alt={"ko load dc"} />
          </Box>
          
          <Advertisementslide/>

          <Box sx={{display:"flex",justifyContent:"center"}}>
                <img id="hoa-tiet-2" src ={"media/Asset 3.png"}  alt="ko load dc" />
          </Box>
          

          <Box>
            <Switcher handleOnClickChangeStatus={handleOnClickChangeStatus} />
          </Box>

          <Box sx={{display:"flex", position:"relative"}}>
             <NailDesign index={status} setHeightPage={handleChangeHeight} />
             <NailTraining index={status} setHeightPage={handleChangeHeight}/>
          </Box>
    </Box>
    <Footer/>
    </Box>
    
  );
}


export default App;
