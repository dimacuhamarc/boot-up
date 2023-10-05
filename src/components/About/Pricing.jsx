import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Icon,
} from '@chakra-ui/react';

import { FaCheckCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      bgGradient="linear(145deg,purple.400,red.100)"
      color="white"
      mb={4}
      width={'330px'}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      _hover={{ transform: 'scale(1.05)' }}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

const Pricing = () => {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading
          as="h1"
          fontSize="4xl"
          bgClip="text"
          bgGradient="linear(to-r,purple.500,red.500)"
          _hover={{ filter: 'brightness(1.2)' }}
        >
          Ready to take the first step?
        </Heading>
        <Text fontSize="lg" width="90%" color={'gray.500'}>
          Explore our Incubation and Growth Plan with tiered pricing, allowing
          you to choose programs and packages that best suit your learning and
          development goals
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        textAlign="center"
        justify="center"
        alignContent="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Incubation Plan
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="900">
                Free
              </Text>
              <Text fontSize="3xl">/month</Text>
            </HStack>
          </Box>
          <VStack
            color="gray.500"
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Workshops access
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Networking events
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaCheckCircle}
                  overflowWrap="break-word"
                  color="green.500"
                />
                Digital Resources and Templates
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="purple" variant="outline">
                Start Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}
            >
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('gray.100', 'gray.700')}
                outline="1px solid purple.900"
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl"
              >
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl">/month</Text>
              </HStack>
            </Box>
            <VStack
              color="gray.500"
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Onsite Workshop Access
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Networking Events
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Digital Resources and Templates
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Mentorship Match
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Coworking & Office Space Access
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="purple">
                  Choose Plan
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Corporate Innovation
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl">/month</Text>
            </HStack>
          </Box>
          <VStack
            color="gray.500"
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                All Features in Incubation and Growth Plan
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Onsite Workshop Access
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Networking Events, Worldwide
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Private Office Space
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="purple" variant="outline">
                Contact Us
                <Icon
                  ml={2}
                  viewBox="0 0 24 24"
                  color="purple.500"
                  h="1.2em"
                  w="1.2em"
                  as={AiFillPhone}
                />
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
};

export default Pricing;
