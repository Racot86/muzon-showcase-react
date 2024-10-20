import {Box, Button, Fade, Grid, Typography} from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import CourseCard from "./CoursesCard.jsx";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LessonCard from "./LessonsCard.jsx";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeWorkCard from "./HomeWorkCard.jsx";

const HomePage = ({ colors, user}) => {

    return (
        <>
            <Fade in={true} sx={{width:'100%'}}>
            <Grid display='flex' flexDirection='column' alignItems='center' width='100%' marginTop={10} container spacing={4}>
                <Grid  display="flex" gap="8px" flexDirection='column' alignItems='center' item xs={6}>
                    <Typography variant='h4' sx={{display:'flex', alignItems:'center', gap:'8px', width:'100%'}} color={colors.panel} > <PushPinIcon fontSize='large' sx={{color:colors.selectedTab}} /> My subscription</Typography>

                    <Box sx={{display: "flex", flexDirection:'column', justifyContent: "center", rowGap:'12px'}}>
                        {user.courses.map((course) => (
                            <CourseCard key={course.name} course={course} colors={colors} />
                        ))}
                    </Box>
                </Grid>

                <Grid  display="flex" gap="8px" flexDirection='column' alignItems='center' item xs={6}>
                    <Typography variant='h4' sx={{display:'flex', alignItems:'center', gap:'8px', width:'100%'}} color={colors.panel} > <LibraryBooksIcon fontSize='large' sx={{color:colors.selectedTab}} /> My Lessons</Typography>
                    <Box sx={{display: "flex", flexDirection:'column', justifyContent: "center", rowGap:'12px'}}>
                        {user.lessons.map((lesson,index) => (
                            <LessonCard key={index} lesson={lesson} colors={colors} />
                        ))}
                    </Box>
                </Grid>

                <Grid  display="flex" gap="8px" flexDirection='column' alignItems='center' item xs={6}>
                    <Typography variant='h4' sx={{display:'flex', alignItems:'center', gap:'8px', width:'100%'}} color={colors.panel} > <NotificationsIcon fontSize='large' sx={{color:colors.selectedTab}} /> My Home works</Typography>
                    <Box sx={{display: "flex", flexDirection:'column', justifyContent: "center", rowGap:'12px'}}>
                        {user.homeworks.map((work,index) => (
                            <HomeWorkCard  key={index} homeWork={work} colors={colors} />
                        ))}
                    </Box>
                </Grid>

            </Grid>
            </Fade>
        </>
    )
}

export default HomePage