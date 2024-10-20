import {Avatar, Box, Button, Card, colors, LinearProgress, Typography} from "@mui/material";
import drumsImg from '../assets/courses/lessons/drums.png'
import PlaceIcon from '@mui/icons-material/Place';
import pianoImg from "../assets/courses/lessons/piano.png";

const HomeWorkCard = ({colors, homeWork}) => {

    const getBackgroundImage = () => {
        switch (homeWork.name) {
            case "drums":
                return drumsImg;
            case "piano":
                return pianoImg;
        }
    }

    return (
        <Card variant="outlined" sx={{
            minWidth: '580px',
            width: '100%',
            height: '200px',
            position: 'relative',
            background:colors.panel,
            borderRadius: '8px',
            padding:'24px'
        }}>
            <img style={{zIndex:'1',position:"absolute",left:0,top:0,width:'100%', opacity:'0.5'}} src={getBackgroundImage()}/>

            <Box sx={{display:'flex',flexDirection:'column', position:'relative', zIndex:'2', height:'100%'}}>
                <Box sx={{display:"flex", marginBottom:'12px'}}>
                    <Box>
                        <Typography variant='h5' sx={{zIndex:"2", color:colors.body, fontWeight:'bold'}}>Home work {homeWork.number}</Typography>
                        <Typography sx={{display:'flex',alignItems:'center', textAlign:'end'}} variant='h6'>Instrument: {homeWork.name}</Typography>
                    </Box>
                    <Box sx={{marginLeft:'auto'}}>

                            <Typography >deadline: {homeWork.date}</Typography>

                    </Box>
                </Box>
                <Typography>{homeWork.description}</Typography>

                    <Box sx={{display:'flex',alignItems:'center', marginTop:'auto', width:'100%', gap:'12px'}}>
                        <Avatar src={homeWork.teacherImg} sx={{width:'48px', height:'48px'}} />
                        <Box>
                            <Typography >Teacher</Typography>
                            <Typography fontWeight='bold' >{homeWork.teacher}</Typography>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'end', marginLeft:'auto', gap:'12px'}}>
                            <Button sx={{background:'rgba(255,255,255,0.4)'}} color='warning' variant='outlined'>HW Description</Button>
                            <Button color='success' variant='contained'>Complete</Button>

                        </Box>
                    </Box>

            </Box>
        </Card>
    )
}

export default HomeWorkCard