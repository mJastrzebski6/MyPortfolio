import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const timelineElements = [
    {
        date: "October 2023",
        description: "I am commencing my studies at the AGH University of Science and Technology in Krakow, majoring in Computer Science and Intelligent Systems."
    },
    {
        date: "May 2023",
        description: "I graduated the Upper Secondary Schools of Communications in Cracow"
    },
    {
        date: "October 2021",
        description: "I completed an internship at Prymsoft company, during which I was involved in debugging the Vue.js frontend project and also initiated a new project focused on team and task management."
    },
    {
        date: "January 2021",
        description: "I completed an internship at Krakweb company during which I created an e-commerce website using the company's CMS."
    },
    {
        date: "September 2019",
        description: "I'm starting my studies at the Upper Secondary Schools of Communications in Cracow"
    }
]

export default function About() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
        my: 5
      }}
    >
        {timelineElements.map((element, index)=> {
            return(
                <TimelineItem key={index}>
                    <TimelineOppositeContent color="textSecondary">{element.date}</TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{element.description}</TimelineContent>
                </TimelineItem>
            )
        })}
    </Timeline>
  );
}
