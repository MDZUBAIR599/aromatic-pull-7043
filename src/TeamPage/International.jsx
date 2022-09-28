import React from 'react'
import { Grid } from "@chakra-ui/react";
import { Box, Image, Text } from "@chakra-ui/react";

import "./team.css";

const International = () => {
  return (
    <>
        {/* mens div */}

       <Box
          fontSize={17}
          fontFamily="Montserrat"
          fontWeight={700}
          textAlign="left"
          w="95%"
          mx="auto"
          pt={3}
          pb={3}
        >
          MEN'S{" "}
        </Box>
        <Grid id="Rahul" templateColumns="repeat(4, 1fr)" gap={3} width="95%" mx="auto">
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text  textAlign="center" fontSize="14px" p={3} fontWeight="600">
              Australia
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text textAlign="center" fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Afganistan
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1188_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Bangladesh
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F2_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              England
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F3_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={3}
          mt={5}
          width="95%"
          mx="auto"
          id="Rahul"
        >
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              India
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F4_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              New Zewland
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F5_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Pakistan
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F6_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
            South Africa
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F7_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={3}
          mt={5}
          width="95%"
          mx="auto"
          id="Rahul"
        >
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Sri Lanka
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F8_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              West Indies
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F9_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* womens div */}
        <Box
          fontSize={17}
          fontFamily="Montserrat"
          fontWeight={700}
          textAlign="left"
          w="95%"
          mx="auto"
          pt={3}
          pb={3}
        >
          WOMEN'S{" "}
        </Box>
        <Grid id="Rahul" templateColumns="repeat(4, 1fr)" gap={3} width="95%" mx="auto">
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Australia  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              England  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              India  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              New ZewLand  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Pakistan  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              South Africa  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              Sri Lanka  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=%2Fpngs%2Fteam-web.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid boxShadow="lg" maxW="100%" borderWidth="1px" overflow="hidden">
            <Text fontSize="14px" p={3} fontWeight="600">
              West Indies  Women
            </Text>
            <Image
              src="https://www.cricket.com/_next/image?url=https%3A%2F%2Fimages.cricket.com%2Fteams%2F1135_actionshot_safari.jpg&w=1920&q=75"
              alt=""
            />
            <Text fontSize="10.4px" p={1} opacity={0.5} fontWeight="100">
              ICC Ranking
            </Text>
            <Grid
              templateColumns="repeat(3, 1fr)"
              borderTop="1px"
              borderColor="#e5e4e2"
            >
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  1
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  Test
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  4
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  ODI
                </Text>
              </Grid>
              <Grid>
                <Text fontFamily="Oswald" fontSize="14px" pt={1} color="red">
                  6
                </Text>
                <Text
                  fontFamily="Montserrat"
                  fontSize="9.6px"
                  color="#000000"
                  pb={1}
                  opacity={0.5}
                  fontWeight="100"
                >
                  T20
                </Text>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
       
    </>
  )
}

export default International
