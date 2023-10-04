import { Flex, Img } from "@chakra-ui/react";
import st404 from '../assets/img/404.svg';

export default function NotFound() {
  return (
    <Flex
      flexDirection='column'
      justifyContent="center"
      alignItems="center" 
      w="100%"
      h="100%"
    >
      <Img src={st404} alt="404" h="80vh"/>
    </Flex>
  );
}