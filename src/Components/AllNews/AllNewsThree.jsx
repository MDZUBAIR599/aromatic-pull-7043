import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  
  export default function AllNewsThree() {
    return (
      <Stack
        minH={"25vh"}
        direction={{ base: "column", md: "row" }}
        boxShadow='md'
        w={"60%"}
        m="auto"
        mt={"1rem"}
      >
        <Flex flex={1}>
          <Image
            alt={"Siraj"}
            objectFit={"cover"}
            src={
              "https://images-cricketcom.imgix.net/news-1664386515438?auto=compress&dpr=2&w=1&h=200"
            }
          />
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
                Games like these help us learn a lot: Rohit Sharma
              </Text>
              <br />{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              align="left"
            >
             The India skipper claimed that challenging encounters like these go a long way in helping a side learn about itself
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justifyContent="space-between"
            >
              <Text rounded={"full"} color={"black"}>
              Anirudh Suresh

              </Text>
              <Text rounded={"full"}>28 Sep 2022</Text>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    );
  }
  