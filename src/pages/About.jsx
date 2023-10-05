import { Divider } from "@chakra-ui/react";
import { AboutLandings, AboutLonger } from "../components/About/About";
import Partners from "../components/Partners";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div>
      <Fade triggerOnce >
      <AboutLonger />
      <Divider />
      <Partners />
      <Divider />
      <AboutLandings />
      </Fade>
    </div>
  );
};

export default About;
