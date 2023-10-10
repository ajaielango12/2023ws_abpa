import { Container, Heading, Text } from "@chakra-ui/react";

const PageAbout = () => {
  return (
    <Container minW="1000px" p={0}>
      <Heading>About</Heading>
      <Text>
        Hi, this is Theresa. This is about me. I am the designer of this page.{" "}
      </Text>
    </Container>
  );
};

export default PageAbout;
