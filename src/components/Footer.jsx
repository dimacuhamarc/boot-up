import React from 'react';
import { Text, Flex, Image, HStack } from '@chakra-ui/react';
import footerImg from '../assets/img/footer.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="transparent"
      color="gray.700"
      position="absolute"
      bottom="0"
      w="80%"
      h="60px"
      paddingTop="5rem"
      paddingBottom="2.5rem"
    >
      <Image
        position="absolute"
        transform="translate(0%,-30%)"
        src={footerImg}
        height="50vw"
        zIndex="-1"
        opacity="10%"
        overflow="hidden"
      />
      <Text
        textAlign="center"
        bgGradient="linear(to-r, purple.400,red.400)"
        bgClip="text"
        fontSize="xl"
        fontWeight="extrabold"
        _hover={{ filter: 'brightness(1.2)' }}
      >
        Igniting Innovation, Fueling Success.
      </Text>
      <Text fontSize="sm">
        <Link to="/">BootUP Philippines</Link> © {new Date().getFullYear()}
      </Text>
      <Text as="span" fontSize="sm" color="gray.500" ml="1">
        {' '}
        All Rights Reserved.{' '}
      </Text>
      <HStack fontSize="12px" color="gray.700" spacing="12px" mt="1rem">
        <Link to="/">Home</Link> <span>•</span>
        <Link>Blog</Link> <span>•</span>
        <Link>Legal</Link> <span>•</span>
        <Link>Careers</Link>
      </HStack>
    </Flex>
  );
}
