import { Box, Button, Heading, Select, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import AllNewsOne from "../AllNews/AllNewsOne";
import OnThisDayOne from "../OnThisDay/OnthisDayOne";
import NewsCard from "./NewsCard";

const Head = () => {
  const [latest, setLatest] = useState(false);
  const [news, setNews] = useState(false);
  const [day, setDay] = useState(false);
  const [match, setMatch] = useState(false);
  const [features, setFeatures] = useState(false);

  const handleLatest = () => {
    setLatest(true);
    setNews(false);
    setDay(false);
    setMatch(false);
    setFeatures(false);
  };
  const handleNews = () => {
    setLatest(false);
    setNews(true);
    setDay(false);
    setMatch(false);
    setFeatures(false);
  };

  const handleDay = () => {
    setLatest(false);
    setNews(false);
    setDay(true);
    setMatch(false);
    setFeatures(false);
  };
  const handleMatch = () => {
    setLatest(false);
    setNews(false);
    setDay(false);
    setMatch(true);
    setFeatures(false);
  };
  const handleFeatues = () => {
    setLatest(false);
    setNews(false);
    setDay(false);
    setMatch(false);
    setFeatures(true);
  };

  return (
    <Box bg="#e8e9ef" h={"auto"} w="100%">
      {/* Heading */}

      <Stack
        w={"60%"}
        height={"100px"}
        // border="1px solid black"
        m={"auto"}
        mt="105px"
      >
        <Heading
          textAlign={"left"}
          as="h4"
          size="md"
          ml={"10px"}
          color="#454547"
        >
          News & Articles
        </Heading>
        <Stack spacing={4} direction="row" align="center" w={"90%"} m={"auto"}>
          <Button
            colorScheme="teal"
            size="xs"
            w={"25%"}
            fontSize={{ base: "xs", lg: "md" }}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            h="3rem"
            onClick={handleLatest}
          >
            LATEST
          </Button>

          <Button
            colorScheme="teal"
            size="xs"
            w={"25%"}
            fontSize={{ base: "xs", lg: "md" }}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            h="3rem"
            onClick={handleNews}
          >
            NEWS
          </Button>

          <Button
            colorScheme="teal"
            size="xs"
            w={"45%"}
            fontSize={{ base: "xs", lg: "sm" }}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            h="3rem"
            onClick={handleDay}
          >
            ON THIS
            <br />
            DAY
          </Button>

          <Button
            colorScheme="teal"
            size="xs"
            w={"65%"}
            fontSize={{ base: "xs", lg: "xs" }}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            h="3rem"
            onClick={handleMatch}
          >
            MATCH
            <br />
            RELATED
          </Button>

          <Button
            colorScheme="teal"
            size="xs"
            w={"40%"}
            fontSize={{ base: "xs", lg: "md" }}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            h="3rem"
            onClick={handleFeatues}
          >
            FEATURES
          </Button>
        </Stack>
      </Stack>

      <div>
        {news ? (
          <AllNewsOne />
        ) : day ? (
          <OnThisDayOne />
        ) : match ? (
          <AllNewsOne />
        ) : (
          <NewsCard />
        )}
      </div>
    </Box>
  );
};
export default Head;
