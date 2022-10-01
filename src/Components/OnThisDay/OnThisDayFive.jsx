import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function OnThisDayFive() {
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
        <Link to='/sachin'><Image
          alt={"Siraj"}
          objectFit={"cover"}
          src={
            "https://s3.ap-south-1.amazonaws.com/image.cricket.com/temp%2Fe973e2a7ad30cbcd06d6cfcaa4ff07763174caf8.jpeg?auto=compress&dpr=2&w=1&h=200"
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
              Chennai, 1998 – When Sachin Tendulkar was at his best
            </Text>
            <br />{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={"gray.500"}
            align="left"
          >
            On this day (March 9) in 1998, Sachin Tendulkar unleashed one of the
            most breathtaking displays of attacking batting in Test cricket
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Text rounded={"full"} color={"black"}>
              Nitin Fernandes
            </Text>
            <Text rounded={"full"}>09 Mar 2021</Text>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
