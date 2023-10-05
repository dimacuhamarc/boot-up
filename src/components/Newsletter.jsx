
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Container,
  Flex,
} from '@chakra-ui/react';

export default function Newsletter() {

  return (
    <Flex
      p={50}
      width={'full'}
      align={'center'}
      justify={'center'}>
      <Container
        maxW={'2xl'}
        bg={useColorModeValue('whiteAlpha.500', 'gray.800')}
        backdropFilter={"blur(12px)"}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}>
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={'purple'}
              w="100%"
              type={'submit'}>
              {'Submit'}
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  )
}