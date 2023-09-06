import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { ButtonGroup, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import profilePic from "../images/miikkak_vanilla2.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import Info from "./Info";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BusinessCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div align="center">
      <Card
        sx={{
          backgroundColor: "black",
          color: "lightgray",
          maxWidth: 400,
          m: 5,
          width: "60%",
          border: 2,
          borderColor: "black",
        }}
      >
        <CardMedia
          src={profilePic}
          component="img"
          title="Me"
          sx={{ width: "60%", m: 5, border: 1, borderColor: "white" }}
        />
        <CardContent>
          <Info />
        </CardContent>

        <CardActions>
          <ButtonGroup size="medium" sx={{ m: 2 }} fullWidth={true}>
            <Button
              href="mailto:miikka.kainu@gmail.com"
              variant="outlined"
              startIcon={<EmailIcon />}
            >
              Email
            </Button>
            <Button
              target="_blank"
              href="https://www.linkedin.com/in/miikka-kainu-8b1a346a/"
              variant="outlined"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
            <Button
              target="_blank"
              variant="outlined"
              href="https://github.com/kainumii"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </ButtonGroup>
        </CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "white" }} />
        </ExpandMore>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6">About</Typography>
            <Typography variant="body2">
              I'm an eager software developer more than 15 years of experience
              with designing and programming in different domains. I have been
              developing Windows based testing and maintenance tools for mobile
              phones. I have also experience from healthcare systems as a
              developer role using C#, ASP.NET C#, JavaScript, REST and Git.
              Also I have been working in a project developing automotive HMI
              for a major European OEM. Most familiar programming languages to
              me are C# and C++.
            </Typography>
            <hr />
            <Typography variant="h6">Interests</Typography>
            <Typography variant="body2">Woodworks, Mountain biking</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default BusinessCard;
