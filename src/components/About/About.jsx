import Partners from "../Partners";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Divider,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { IoPersonAddSharp, IoBriefcase } from 'react-icons/io5';
import { LuPresentation } from 'react-icons/lu';

import { FaHammer, FaTree } from 'react-icons/fa';

const Offers = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'} _hover={{transform: 'scale(1.05)'}}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

const AboutLandings = () => {
  return (
    <Container height="80%" maxW={'5xl'} paddingY={24}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={10}>
        <Stack height="80%" spacing={8}>
          <Text
            textTransform={'uppercase'}
            _hover={{filter: 'brightness(1.2)', transform: 'scale(1.05)'}}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
            >
            This is BootUp Philippines
          </Text>
          <Heading marginY={-4}>
            <Text
              display={{
                base: 'block',
                lg: 'inline',
              }}
              w="full"
              bgClip="text"
              bgGradient="linear(to-r, purple.400,red.500)"
              fontWeight="extrabold"
              _hover={{filter: 'brightness(1.2)'}}
              cursor="pointer"
            >
              Where Innovation Takes Flight!
            </Text>{' '}
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          We are passionate about nurturing the entrepreneurial spirit and fostering innovation in the heart of the Philippines. 
          </Text>
          <Stack
            spacing={8}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Offers
              icon={<Icon as={FaHammer} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Workshops & Bootcamps'}
            />
            <Offers
              icon={<Icon as={FaTree} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Incubation Services'}
            />
            <Offers
              icon={<Icon as={IoPersonAddSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Mentorship Match'}
            />
            <Offers
              icon={<Icon as={LuPresentation} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Pitch Perfect'}
            />
            <Offers
              icon={<Icon as={IoBriefcase} color={'orange.500'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.100', 'orange.900')}
              text={'Startup Starter Kit'}
            />
          </Stack>
        </Stack>
        <Flex display={{
          base: 'none',
          md: 'none',
          lg: 'block',
        }}>
          <Image
            rounded={'md'}
            alt={'Inside BootUP Philippines'}
            src={
              'https://images.pexels.com/photos/3205546/pexels-photo-3205546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
            width="100%"
            height="100%"
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

const About = () => {
  return (
    <div>
      <Divider />
      <Partners />
    </div>
  );
}

export { AboutLandings, About };