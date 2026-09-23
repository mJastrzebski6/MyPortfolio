import { Box, Container, Typography } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h3" gutterBottom sx={{ my: 5 }}>
          Welcome Travelers! I'm Maciej
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          A young software developer from Cracow. I am currently studying{" "}
          <b>Computer Science and Intelligent Systems</b> at{" "}
          <b>AGH University of Science and Technology</b>. My primary areas of
          interest include <b>artificial intelligence</b>, <b>deep learning</b>,
          and <b>data engineering</b>. I am a fast learner and quickly adapt to
          new technologies and challenges.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          I am often described by peers and supervisors as a person with strong{" "}
          <b>communication skills</b> who works effectively in a team
          environment. I am approachable and capable of explaining complex
          concepts in a clear and structured way. This has allowed me to
          successfully combine the roles of both a <b>mentor</b> and an{" "}
          <b>active team member</b> in collaborative projects. I supervise a
          project focused on <b>emotion recognition</b> in Synaptica Science
          Club at AGH.
        </Typography>

        <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
          I have also a strong interest in developing <b>web applications</b>,
          primarily using <b>React</b> and <b>TypeScript</b>. I also have basic
          experience with other frameworks. Earlier in my education, I
          particularly enjoyed creating <b>2D games</b> and{" "}
          <b>Android applications</b>, both as part of coursework and personal
          projects. In my free time, I enjoy watching TV series and listening to
          music, while continuously expanding my knowledge, particularly in the
          field of psychology.
        </Typography>
      </Box>
    </Container>
  );
};
export default Home;
