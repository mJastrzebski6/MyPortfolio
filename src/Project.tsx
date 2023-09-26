import { ProjectInterface } from "./Interfaces";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Project = (project: ProjectInterface) => {

  

  return (
    <Card sx={{ maxWidth: 345, mx:1, my:1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/images/cards/${project.name}.png`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default Project;
