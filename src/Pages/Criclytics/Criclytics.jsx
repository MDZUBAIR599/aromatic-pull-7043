import { Stack, SimpleGrid, Box, Text, VStack, Image, HStack, Button } from "@chakra-ui/react"
import React from 'react'
import task from "./Cric.module.css"
import { data } from "./criclyticsApi"
import {dataCompleted} from "./CriclyticsCom"


console.log(dataCompleted)
const Criclytics = () => {
  return (

    <Stack border="1px solid grey" m="auto" w="970px" h="800px" bgColor="white" mt="100px">

      <SimpleGrid columns={[1, 1, 1, 1]} spacing={3} justify="center">
        <Box m="auto">
          <VStack >

            <Box w={["320px", "745px", "970px"]} h="200px" mb="5px">

<Box  className={task.slide}></Box>
            </Box>

            <Box w="970px" h="50px" bgColor="#172132" border="1px solid grey">
              <Text align="left" mt="10px" justify="center" fontSize="19px" fontWeight="600" color="#FFFFFF" fontFamily="M">UPCOMING</Text>
            </Box >

            <Box  w="970px" h="200px" mt="-50px" m="0px">
              <HStack  w="965px" h="325px" justifyContent="space-between" m="0px" mt="-60px" >
                {data.map((data) => (

                  <Box key={data.id} border="1px solid grey" w="320px" h="200px" borderRadius="10px" bgColor="white.100" >
                    <Box w="300px" h="auto" m="auto" mb="10px">
                      <Text color="#000000CC">{data.head}</Text>
                    </Box>
                    <Box border=".10px solid black" w="220px" m="auto" mt="-10px" mb="10px"></Box>

                    <HStack w="290px" h=" 100px" margin="auto">

                      <VStack  w="120px" h="100px" align="left">
                        <HStack >
                        <Box border=".20px solid grey"><Image w="30px" h="20px" src={data.img1} alt="pic1" /></Box>
                          <Text color="#000000CC">{data.team1}</Text>
                        </HStack>
                        <HStack>
                        <Box border=".20px solid grey"><Image align="left" w="30px" h="20px" src={data.img2} alt="pic2" /></Box>
                          <Text color="#000000CC">{data.team2}</Text>
                        </HStack>

                      </VStack>

                      <VStack border=".5px solid grey" h="90px"></VStack>


                      <VStack border="1px solid white" w="120px" h="100px" align="left">
                        <Text align="left" color="#000000">{data.date}</Text>
                        <Text align="left" color="#000000">{data.time}</Text>

                      </VStack>


                    </HStack>

                    <Box bgColor="#F16A3633" w="230px" h="20px" mt="10px" ml="10px" borderRadius="10px" color="#000000">{data.start}</Box>

                  </Box>
                ))}

              </HStack>

            </Box>
          </VStack>
        </Box>


        <Box>


        <VStack >
<Box border="1px solid grey" w="970px" h="50px" bgColor="#172132" >
  <Text align="left" mt="10px" justify="center" fontSize="19px" fontWeight="600" color="#FFFFFF" fontFamily="M">COMPLETED</Text>
</Box >

<Box  w="970px" h="400px" mt="-50px" m="0px">
  <HStack w="965px" h="325px" justifyContent="space-around" m="0px" mt="-60px" >
    {dataCompleted.map((data) => (

      <Box key={data.id} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" w="500px" h="150px" borderRadius="10px" bgColor="white.100" >
        <Box  w="300px" h="auto" ml="0px" mb="10px">
          <Text color="#000000CC">{data.head}</Text>
        </Box>
        <Box boxShadow= "rgba(1, 2, 3, 0.24) 0px 3px 8px" border=".10px solid grey" w="220px" ml="50px" mt="-10px" mb="20px"></Box>

        <HStack w="290px" h=" 80px" ml="20px">

          <VStack w="200px" h="80px" align="left">
            <HStack >
             <Box border="1px solid grey"> <Image w="30px" h="20px" src={data.img1} alt="pic1" /></Box>
              <Text color="#000000CC">{data.team1}</Text>
              <Text color="#000000CC">{data.score1}</Text>
              <Text color="#000000CC">{data.over1}</Text>
            </HStack>
            <HStack>
            <Box border="1px solid grey"> <Image align="left" w="30px" h="20px" src={data.img2} alt="pic2" /></Box>
              <Text color="#000000CC">{data.team2}</Text>
              <Text color="#000000CC">{data.score2}</Text>
              <Text color="#000000CC">{data.over2}</Text>
            </HStack>

          </VStack>

          {/* <VStack border=".5px solid grey" h="90px"></VStack> */}


          {/* <VStack border="1px solid white" w="120px" h="100px" align="left">
            <Text align="left" color="#000000">{data.date}</Text>
            <Text align="left" color="#000000">{data.time}</Text>

          </VStack> */}


        </HStack>

        <Box bgColor="#F16A3633" fontSize="12px" w="230px" h="20px" mt="0px" ml="10px" borderRadius="10px" color="#000000">{data.start}</Box>

      </Box>
    ))}

  </HStack>

</Box>
</VStack>

        </Box>
      </SimpleGrid>



    </Stack>
  )
}

export default Criclytics
