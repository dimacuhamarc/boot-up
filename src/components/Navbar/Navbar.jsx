import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';
import { Text, Flex, Hide, Button, ButtonGroup } from '@chakra-ui/react';

export default function Navbar() {

  const location = useLocation();

  return (
    <div className="navbar">
      <Hide below='sm'>
        <Flex>
          <Text
            display={{
              base: 'block',
              lg: 'inline',
            }}
            fontSize={{
              base: '2xl',
              md: '3xl',
            }}
            as="h1"
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.400,red.400)"
            fontWeight="extrabold"
            cursor="default"
          >
            BootUP 2024
          </Text>
        </Flex>
      </Hide>
      
      <Flex
        alignItems="center"
        justifyContent="center"
        w="auto"
        maxW="2xl"
        mx={{ base: 'auto', md: 'initial' }}
        color="gray.500"
        _dark={{
          bg: 'gray.700',
          color: 'gray.100',
        }}
      >
        <ButtonGroup gap='1'>
          <Link  to='/'><Button isActive={location.pathname === '/' ? 'true' : ''} borderRadius='3xl' colorScheme='blackAlpha' variant="ghost">Home</Button></Link>
          <Link to='about'><Button isActive={location.pathname === '/about' ? 'true' : ''} borderRadius='3xl' colorScheme='blackAlpha' variant="ghost">About</Button></Link>
          <Link to='contact'><Button isActive={location.pathname === '/contact' ? 'true' : ''} borderRadius='3xl' colorScheme='blackAlpha' variant="ghost">Contact Us</Button></Link>
        </ButtonGroup>
      </Flex>
    </div>
  );
}