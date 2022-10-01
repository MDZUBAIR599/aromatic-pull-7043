import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function AllNewsTwo() {
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
            "https://images-cricketcom.imgix.net/news-1664525030173?auto=compress&dpr=2&w=1&h=200"
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
              T20 WC winning team to get USD 1.6 million as prize money: ICC
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            The runner-up side will get half the amount of the winning team's
            prize purse
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              PTI
            </Text>
            <Text rounded={"full"}>2 hrs 18 mins ago</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
