import React from 'react';
import { Text, Link, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex 
      as="footer" 
      flexDirection='column'
      justifyContent="center"
      alignItems="center" 
      bg="transparent" 
      color="gray.700" 
      position="absolute"
      bottom="0"
      w="80%"
      h="60px"
      py="5rem"
    >
      <Text fontSize="sm">
        <Link to="/">BootUP Philippines</Link> © {new Date().getFullYear()}
      </Text>
      <Text as="span" fontSize="sm" color="gray.500" ml="1"> All Rights Reserved. </Text>
    </Flex>
  );
}
