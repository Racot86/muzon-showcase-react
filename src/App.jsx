import './App.css'
import {AppBar, Box, Button, Container, Avatar} from "@mui/material";
import logoImg from "./assets/logo@0.5x.png";
import {useState} from "react";
import PageRouter from "./components/PageRouter.jsx";
import LanguageSwitcher from "./components/LanguageSwitcher.jsx";
import NotificationsIcon from '@mui/icons-material/Notifications';
import userImg from "./assets/users/Lemmy-Kilmister.webp";
import teacherImg from "./assets/teachers/lars.png";
import Footer from "./components/Footer.jsx";


function App() {
    const pages = ['home', 'schedule', 'payment', 'courses'];
    const colors = {
        panel: '#EFE8CC',
        body: '#3B383A',
        mainText: '#A17C3D',
        tab: 'black',
        selectedTab: '#EC3440',
    };

    const userData =
        {
            id:1,
            name: 'Lemmy',
            surname: 'Kilmister',
            avatarImage:userImg,
            courses:[
                {
                    name:'singing',
                    totalLessons: 12,
                    completedLessons: 8,
                    subscription:'12-05-2025',
                    location:'Pastera st. 82'
                },
                {
                    name:'guitar',
                    totalLessons: 8,
                    completedLessons: 2,
                    subscription:'expired',
                    location:'Pastera st. 82'
                },
            ],
            lessons:[
                {
                    id:1,
                    name:'drums',
                    date:'now',
                    location:'online',
                    description:'The lesson focuses on building stamina, mastering complex rhythms,' +
                        ' and driving the intense energy that defines heavy metal music.',
                    teacher:'Lars Ulrich',
                    teacherImg:teacherImg
                },
                {
                    id:2,
                    name:'drums',
                    date:'03-10-2024 14:30',
                    location:'online',
                    description:'The lesson focuses on building stamina, mastering complex rhythms,' +
                        ' and driving the intense energy that defines heavy metal music.',
                    teacher:'Lars Ulrich',
                    teacherImg:teacherImg
                },
                {
                    id:3,
                    name:'drums',
                    date:'5-10-2024 14:30',
                    location:'online',
                    description:'The lesson focuses on building stamina, mastering complex rhythms,' +
                        ' and driving the intense energy that defines heavy metal music.',
                    teacher:'Lars Ulrich',
                    teacherImg:teacherImg
                }
            ],
            homeworks:[
                {
                    id:1,
                    name:'piano',
                    date:'01-10-2024',
                    number: 2,
                    location:'online',
                    description:'Choose a classical piece of music and analyze its structure. Identify the key, time signature, and form (such as sonata or rondo). Additionally, describe how the composer uses dynamics and tempo changes to create emotion in the piece.',
                    teacher:'Ludvig Beethoven',
                    teacherImg:teacherImg
                },
                {
                    id:2,
                    name:'drums',
                    date:'03-10-2024',
                    number: 3,
                    description:'Choose a classical piece of music and analyze its structure. Identify the key, time signature, and form (such as sonata or rondo). Additionally, describe how the composer uses dynamics and tempo changes to create emotion in the piece.',
                    teacher:'Lars Ulrich',
                    teacherImg:teacherImg
                },
                {
                    id:3,
                    name:'drums',
                    date:'5-10-2024',
                    number: 4,
                    description:'Choose a classical piece of music and analyze its structure. Identify the key, time signature, and form (such as sonata or rondo). Additionally, describe how the composer uses dynamics and tempo changes to create emotion in the piece.',
                    teacher:'Lars Ulrich',
                    teacherImg:teacherImg
                }
            ]
        }


    const [tabValue, setTabValue] = useState(pages[0])


    const handleTabChange = (event) => {
        setTabValue(event.target.value)
    };

    const handleLanguageChange = (event) => {
        console.log(event);
    }

    return (
        <>
            <div style={{
                position:'fixed', zIndex:'3', width:'100%', height:'40px',top:0,
                background: 'rgba(255, 255, 255, 0.1)', /* Semi-transparent white background */
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', /* Soft shadow for depth */
                backdropFilter: 'blur(10px)', /* Blurs everything behind the div */
            }}></div>
            <AppBar position="sticky" sx={{backgroundColor: colors.panel, height: '40px',top:'28px', marginTop: '26px'}}>
                <Container sx={{height: '40px', position: 'relative', display: "flex", alignItems: 'center'}}
                           maxWidth="xl">
                    <img src={logoImg} style={{width: '96px', position: 'absolute'}}/>
                    <Box sx={{marginLeft: 'auto', width: '350px'}}>
                        {pages.map(page => (
                            <Button
                                key={page}
                                value={page}
                                sx={{
                                    color: tabValue === page ? colors.selectedTab : colors.body,
                                    fontWeight: tabValue === page ? "bold" : "normal"
                                }}
                                variant="text" color="inherit"
                                onClick={handleTabChange}>{page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{width:'110px', display: 'flex', alignItems: 'center', gap:2, marginRight:8}}>
                        <LanguageSwitcher onClick={handleLanguageChange} lang={"eng"} colors={colors} />
                        <NotificationsIcon sx={{color:colors.body}} colors={colors} />
                    </Box>
                    <Avatar src={userData.avatarImage} sx={{position: 'absolute', right: 16, width:'72px', height:'72px', border:`1px solid ${colors.panel}`}}/>
                </Container>
            </AppBar>
            <PageRouter route={tabValue} colors={colors} user={userData} />
            <Footer colors={colors} />
        </>
    )
}

export default App
