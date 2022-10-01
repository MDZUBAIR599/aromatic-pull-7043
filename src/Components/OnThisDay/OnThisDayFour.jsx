import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function OnThisDayFour() {
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
            "https://s3.ap-south-1.amazonaws.com/image.cricket.com/temp%2F93a2a8cea3c771250f8ebc84c0da3a721c8ab6cf.png?auto=compress&dpr=2&w=1&h=200"
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
              When a dominant India won the World Championship of Cricket
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            On this day (March 10) in 1985, India defeated Pakistan by eight
            wickets to win the final of an event that had all the top teams in
            the world taking part
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Cricket.Com Staff
            </Text>
            <Text rounded={"full"}>10 Mar 2021</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
