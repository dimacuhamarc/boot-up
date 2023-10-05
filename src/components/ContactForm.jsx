
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';

import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function ContactForm() {
  return (
    <Container maxW="full" overflow="hidden" >
      <Flex  alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('whiteAlpha.300', 'gray.800')}
          color="gray.600"
          width="100%"
          display="flex" flexDirection={{ base: "column", sm: "column", md: "column", lg: "row"}} gap="5rem" alignItems="center" justifyContent="center"
          borderRadius="2xl"
          p={{ sm: 5, md: 5, lg: 16 }}>
          <WrapItem textAlign="center">
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Heading>Contact</Heading>
              <Text color="gray.500">
                We will get back to you as soon as possible. We promise!
              </Text>
              <Box  py={{ base: 5, sm: 5, md: 8, lg: 10 }} >
                <VStack pl={0} spacing={4} alignItems={"center"}>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="solid"
                    colorScheme='purple'
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdPhone color='white' size="20px" />}>
                    +91-988888888
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="solid"
                    colorScheme='purple'
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdEmail color='white' size="20px" />}>
                    inquire@bootup.ph
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="solid"
                    colorScheme='purple'
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdLocationOn color='white' size="20px" />}>
                    Makati, Philippines
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                justifyContent={"center"}>
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: 'purple.500' }}
                  icon={<MdFacebook size="28px" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: 'purple.500' }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="discord"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: 'purple.500' }}
                  icon={<BsDiscord size="28px" />}
                />
              </HStack>
            </Box>
          </WrapItem>
          <WrapItem>
            <Box bg="white" width="100%" textAlign="center" borderRadius="lg">
              <Box m={8}>
                <VStack spacing={5}>
                  <FormControl id="name">
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup borderColor="purple.500">
                      <InputLeftElement pointerEvents="none">
                        <BsPerson color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Mail</FormLabel>
                    <InputGroup borderColor="purple.500">
                      <InputLeftElement pointerEvents="none">
                        <MdOutlineEmail color="gray.800" />
                      </InputLeftElement>
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      borderColor="purple.500"
                      _hover={{
                        borderRadius: 'gray.500',
                      }}
                      placeholder="message"
                      resize="none"
                    />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button variant="solid" bg="purple.500" color="white" _hover={{}}>
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Box>
      </Flex>
    </Container>
  )
}