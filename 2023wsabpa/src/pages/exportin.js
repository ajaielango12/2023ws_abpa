import { Container, Heading, Text } from "@chakra-ui/react";
import ImportFC from "../components/Stats/TFC.js";
import Ring from "../components/Stats/Doughnut"
import LinkNext from "next/link";

const ExportIn = () => {
  return (
    <>
      <Text>Export Data From India To Other Countries</Text>
      <Ring></Ring>
      <LinkNext href="/map">Click here to proceed Further</LinkNext>
    </>
  );
};

export default ExportIn;


