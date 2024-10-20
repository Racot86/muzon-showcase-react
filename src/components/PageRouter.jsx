import Schedule from "./Schedule.jsx";
import Payment from "./Payment.jsx";
import Courses from "./Courses.jsx";
import HomePage from "./HomePage.jsx";
import {Box} from "@mui/material";

const PageRouter = ({route, colors, user}) => {
    let destination = null
    switch (route) {
        case 'home':
            destination = <HomePage colors={colors} user={user} />
            break;
        case 'schedule':
            destination = <Schedule />
            break;
        case 'payment':
            destination = <Payment />
            break;
        case 'courses':
            destination = <Courses />
            break;

    }

    return (
        <Box sx={{width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginBottom:'48px'}}>
            {destination}
        </Box>
    )
}

export default PageRouter;