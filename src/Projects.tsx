import Box from "@mui/material/Box";
import Tabs from "./Tabs"
import * as ProjectsFile from "./assets/projects.json"
import Typography from "@mui/material/Typography";

const Projects = () => {
    console.log(ProjectsFile.projects);
    
    return(
        <Box sx={{
           
            mx: 2,
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start'
        }}>
            <Typography variant="h2" gutterBottom sx={{pl:"24px"}}>Projects</Typography>
            <Tabs projects={ProjectsFile.projects}/>
        </Box>
    )
}
export default Projects