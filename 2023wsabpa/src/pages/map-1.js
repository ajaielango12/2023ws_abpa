import React from 'react';
import WorldMap from "react-svg-worldmap";
import { Container, Heading, Text } from "@chakra-ui/react";

const Mapi = () => {
  
    const data = [
    { country: "cn", value: 1281 }, 
    { country: "EU", value: 3318 }, 
    { country: "us", value: 3381 }, 
    { country: "bd", value: 2268 }, 
    { country: "pk", value: 687 }, 
    { country: "lk", value: 518 }, 
    { country: "ae", value: 518 },
    { country: "vn", value: 554 },
    { country: "br", value: 411 },
    { country: "kr", value: 339 },


    ];
  
  return (
    <div className="App">
      <WorldMap
        color="black"
        title="Export To Different Countries"
        value-suffix="$"
        size="responsive"
        data={data}
      />
    </div>
  );
};

export default Mapi;
