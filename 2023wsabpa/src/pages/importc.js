import { Container, Heading, Text } from "@chakra-ui/react";
import ImportFC from "../components/Stats/TFC.js";
import LinkNext from "next/link";


const TFCP = () => {
  return (
    <>
      <Text>Import Data</Text>
      <ImportFC></ImportFC>
      <LinkNext href="/exportin">Click here to proceed Further</LinkNext>
    </>
  );
};

export default TFCP;


