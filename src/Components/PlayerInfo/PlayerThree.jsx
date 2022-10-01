import {
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export default function PlayerThree() {
  return (
    <Container maxW={"7xl"} mt="55px" boxShadow='md'>
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
              "https://s3.ap-south-1.amazonaws.com/image.cricket.com/temp%2Fe973e2a7ad30cbcd06d6cfcaa4ff07763174caf8.jpeg?auto=compress&dpr=2&fit=clip&w=976&h=400"
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
              <Text fontSize={"lg"} align="left">
                <Text as={"b"} fontSize="2xl">
                  Chennai, 1998 – When Sachin Tendulkar was at his best
                </Text>
                <br />
                While there could be numerous factors that decide what
                constitutes the peak of sport, contests between legendary
                players is always up there. When you have two world-class
                sportspersons competing against each other, the spectacle is
                often at its pinnacle. In cricket, while there have been many
                instances of superstars coming up against each other, one that
                stands out over the last 25 years is the one between Sachin
                Tendulkar and Shane Warne. On one hand, you had one of the most
                masterful batsmen of all time. On the other, you had a masterly
                bowler whose leg-spin bamboozled nearly every batter who faced
                it. In 1998, the two players were at their respective peaks when
                Australia toured India and it was a contest that people couldn’t
                wait to witness. While that was the chief talking point going
                into the tour, there was also the matter of the team from Down
                Under having not won a Test series in India since 1969.Coming
                into the Chennai Test, the first game of the series, Tendulkar
                and Warne had already faced off in a warm-up encounter that
                preluded the international matches. Playing for Mumbai,
                Tendulkar had played a dream innings, notching up a double
                hundred at a strike rate of over 100. Warne, on the other hand,
                had a match to forget, conceding 111 runs in 16 overs. While
                this might have only been a practice match, you could possibly
                say it played a significant role in what was to come in the
                following couple of months. When it came to the Test series,
                though, it was Warne who won the first battle. In India’s first
                innings at Chepauk, Tendulkar looked to take the attack to the
                Australian leg-spinner like he had done in the practice match
                but was dismissed for just four with Mark Taylor holding on to a
                sharp catch at slip. While the visitors had got a first-innings
                lead of 71, the match was evenly poised when Tendulkar walked
                out to bat in the second innings. A fifty from Navjot Singh
                Sidhu, his second of the game, had seen India erase Australia’s
                lead and there was everything to play for with two days of
                cricket left.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
