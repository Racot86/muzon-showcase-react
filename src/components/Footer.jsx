import {Box, Button, IconButton, Stack, Typography} from "@mui/material";
import logo from "../assets/logo@0.5x.png";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import DeleteIcon from '@mui/icons-material/Delete';

const Footer = ({colors}) => {
 return (
     <>
         <Box sx={{ display: 'flex',
             alignItems: 'center',
             justifyContent: 'space-between',
             background:'black',
             padding:'24px'
         }}>
             <img src={logo} width='200px' alt="logo" />
             <Box display='flex' flexDirection='column' alignItems='start'>
                 <Button sx={{color:colors.panel}} >User profile</Button>
                 <Button sx={{color:colors.panel}} >My lessons</Button>
                 <Button sx={{color:colors.panel}} >Education</Button>
                 <Button sx={{color:colors.panel}} >My teachers</Button>
             </Box>
             <Box display='flex' flexDirection='column' alignItems='start'>
                 <Button sx={{color:colors.panel}} >About school</Button>
                 <Button sx={{color:colors.panel}} >Help</Button>
                 <Button sx={{color:colors.panel}} >Contacts</Button>
                 <Button sx={{color:colors.panel}} >Currency</Button>
             </Box>
             <Box display='flex' flexDirection='column' sx={{height:'140px'}} alignItems='center'>
                 <Box>
                     <IconButton sx={{color:'orange'}} aria-label="delete" size="medium">
                         <PhoneAndroidIcon fontSize="inherit" />
                     </IconButton>
                     <IconButton sx={{color:'orange'}} aria-label="delete" size="medium">
                         <TelegramIcon fontSize="inherit" />
                     </IconButton>
                     <IconButton sx={{color:'orange'}} aria-label="delete" size="medium">
                         <InstagramIcon fontSize="inherit" />
                     </IconButton>
                     <IconButton sx={{color:'orange'}} aria-label="delete" size="medium">
                         <FacebookIcon fontSize="inherit" />
                     </IconButton>
                 </Box>
                 <Typography sx={{color:colors.panel, marginTop:'auto'}} >© Muzone</Typography>
             </Box>
         </Box>
     </>
 )
}
export default Footer