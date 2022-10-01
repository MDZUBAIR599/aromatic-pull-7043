import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function OnThisDayThree() {
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
            "https://images.cricket.com/articles/1593067975827_big_safari.jpg?auto=compress&dpr=2&w=1&h=200"
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
              Kapil’s Devils - the greatest underdog story
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            On this day in 1983, India won the World Cup for the first time and,
            here, we look back at how the biggest fairytale in Indian cricket
            came about
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Shubh Aggarwal
            </Text>
            <Text rounded={"full"}>25 Jun 2021</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
