import { Box } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <Box>
      <Fade triggerOnce>
        <ContactForm />
      </Fade>
    </Box>
  );
}