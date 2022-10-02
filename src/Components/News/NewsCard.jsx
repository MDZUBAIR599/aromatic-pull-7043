import {
  Button,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import NewsCardOne from "./NewsCardOne";
import NewsCardTwo from "./NewsCardTwo";
import NewsCardThree from "./NewsCardThree"
import NewsCardFour from "./NewsCardFour"
import NewsCardFive from "./NewsCardFive"
import NewsCardSix from "./NewsCardSix"
import NewsCardSeven from "./NewsCardSeven"
import { Link } from "react-router-dom";



export default function NewsCard() {
  return (
    <Box>
    <Stack
      minH={"25vh"}
      direction={{ base: "column", md: "row" }}
      boxShadow='md'
      w={"80%"}
      m="auto"
      mt={'1rem'}
    >
      <Flex flex={1}>
        <Link to="/player"><Image
          alt={"Siraj"}
          objectFit={"cover"}
          src={
            "https://images-cricketcom.imgix.net/news-1664509613670?auto=compress&dpr=2&w=1&h=200"
          }
        />
        </Link>
      </Flex>
      <Flex p={8} flex={1} align={"left"} justify={"left"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "lg", lg: "xl" }}  align= "left">
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
              Siraj replaces injured Jasprit Bumrah for South Africa T20Is
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            The speedster missed the first T20I with a back injury and is in
            doubt for the T20 World Cup
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Shweta Haranhalli
            </Text>
            <Text rounded={"full"}>30 Sep 2022</Text>
          </Stack>
        </Stack>
      </Flex>


    </Stack>
              <NewsCardOne />
              <NewsCardTwo />
              <NewsCardThree />
              <NewsCardFour />
              <NewsCardFive />
              <NewsCardSix />
              <NewsCardSeven />
    
    </Box>
  );
}
