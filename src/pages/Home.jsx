import Hero from '../components/Hero';
import { Divider } from '@chakra-ui/react';
import { AboutLandings } from '../components/About/About';
import Partners from '../components/Partners';
import Pricing from '../components/About/Pricing';

const Home = () => {
  return (
    <div>
      <Hero />
      <Divider />
      <Partners />
      <Divider />
      <AboutLandings />
      <Divider border="0.25px gray solid" />
      <Pricing />
      <Divider border="0.25px gray solid" />
    </div>
  );
};

export default Home;
