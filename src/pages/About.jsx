import { Divider } from "@chakra-ui/react";
import { AboutLandings, AboutLonger } from "../components/About/About";
import Partners from "../components/Partners";

const About = () => {
  return (
    <div>
      <AboutLonger />
      <Divider />
      <Partners />
      <Divider />
      <AboutLandings />
    </div>
  );
};

export default About;
