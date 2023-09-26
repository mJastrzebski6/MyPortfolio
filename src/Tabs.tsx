import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { ProjectsInterface } from './Interfaces';
import Project from './Project';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    scrollButtons="auto"
    variant="scrollable"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));




export default function CustomizedTabs({projects}:ProjectsInterface) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event
    setValue(newValue);
  };

  const tabs = ["All", "Javascript", "Typescript","React", "Game", "Tool","Android-java"]

  return (
    <Box sx={{ width: '100%'}}>
      <TabContext value={value.toString()}>
        <Box  display="flex" justifyContent="center" width="100%" >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
            
          >
            {tabs.map((tab, index)=>{
              return(<StyledTab label={tab} key={index}/>)
            })}

          </StyledTabs>
        </Box>
        {tabs.map((tab, index)=>{
          return(
            <TabPanel value={index.toString()} key={index}>
              <Box sx={{ display:'flex', flexWrap:"wrap", justifyContent:"center"}}>
                {projects.map((project, index2)=>{
                  if(project.categories.includes(tab)) return(<Project {...project} key={index2}/>)
                })}
              </Box>
            </TabPanel>
          )
        })}
      </TabContext>
    </Box>
  );
}