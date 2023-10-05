import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import John from '../assets/img/testimonial/img1.jpeg';
import Jane from '../assets/img/testimonial/img2.jpg';
import Juan from '../assets/img/testimonial/img3.jpeg';
import Michael from '../assets/img/testimonial/img4.jpeg';


const TestimonialData = [
  {
    name: 'John Doe',
    title: 'CEO',
    company: 'ABC Company',
    img: John,
    message:
      'BootUP Philippines has been a game-changer for my startup journey. The mentorship and networking opportunities have helped me turn my idea into a thriving business.',
  },
  {
    name: 'Jane Doe',
    title: 'Founder',
    company: 'XYZ Company',
    img: Jane,
    message:
      "I can't thank BootUP enough for their comprehensive workshops. They provided me with the knowledge and support I needed to navigate the challenges of entrepreneurship successfully.",
  },
  {
    name: 'Juan Dela Cruz',
    title: 'Founder, CEO',
    company: 'Himagsikan Beer',
    img: Juan,
    message:
      "BootUP's co-working space is a dynamic environment that fosters innovation. It's where ideas collide, partnerships form, and dreams become reality.",
  },
  {
    name: 'Michael Scott',
    title: 'CEO',
    company: 'MS Tech Solutions',
    img: Michael,
    message:
      "The online learning platform offered by BootUP is a goldmine of resources. It's like having a library of expert knowledge at your fingertips.",
  },
];

const TestimonialCard = (props) => {
  return (
      <Flex
        boxShadow={'lg'}
        maxW={'460px'}
        height={'100%'}
        width={'full'}
        rounded={'2xl'}
        p={10}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        backdropFilter='blur(4px)'
        bg={useColorModeValue('whiteAlpha.500', 'gray.800')}
        _hover={{ transform: 'scale(1.05)' }}
      >
        
        <Flex 
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Avatar
            src={props.img}
            alt='Author'
            size={{ base: 'xl', md: '2xl' }}
            margin='2.5rem'
            outline='2px solid white'
          />
          <Stack direction={'column'} spacing={2}>
            <Text
              fontWeight={600}
              fontSize={'2xl'}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              {props.name}
            </Text>
            <Text fontSize={'md'} fontWeight={500}>
              {props.title} at {props.company}
            </Text>
            <Text fontSize={'md'} color={'gray.500'}>
              {props.message}
            </Text>
          </Stack>
        </Flex>
      </Flex>

  );
};

const Testimonials = () => {
  return (
    <Box>
      <Heading
        textAlign={'center'}
        fontSize={'4xl'}
        bgClip="text"
        bgGradient="linear(to-r,purple.500,red.500)"
        _hover={{ filter: 'brightness(1.2)' }}
        paddingTop={12}
      >
      Hear from our Community
      </Heading>
      <Box
        display={{ base: 'block', md: 'flex' }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={6}

        px={12}
      >
        {TestimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            company={testimonial.company}
            message={testimonial.message}
            img={testimonial.img}
          />
        ))}
        <Box display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={6}
        py={12}
        >
          {TestimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              message={testimonial.message}
              img={testimonial.img}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
