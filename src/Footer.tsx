
import  { FC, ReactElement } from "react";
import { Box, Container, Grid, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        bottom: 0,
        px: 10
      }}
    >
      <Container maxWidth="lg">
          <Grid item xs={12} container direction="row" alignItems="center" justifyContent={"space-between"}>
                <Box>{`Maciej Jastrzębski ${new Date().getFullYear()}`} </Box>
                <Box className={"iconsBox"}>
                    <IconButton 
                        aria-label="LinkedIn"
                        component={"a"}
                        href={"https://www.linkedin.com/in/maciej-jastrz%C4%99bski-5977a821b/"}
                        target="blank"
                    >
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton 
                        aria-label="GitHub"
                        component={"a"}
                        href={"https://github.com/mJastrzebski6"}
                        target="blank"
                        >
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton 
                        aria-label="Facebook"
                        component={"a"}
                        href={"https://www.facebook.com/maciej.jastrzebski.961/"}
                        target="blank"
                    >
                        <FacebookIcon/>
                    </IconButton>
                    <IconButton 
                        aria-label="Instagram"
                        component={"a"}
                        href={"https://www.instagram.com/youngchemik"}
                        target="blank"
                    
                    >
                        <InstagramIcon/>
                    </IconButton>
                </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;