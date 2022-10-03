import { Box, Button, Heading, Select, Stack } from "@chakra-ui/react";
import Result from "../Result/Result";
import Live from "../Live/Live";
import { useState } from "react";
import Details from "./Details";

const Head = () => {
  const [live, setLive] = useState(false);
  const [result, setResult] = useState(false);
  const [upcoming, setUpcoming] = useState(false);

  const handleLive = () => {
    console.log("live");
    setLive(true);
    setResult(false);
    setUpcoming(false);
  };
  const handleUpcoming = () => {
    console.log("upcoming");
    setLive(false);
    setResult(false);
    setUpcoming(true);
  };

  const handleResult = () => {
    setLive(false);
    setResult(true);
    setUpcoming(false);
  };

  return (
    <Box bg="#e8e9ef" h={"auto"} w="100%">
      {/* Heading */}

      <Box
        w={"90%"}
        height={"100px"}
        // border="1px solid black"
        m={"auto"}
        mt="105px"
      >
        <Heading
          textAlign={"left"}
          as="h4"
          size="md"
          ml={"10px"}
          color="#454547"
        >
          Schedule
        </Heading>
        <Stack
          direction="row"
          spacing={4}
          align="center"
          ml={"10px"}
          mt={"10px"}
        >
          <Button
            w={"15%"}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            onClick={handleUpcoming}
          >
            UPCOMING
          </Button>
          <Button
            w={"15%"}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            onClick={handleLive}
          >
            LIVE
          </Button>
          <Button
            w={"15%"}
            variant="outline"
            bg="#a40a12"
            color={"white"}
            _hover={{ bg: "#a40a12" }}
            onClick={handleResult}
          >
            RESULTS
          </Button>

          <Stack w={"22%"}>
            <Select ml={"230px"} bg="#a40a12" color={"white"} placeholder="ALL">
              <option value="INTERNATIONAL">INTERNATIONAL</option>
              <option value="DOMESTIC">DOMESTIC</option>
            </Select>
          </Stack>
        </Stack>
      </Box>

      <div>{result ? <Result /> : live ? <Live /> : <Details />}</div>
    </Box>
  );
};
export default Head;
