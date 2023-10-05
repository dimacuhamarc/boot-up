
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      opacity={"80%"}
      textTransform={'uppercase'}
      _hover={{filter: 'brightness(1.2)', transform: 'scale(1.05)'}}
      color={'blue.400'}
      bg={useColorModeValue('blue.50', 'blue.900')}
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'extrabold'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Statistics() {

  return (
    <Box maxW="7xl" mx={'auto'} pt={5} paddingBottom={'20'} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        bgClip="text"
        bgGradient="linear(to-r, purple.400,red.500)"
        _hover={{filter: 'brightness(1.2)'}}
      >
        This is what we do...
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          useColorModeValue={''}
          title={'We Collaborate with'}
          stat={`45,125 people`}
        />
        <StatsCard title={'With Their'} stat={'Startups and Ideas'} />
        <StatsCard title={'In'} stat={'South East Asia'} />
      </SimpleGrid>
    </Box>
  );
}
