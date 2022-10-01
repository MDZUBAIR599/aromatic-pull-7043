import {
    Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import OnThisDayFive from "./OnThisDayFive"
import OnThisDayFour from "./OnThisDayFour"
import OnThisDayThree from "./OnThisDayThree"
import OnThisDayTwo from "./OnThisDayTwo"

export default function OnThisDayOne() {
  return (
    <Box>
    <Stack
      minH={"25vh"}
      direction={{ base: "column", md: "row" }}
      boxShadow='md'
      w={"60%"}
      m="auto"
      mt={"1rem"}
    >
      <Flex flex={1}>
        <Link to='/rickypointing'><Image
          alt={"Siraj"}
          objectFit={"cover"}
          src={
            "https://images.cricket.com/articles/1595518175574_big_safari.jpg?auto=compress&dpr=2&w=1&h=200"
          }
        />
        </Link>
      </Flex>
      <Flex p={8} flex={1} align={"left"} justify={"left"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "lg", lg: "xl" }} align="left">
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "40%",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              A Brief History of DRS
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            From a faulty system to a necessity in modern-cricket, we look back
            at DRS' journey on the day it made its international debut
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Shubh Aggarwal
            </Text>
            <Text rounded={"full"}>23 Jul 2021</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>

    
            <OnThisDayTwo />
            <OnThisDayThree />
            <OnThisDayFour />
            <OnThisDayFive />

    </Box>
  );
}
