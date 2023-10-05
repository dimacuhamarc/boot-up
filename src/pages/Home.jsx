import Hero from '../components/Hero';
import { Divider } from '@chakra-ui/react';
import { AboutLandings } from '../components/About/About';
import Partners from '../components/Partners';
import Pricing from '../components/About/Pricing';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';

import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div>
      <Hero />
      <Fade triggerOnce >
      <Divider />
      <Partners />
      <Divider />
      <Statistics />
      <Divider />
      <AboutLandings />
      <Divider border="0.25px gray solid" />
      <Pricing />
      <Divider border="0.25px gray solid" />
      <Testimonials />
      </Fade>
    </div>
  );
};

export default Home;
