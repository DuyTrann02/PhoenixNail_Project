
import Box from '@mui/material/Box'; 
import '../css/logo.css';


import * as React from 'react';
function Header({setSpaceHeader} ){
    const headerH = React.useRef(null);
    
    React.useEffect(()=>{
        if(headerH.current){
            const handleResize = ()=>{ 
                setSpaceHeader(headerH.current.clientHeight+30);
            }
            window.addEventListener('resize',handleResize);
        }
        
        
        if(window.innerWidth>800){
            setSpaceHeader(200);
        }else if(window.innerWidth<=799){
            setSpaceHeader(100);
        }
        
        
       
        
    },[]);   

    
    
   
    return(
        <Box  ref = {headerH} id = "header" sx={{width:"100%", display:"flex",alignItems:"center",justifyContent:"space-between", overflow:"hidden"}}>
            
                <img src = "media/logo.png" id = "logo" alt='chua load dc'/>
                
                <Box id="sloganContainer">
                <img src ="media/logo2.png" id = "slogan" alt='chua load dc'/>
                </Box>
                
           
        </Box>
        
    )
}
export default Header;