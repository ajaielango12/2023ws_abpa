import { Heading, Text } from "@chakra-ui/react";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <>
      <Heading>My Data</Heading>
      <Text>
        This is a website on my data. I found it so interesting that i want to
        show it to the world!
      </Text>
      <Text>Pay attention, here is the graph.</Text>
      <Stats></Stats>
    </>
  );
};

export default Home;
