import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Container from "@mui/material/Container";

// const colors = {
//   red: "e50000",
//   green: "00CC66",
//   blue: "00A0DC",
//   yellow: "FFFF99",
// };

const colors = {
  red: "#FF4D4D",
  green: "#57ca66",
  blue: "#4D96FF",
  yellow: "#fccf49",
  violet: "#A66CFF",
  pink: "#FF6FB5",
  orange: "#FF9F1C",
  cyan: "#2EC4B6",
};

const timelineElements = [
  {
    date: "2025 - Present",
    description: `I lead an 8-person research team in the <b style='color:${colors.pink};'>Synaptica Science Club</b>, working on a project focused on emotion recognition from speech and pupillometry. The project will conclude with the publication of a scientific article.`,
  },
  {
    date: "2024 - 2026",
    description: `I completed coursework in <b style='color:${colors.yellow};'>cybersecurity</b>, <b style='color:${colors.yellow};'>algorithms</b>, <b style='color:${colors.yellow};'>databases</b>, and <b style='color:${colors.yellow};'>design patterns</b>.`,
  },
  {
    date: "2024 - 2026",
    description: `During my studies, I was particularly interested in subjects related to <b style='color:${colors.yellow};'>machine learning</b>, <b style='color:${colors.yellow};'>deep learning</b>, and <b style='color:${colors.yellow};'>data analysis and processing</b>.`,
  },
  {
    date: "December 2024",
    description: `My team secured <b>first place</b> in the sixth edition of the <b style='color:${colors.green};'>"Sheep Your Hack" hackathon</b>, organized by the <b style='color:${colors.green};'>College of Economics and Computer Science in Krakow</b>. The competition focused on artificial intelligence, and our winning project was designed to enhance learning experiences for individuals.`,
  },
  {
    date: "October 2023",
    description: `I am commencing my studies at the <b style='color:${colors.blue};'>AGH University of Science and Technology</b> in Krakow, majoring in <b style='color:${colors.blue};'>Computer Science and Intelligent Systems</b>.`,
  },
  {
    date: "May & July 2023",
    description: `I graduated the <b style='color:${colors.blue};'>Upper Secondary Schools of Communications in Cracow</b>, achieving 100% in basic mathematics, 98% in advanced mathematics, and high scores in computer science and English.`,
  },
  {
    date: "May 2023",
    description: `I earned the title of <b style='color:${colors.yellow};'>Programming Technician</b> by successfully passing the <b style='color:${colors.yellow};'>INF03</b> and  <b style='color:${colors.yellow};'>INF04</b> certification exams.`,
  },
  {
    date: "May 2023",
    description: `I obtained the title of 3rd-degree <b>laureate</b> in the <b style='color:${colors.cyan};'>AGH Diamond Index competition in mathematics</b>.`,
  },
  {
    date: "October 2021",
    description: `I completed an internship at <b style='color:${colors.red};'>Prymsoft</b> company, during which I was involved in debugging the <b style='color:${colors.green};'>Vue.js</b> frontend project and also initiated a new project focused on team and task management.`,
  },
  {
    date: "January 2021",
    description: `I completed an internship at <b style='color:${colors.red};'>Krakweb</b> company during which I created an e-commerce website using the company's CMS.`,
  },
  {
    date: "September 2019",
    description: `I'm starting my studies at the <b style='color:${colors.blue};'>Upper Secondary Schools of Communications in Cracow</b>.`,
  },
];

export default function About() {
  return (
    <Container maxWidth="lg">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
          my: 5,
        }}
      >
        {timelineElements.map((element, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent color="textSecondary">
                {element.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div
                  dangerouslySetInnerHTML={{ __html: element.description }}
                ></div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Container>
  );
}
