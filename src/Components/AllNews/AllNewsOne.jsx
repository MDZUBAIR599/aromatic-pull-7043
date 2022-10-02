import {
  Flex,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AllNewsFive from "./AllNewsFive";
import AllNewsFour from "./AllNewsFour";
import AllNewsThree from "./AllNewsThree";
import AllNewsTwo from "./AllNewsTwo";

export default function AllNewsOne() {
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
        <Link to="/harmanpreet"><Image
          alt={"Siraj"}
          objectFit={"cover"}
          src={
            "https://images-cricketcom.imgix.net/news-1664530787628?auto=compress&dpr=2&w=1&h=200"
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
              Whatever we have done is within the rules: Harmanpreet on Dean's
              run-out
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            The skipper also stated that the team noticed Charlie Dean take a
            long stride since the last couple of matches
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Shweta Haranhalli
            </Text>
            <Text rounded={"full"}>34 mins ago</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>

    <AllNewsTwo />
    <AllNewsThree />
    <AllNewsFour />
    <AllNewsFive />
    </Box>
  );
}
