import { Box, Button, Heading, Select, Stack } from "@chakra-ui/react";
import Details from "./Details";

const Schedule = () => {
  return (
    <Box bg='#e8e9ef' h={'auto'} w='100%'>
      {/* Heading */}

      <Box
        w={"60%"}
        height={"100px"}
        // border="1px solid black"
        m={"auto"}
        mt="0px"
       
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
          <Button w={"15%"} variant="outline" colorScheme={"black"}>
            UPCOMING
          </Button>
          <Button w={"15%"} variant="outline" colorScheme={"black"}>
            LIVE
          </Button>
          <Button w={"15%"} variant="outline" colorScheme={"black"}>
            RESULTS
          </Button>


          <Stack  w={"22%"}>
            <Select ml={"230px"} bg="#a40a12" color={"white"} placeholder="ALL">
              <option value="INTERNATIONAL">INTERNATIONAL</option>
              <option value="DOMESTIC">DOMESTIC</option>
            </Select>
          </Stack>


        </Stack>
      </Box>

        <Details />




    </Box>



  );
};
export default Schedule;
