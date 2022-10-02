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

export default function PlayerOne() {
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
              "https://images-cricketcom.imgix.net/news-1664530787628?auto=compress&dpr=2&fit=clip&w=976&h=400"
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
                  Whatever we have done is within the rules: Harmanpreet on
                  Dean's run-out
                </Text>
                <br />
                The Women's Asia Cup is returning to the international calendar
                after a four-year-long hiatus, with the defending champions,
                Bangladesh, all set to host the eighth season of the
                competition. The runner-up in the last edition, India will lock
                horns against Sri Lanka in the second match of the Asia Cup on
                Saturday, 1st October, in Sylhet. The Women in Blue are riding
                high on confidence after their emphatic 3-0 series win over
                England in their own backyard. While they were dominant through
                the white-ball series, the run-out of Charlie Dean backing up at
                the Home of Cricket has been a major talking point all through
                social media. In a pre-match press conference, Harmanpreet Kaur
                said, "We were noticing from the last couple of games that she
                was taking a long stride and taking undue advantage. So I think
                it was Deepti's awareness, and it was not part of the plan to
                get her out like this, but everybody is out there to win a
                game." "It is very important to play within the rules and
                whatever we have done was within the rules, and we need to move
                on from it and focus on the coming games," she further added.
                The skipper stated that their aim was to follow the process and
                stick to their plans in England which helped them reap massive
                dividends. "When we went to England, our aim was to play good
                cricket, and we did not put any pressure on ourselves. We were
                just going through the process and did a lot of match-specific
                planned sessions. We were just sticking to our plans, and the
                process and the results automatically followed," she said. The
                Women in Blue will compete in plenty of T20I matches before the
                World Cup set to commence early next year in South Africa,
                giving the team plenty of opportunities to fine-tune their
                combinations ahead of the marquee event. "There will be a lot of
                T20 matches as opposed to ODI games because the World Cup is
                coming, and we want to have a good number of matches that we
                have played. We can give the players a lot more opportunities to
                gain some valuable match time in the middle in the lead-up to
                the T20 World Cup," Harmanpreet said.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
