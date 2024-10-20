import {Typography} from "@mui/material";
import {useState} from "react";

const LanguageSwitcher = ({lang, colors, onClick}) => {
    const [value, setValue] = useState(lang);

    const style = {
        ukr: {
            default: {color:colors.body,zIndex:5, transition: '0.5s ease-in-out'},
            selected:{color:colors.panel,zIndex:5, transition: '0.5s ease-in-out'},
        },
        eng: {
            default: {color:colors.body,zIndex:5, transition: '0.5s ease-in-out'},
            selected:{color:colors.panel,zIndex:5, transition: '0.5s ease-in-out'}
        }
    }



    return (

        <div style={{display: 'flex', alignItems: 'center', position: 'relative', zIndex:2, gap:'8px'}}>

            <Typography
                value='ukr'
                onClick={e => onClick(e.target.getAttribute("value"), setValue(e.target.getAttribute("value")))}
                style={value === 'ukr' ? style.ukr.selected : style.ukr.default}
            >Ukr</Typography>
            <Typography
                value='eng'
                onClick={e => onClick(e.target.getAttribute("value"), setValue(e.target.getAttribute("value")))}
                style={value === 'eng' ? (
                    style.eng.selected
                ) : style.eng.default}
            >Eng</Typography>
            <div style={{
                position: 'absolute',
                height: '28px',
                width: '37px',
                background: colors.body,
                borderRadius: '8px',
                zIndex: 0,
                left: value === 'ukr' ? "-5px" : 'calc(100% - 33px)',
                transition: '0.5s ease-in-out'
            }}/>
        </div>
    )

}

export default LanguageSwitcher