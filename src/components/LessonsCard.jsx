import {Avatar, Box, Button, Card, colors, LinearProgress, Typography} from "@mui/material";
import drumsImg from '../assets/courses/lessons/drums.png'
import pianoImg from '../assets/courses/lessons/piano.png'
import PlaceIcon from '@mui/icons-material/Place';

const LessonCard = ({colors, lesson}) => {

    const getBackgroundImage = () => {
        switch (lesson.name) {
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
                        <Typography variant='h5' sx={{zIndex:"2", color:colors.body, fontWeight:'bold'}}>{lesson.name.toUpperCase()}</Typography>
                        <Typography sx={{display:'flex', color:'green',alignItems:'center', textAlign:'end'}} variant='h6'>{lesson.location}</Typography>
                    </Box>
                    <Box sx={{marginLeft:'auto'}}>
                        {lesson.date==='now'?(
                            <Button color='success' variant='contained'>Join lesson</Button>
                        ):(
                            <Typography >{lesson.date}</Typography>
                        )}
                    </Box>
                </Box>
                <Typography>{lesson.description}</Typography>

                    <Box sx={{display:'flex',alignItems:'center', marginTop:'auto', width:'100%', gap:'12px'}}>
                        <Avatar src={lesson.teacherImg} sx={{width:'48px', height:'48px'}} />
                        <Box>
                            <Typography >Teacher</Typography>
                            <Typography fontWeight='bold' >{lesson.teacher}</Typography>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'end', marginLeft:'auto', gap:'12px'}}>
                            <Button sx={{background:'rgba(255,255,255,0.2)'}} color='error' variant='outlined'>Cancel lesson</Button>
                            <Button color='warning' variant='contained'>Change time</Button>

                        </Box>
                    </Box>

            </Box>
        </Card>
    )
}

export default LessonCard