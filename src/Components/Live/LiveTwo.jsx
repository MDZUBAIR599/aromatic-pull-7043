import React from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  SimpleGrid,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ImLocation } from "react-icons/im";

const LiveTwo = () => {
  return (
    <Box w="90%" h={"auto"} m="auto" mt={'55px'}>
      {/* 1st Box */}
      <Box w={"90%"} h="450px" m="auto" boxShadow="2xl" bg="white">
        <Box w={"98%"} h="70px" m="10px" boxShadow="md" bg="white">
          <WrapItem p={"10px"}>
            <Button
              w="8%"
              h="50px"
              bg={"#163567"}
              color="white"
              _hover={{ bg: "#163567" }}
            >
              DOM
            </Button>
            <Heading as={"b"} p="10px" fontSize="l" ml={"2rem"}>
              KCA Presidents Cup T20, 2022
            </Heading>
            <ChevronRightIcon fontSize={"4xl"} ml="59%" mt={"1%"} />
          </WrapItem>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/* 1st Box */}
          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>
            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              Match 18
            </Text>
            <Box>
              <Button
                w={"25%"}
                display={"flex"}
                ml="16rem"
                mt={"-1.5rem"}
                borderRadius="25px"
                justifyContent={"space-evenly"}
                background="none"
                border={"1px solid black"}
                fontSize="xs"
              >
                <Box
                  w={"12%"}
                  h="10px"
                  // border={"1px solid black"}
                  bg="green"
                  borderRadius="50%"
                ></Box>
                Live
              </Button>
            </Box>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
              Alappuzha

              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"45%"}
                    m="1rem"
                    src="https://www.cricket.com/svgs/images/flag_empty.svg"
                  />
                  <Heading m={"-2.5rem"} mr="-9rem" size={"md"}>
                    TUS
                  </Heading>
                </Box>

                <Text m="0.8rem" mr={"4rem"}>
                  113/6 (20.0)
                </Text>
              </Box>

              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"45%"}
                    m="1rem"
                    src="https://www.cricket.com/svgs/images/flag_empty.svg"
                  />
                  <Heading m={"-2.5rem"} mr="-9rem" size={"md"}>
                    EAG
                  </Heading>
                </Box>
                <Text
                  mr={"26px"}
                  w="30%"
                  mt={"15px"}
                  align={"center"}
                  ml="15px"
                >
                  368
                </Text>
              </Box>
            </Box>

            <Button
              borderRadius={"29px"}
              bg={"#feead9"}
              ml="-8.2rem"
              fontSize={"xs"}
            >
              Innings Break - EAG need 114 runs

            </Button>
            <Box display={"flex"} mt="1rem" ml={"1rem"}>
              <Image
                w={"12%"}
                src="https://www.cricket.com/pngs/prediction-loader.png"
              />
              <Text mt={"0.5rem"} color="grey">
                Win projections to be updated soon
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default LiveTwo;
