import {Box, Button, Card, colors, LinearProgress, Typography} from "@mui/material";
import singingImg from '../assets/courses/singing.png'
import guitarImg from '../assets/courses/guitar.png'
import PlaceIcon from '@mui/icons-material/Place';

const CourseCard = ({colors, course}) => {

    const getBackgroundImage = () => {
        switch (course.name) {
            case "singing":
                return singingImg;
            case "guitar":
                return guitarImg;
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
            <img style={{zIndex:'1',position:"absolute",left:0,top:0,width:'100%'}} src={getBackgroundImage()}/>
            <Typography variant='h3' sx={{zIndex:"2", color:colors.panel,position:"absolute"}}>{course.name.toUpperCase()}</Typography>
            <Box sx={{display:'flex',flexDirection:'column', position:'relative', zIndex:'2', height:'100%'}}>
                {course.subscription === 'expired' ? (
                    <Box sx={{display:'flex', flexDirection:'column', marginLeft:'auto', width:'300px', alignItems:'end', rowGap:'6px'}}>
                        <Typography sx={{color:colors.selectedTab, textAlign:'end', padding:'4px', borderRadius:'12px', background:'rgba(0,0,0,0.6)'}} variant='h6'>subscription expired</Typography>
                        <Button color='success' variant='contained'>Renew</Button>
                    </Box>
                ):(
                    <Typography variant='h6' sx={{ color:colors.panel, position:'relative', textAlign:'end'}}>Subscription till {course.subscription}</Typography>
                )}

                    <Box sx={{display:'flex',alignItems:'center', marginTop:'auto', width:'100%'}}>
                        <Typography sx={{display:'flex', color:'lightgreen',alignItems:'center', textAlign:'end', padding:'4px 24px', borderRadius:'12px', background:'rgba(0,0,0,0.2)'}} variant='h6'><PlaceIcon /> {course.location}</Typography>

                        <Box sx={{display:'flex',flexDirection:'column', alignItems:'end', marginLeft:'auto'}}>
                            <Typography variant='h6' sx={{color:colors.panel}}>Lessons {course.completedLessons}/{course.totalLessons}</Typography>
                            <LinearProgress color='warning' sx={{width:'250px', height:'10px', borderRadius:'10px', background:colors.panel}} variant="determinate" value={(100*course.completedLessons)/course.totalLessons} />
                        </Box>
                    </Box>

            </Box>
        </Card>
    )
}

export default CourseCard