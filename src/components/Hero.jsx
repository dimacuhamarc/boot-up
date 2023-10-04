import { Box, Text, chakra, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Box px={4} py={24} mx="auto">
      <Box
        w={{
          base: 'full',
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: 'left',
          md: 'center',
        }}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: 'normal',
            md: 'tight',
          }}
          color="gray.900"
          _dark={{
            color: 'gray.100',
          }}
        >
          Begin your{' '}
          <Text
            display={{
              base: 'block',
              lg: 'inline',
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.400,red.500)"
            fontWeight="extrabold"
            cursor="pointer"
          >
            Startup Experience
          </Text>{' '}
          in one single place.
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: 'lg',
            md: 'xl',
          }}
          color="gray.600"
          _dark={{
            color: 'gray.300',
          }}
        >
          BootUP 2024 is a startup bootcamp that allows you to find the right
          people to work with, the right resources to use, and the right ideas
          to build.
        </chakra.p>
        <Button
          as="a"
          colorScheme="gray"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w={{
            base: 'full',
            sm: 'auto',
          }}
          mb={{
            base: 2,
            sm: 0,
          }}
          size="lg"
          cursor="pointer"
        >
          <Link to="get-started">Get Started</Link>
          <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </Icon>
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
