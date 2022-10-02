import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Player() {
  return (
    <Container maxW={"7xl"} mt='55px' boxShadow='md'>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images-cricketcom.imgix.net/news-1664509613670?auto=compress&dpr=2&fit=clip&w=976&h=400"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"} align='left'>
                <Text as={"b"} fontSize="2xl">Siraj replaces injured Jasprit Bumrah for South Africa T20Is</Text>
                <br />
                Mohammed Siraj has replaced Jasprit Bumrah for the remainder of
                the two matches against South Africa on Sunday, October 2nd at
                Guwahati and Tuesday, October 4th at Indore. In a press release,
                BCCI confirmed the inclusion of Siraj and the Hyderabad-born
                bowler is set to join the team ahead of the second game in
                Guwahati. Mohammed Siraj, who has made a comeback to the side,
                last featured for India in T20Is against Sri Lanka in February.
                The right-arm pacer is fairly new to international cricket in
                the shortest format and played only five games, scalping five
                wickets at an average of 41.8 and an economy rate of 10.5 runs
                per over. Bumrah, who missed the Asia Cup due to a recurrent
                back injury, made a comeback to the national side in the home
                series against Australia earlier in the week. However, the
                28-year-old has not fully recovered from the injury and,
                according to reports, has sustained a lower back stress
                fracture, which will rule him out for at least five to six
                months. "Bumrah is not going to play the World T20 for sure. He
                has a serious back condition. It's a stress fracture, and he
                could be out for a period of six months," a senior BCCI official
                told PTI on conditions of anonymity. This is the second injury
                blow to the Indian side ahead of the marquee event, with
                Ravindra Jadeja also ruled out to to a knee injury. "Losing
                Bumrah and Jadeja will be huge for India. 
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
