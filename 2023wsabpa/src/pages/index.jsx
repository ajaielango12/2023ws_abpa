import { Heading, Text } from "@chakra-ui/react";
import Stats from "../components/Stats/index"
import bar from "../components/Stats/barchart"
import Barchart from "../components/Stats/barchart";
import Ring from "../components/Stats/Doughnut"
import LinkNext from "next/link";

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css" type="text/css" media="screen"/>

const Home = () => {
  return (
    <>
      <Heading>Apparel : A Study On The Indian Apparel Market</Heading>
      <Text>
        This Website is to Show and Describe a study on the Indian Apparel Market , Take a look through the Pages
      </Text>
      <Text>To Start with lets have a look at the Export Import Data of Apparel From India and To India</Text>
      <Barchart></Barchart>
      <LinkNext href="/importc">Click here to proceed Further</LinkNext>

      
      
      
    </>
  );
};

export default Home

