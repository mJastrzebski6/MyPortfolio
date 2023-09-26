import Box from "@mui/material/Box";
import Tabs from "./Tabs"
import * as ProjectsFile from "./assets/projects.json"
import Typography from "@mui/material/Typography";
import "./Projects.css"

const Projects = () => {    
    return(
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent:"center"
        }}>
            <Box sx={{            
                mx: 2,
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
            }}
            className="projects">

                <Typography variant="h2" gutterBottom sx={{pl:"24px", my:3}}>Projects</Typography>
                <Tabs projects={ProjectsFile.projects}/>
            </Box>
            
        </Box>
    )
}
export default Projects