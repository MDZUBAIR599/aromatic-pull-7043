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
import OneBox from "./OneBox";
import TwoBox from "./TwoBox";
import ThirdBox from "./ThirdBox";
import FourthBox from "./FourthBox";

const Details = () => {
  return (
    <Box w="100%" h={"auto"} m="auto">
      {/* 1st Box */}
      <Box w={"60%"} h="auto" m="auto" boxShadow="2xl" bg="white" mt={"55px"}>
        <Box w={"98%"} h="auto" m="10px" boxShadow="md" bg="white">
          <WrapItem p={"10px"}>
            <Button
              w="8%"
              h="50px"
              bg={"#a40a12"}
              color="white"
              _hover={{ bg: "#a40a12" }}
            >
              INT
            </Button>
            <Heading
              as={"b"}
              p="10px"
              fontSize={{ base: "xs", sm: "xs", md: "lg" }}
              ml={"2rem"}
              w="50%"
            >
              South Africa tour of India, 2022
            </Heading>
          </WrapItem>
          <ChevronRightIcon fontSize={"4xl"} ml="79%" mt={"-6rem"} />
        </Box>

        {/* 3 Div */}
        {/* columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} */}

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/* 1st Box */}
          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"} >
              T20
            </Button>
            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              1st T20I
            </Text>
            <Box ml={"0.5rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-8rem">
                Thiruvananthapuram
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              {/* India */}
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/4_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-5px" size={"md"}>
                    IND
                  </Heading>
                </Box>

                <Text m="0.8rem" mr={"4rem"}>
                  Today
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/7_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="20px" size={"md"}>
                    SA
                  </Heading>
                </Box>
                <Text mr={"26px"} w="30%" mt={"12px"} align={"center"}>
                  7.00PM IST
                </Text>
              </Box>
            </Box>

            <Button borderRadius={"29px"} bg={"#feead9"} ml="-8.2rem">
              3 hrs 52 mins to toss
            </Button>
            <Box
              display={"flex"}
              justifyContent="space-between"
              w={"90%"}
              m="auto"
              mt={"0.9rem"}
            >
              <Text color={"red"}>49%</Text>
              <Text color={"green"}>51%</Text>
            </Box>
            <Box w={"90%"} h="6px" m="auto" mt={"0.5rem"} display="flex">
              <Box w={"49%"} bg="red"></Box>
              <Box w={"51%"} bg="green"></Box>
            </Box>

            <Box
              display={"flex"}
              justifyContent="space-between"
              w="90%"
              m={"auto"}
            >
              <Text>IND</Text>
              <Text>SA</Text>
            </Box>
          </Box>

          {/* 2nd box  */}

          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>

            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              2nd T20I
            </Text>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
                Guwahati
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              {/* India */}
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/4_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-5px" size={"md"}>
                    IND
                  </Heading>
                </Box>

                <Text mr={"26px"} w="40%" mt={"12px"}>
                  2nd October
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/7_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="20px" size={"md"}>
                    SA
                  </Heading>
                </Box>
                <Text mr={"26px"} w="40%" mt={"12px"}>
                  7.00PM IST
                </Text>
              </Box>
            </Box>

            <Button borderRadius={"29px"} bg={"#feead9"} ml="-12rem">
              4 days to go
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

          {/* 3rd Box */}

          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>
            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              3rd T20I
            </Text>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
                Indore
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              {/* India */}
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/4_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-5px" size={"md"}>
                    IND
                  </Heading>
                </Box>

                <Text mr={"26px"} w="40%" mt={"12px"}>
                  4th October
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/7_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="20px" size={"md"}>
                    SA
                  </Heading>
                </Box>
                <Text mr={"26px"} w="30%" mt={"12px"} align={"center"}>
                  7.00PM IST
                </Text>
              </Box>
            </Box>

            <Button borderRadius={"29px"} bg={"#feead9"} ml="-12rem">
              6 days to go
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

      <OneBox />

      <TwoBox />
      <ThirdBox />
      <FourthBox />
    </Box>
  );
};
export default Details;
