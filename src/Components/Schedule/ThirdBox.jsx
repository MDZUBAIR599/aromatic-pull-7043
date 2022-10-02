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

const ThirdBox = () => {
  return (
    <Box w="100%" h={"auto"} m="auto">
      {/* 1st Box */}
      <Box w={"90%"} h="auto" m="auto" boxShadow="2xl" bg="white" mt={"55px"}>
        <Box w={"98%"} h="auto" m="10px" boxShadow="md" bg="white">
          <WrapItem p={"10px"} w="98%">
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
              Women's Twenty20 Asia Cup, 2022
            </Heading>
          </WrapItem>
          <ChevronRightIcon fontSize={"4xl"} ml="79%" mt={"-6rem"} />
        </Box>

        {/* 3 Div */}

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {/* 1st Box */}
          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>
            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              Match 1
            </Text>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
                Sylhet
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              {/* India */}
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/1276_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="-25px" size={"md"}>
                    BD-W
                  </Heading>
                </Box>

                <Text mr={"26px"} w="40%" mt={"12px"}>
                  1st October
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/1482_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="-35px" size={"md"}>
                    TL-W
                  </Heading>
                </Box>
                <Text mr={"12px"} w="60%" mt={"12px"} align={"center"}>
                  8.30AM IST
                </Text>
              </Box>
            </Box>

            <Button borderRadius={"29px"} bg={"#feead9"} ml="-12rem">
              3 days to go
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

          {/* 2nd box  */}

          <Box w={"98%"} h={"auto"} ml="10px" boxShadow="dark-lg">
            <Button bg={"#999999"} color="white" size="xs" ml={"-17rem"}>
              T20
            </Button>

            <Text ml={"-10rem"} mt="-6%" color="#000" fontSize="m">
              Match 2
            </Text>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
                Sylhet
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
                  <Heading m={"-2.2rem"} mr="-21px" size={"md"}>
                    IN-W
                  </Heading>
                </Box>

                <Text mr={"26px"} w="40%" mt={"12px"}>
                  1st October
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/1133_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="-25px" size={"md"}>
                    NZ-W
                  </Heading>
                </Box>
                <Text mr={"26px"} w="40%" mt={"12px"}>
                  1.00PM IST
                </Text>
              </Box>
            </Box>

            <Button borderRadius={"29px"} bg={"#feead9"} ml="-12rem">
              3 days to go
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
              Match 3
            </Text>
            <Box ml={"2rem"} mt="0.8rem" color={"#999999"}>
              <ImLocation />
              <Text mt={"-1.35rem"} ml="-12rem">
                Sylhet
              </Text>
            </Box>

            <Box w={"80%"} h="100px" m="1rem">
              {/* India */}
              <Box display={"flex"} justifyContent="space-between">
                <Box>
                  <Image
                    w={"12%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/6_flag_safari.png"
                  />
                  <Heading m={"-2.2rem"} mr="-25px" size={"md"}>
                    PK-W
                  </Heading>
                </Box>

                <Text mr={"36px"} w="40%" mt={"12px"}>
                  2nd October
                </Text>
              </Box>

              {/* South Africa */}
              <Box display={"flex"} h="50px">
                <Box>
                  <Image
                    w={"15%"}
                    m="1rem"
                    src="https://images.cricket.com/teams/1638_flag_safari.png"
                  />
                  <Heading m={"-2.3rem"} mr="-39px" size={"md"}>
                    ML-W
                  </Heading>
                </Box>
                <Text mr={"26px"} w="60%" mt={"12px"} align={"center"}>
                  8.30AM IST
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
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default ThirdBox;
