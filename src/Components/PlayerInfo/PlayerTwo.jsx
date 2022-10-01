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

export default function PlayerTwo() {
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
              "https://images.cricket.com/articles/1595518175574_big_safari.jpg?auto=compress&dpr=2&fit=clip&w=976&h=400"
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
                  A Brief History of DRS
                </Text>
                <br />
                In the second Ashes Test at Edgbaston in 2005, Michael
                Kasprowicz gloved a rising delivery from Steve Harmison to
                Geraint Jones behind the stumps. The umpire, Billy Bowden raised
                his crooked finger to a vociferous appeal. That was the last
                Australian wicket remaining. They lost a nail-biter by 2 runs.
                The replays suggested that Kasprowicz’s hand was off the bat
                when he gloved the bouncer. According to the rule book, he was
                not out. However, it was nearly impossible for Bowden to spot
                that in the split second during which the ball passed the
                batsman. It was quite similar to marginal run-out and stumping
                decisions, called by the on-field umpires until 1992. They did
                so standing yards away from the action with the event taking
                place in a fraction of a second. In cricket’s first introduction
                to technology, the third umpire (or TV umpire) was employed to
                assist the on-field umpires to make such decisions through TV
                replays. It turned out to be an extremely helpful exercise,
                becoming a necessity in modern-day cricket. Fast forward to
                January 2008, Cricket Australia’s chief executive, James
                Sutherland told the Australian, "There have been some advances
                in technology that cricket can continue to explore”.
                Sutherland’s comments came during the course of a controversial
                Test match between Australia and India in Sydney. The match
                constituted a series of howlers by umpires Steve Bucknor and
                Mark Benson. It led to a furore and Bucknor, who was supposed to
                officiate in the subsequent Test was sent back home. Sutherland
                advocated the concept of player referrals after a second
                consecutive poor day for the umpires. By March, ICC approved the
                trial of the review system during a Test series in the calendar
                year. The England and South Africa boards failed to reach an
                agreement to implement the new system in the 2008 Basil
                D'Oliveira Trophy. But Sri Lanka and India agreed. The Umpire
                Decision Review System (popular as DRS) made its debut on this
                day in 2008 at SSC, Colombo.
              </Text>
            </VStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
