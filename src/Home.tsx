import { Box, Container, Typography } from "@mui/material";
import "./Home.css"

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box >
        <Typography variant="h3" gutterBottom sx={{my: 5}}>
          Welcome Travelers! I'm Maciej
        </Typography>
        <Typography variant="body1" gutterBottom sx={{mb:3}}>
          A young software developer from Cracow. I enjoy creating applications
          in JavaScript. I am familiar with React and have experience with Vue, Angular, and Svelte.
          I like developing 2D games and I am open to exploring new horizons.
          I have also found satisfaction in creating Android application. In
          addition to school projects, I did a few of my own projects.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{mb:3}}>
          My friends describe me as a helpful and dutiful person who can explain
          complex concepts. Although I am down-to-earth, I also enjoy indulging in a good TV series or a music playlist. 
          I have a keen interest in psychology, so in my free time, 
          I deepen my knowledge of various psychological effects and relationships.
        </Typography>
      </Box>
      </Container>
  );
};
export default Home;
