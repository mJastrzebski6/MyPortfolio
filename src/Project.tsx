import { ProjectInterface } from "./Interfaces";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton, Tooltip } from "@mui/material";
import "./Project.css";
import { GitHub as GitHubIcon, Info as InfoIcon, WebAsset as WebAssetIcon } from "@mui/icons-material";

const Project = (project: ProjectInterface) => {
  return (
    <Card sx={{ mx: 1, my: 1 }} className="card">
      <CardActionArea
        component={project.hostingLink === "" ? "div" : "a"}
        href={project.hostingLink}
        target="blank"
      >
        <CardMedia
          component="img"
          height="340"
          image={`/images/cards/${project.name}.png`}
          alt={`${project.name} Image`}
        />
      </CardActionArea>

      <CardContent
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>

        <Box className="iconsBox">
          {project.hostingLink !== "" && (
            <IconButton
              component={"a"}
              href={project.hostingLink}
              target="blank"
            >
              <WebAssetIcon />
            </IconButton>
          )}
          {project.githubLink !== "" && (
            <IconButton component="a" href={project.githubLink} target="blank">
              <GitHubIcon />
            </IconButton>
          )}
          {project.description !== "" && (
            <Tooltip title={<Typography fontSize={30}>{project.description}</Typography> } arrow>
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Project;
