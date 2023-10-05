import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import Partner1 from './../assets/img/partners/logo1.svg';
import Partner3 from './../assets/img/partners/logo2.svg';
import Partner2 from './../assets/img/partners/logo3.png';

const PartnerLogo = ({ imageUrl, partnerName }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    p="4"
    textAlign="center"
    _hover={{ transform: 'scale(1.05)' }}
  >
    <Image src={imageUrl} alt={partnerName} maxH="80px" />
  </Box>
);

const Partners = () => {
  const partnerLogos = [
    { imageUrl: Partner1, partnerName: 'Apple' },
    { imageUrl: Partner2, partnerName: 'Google' },
    { imageUrl: Partner3, partnerName: 'Y Combinator' },
  ];

  return (
    <Box py="8">
      <Text textAlign="center" fontSize="xl" fontWeight="bold" mb="4">
        Our Partners
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {partnerLogos.map((partner, index) => (
          <PartnerLogo key={index} imageUrl={partner.imageUrl} />
        ))}
      </Flex>
    </Box>
  );
};

export default Partners;
