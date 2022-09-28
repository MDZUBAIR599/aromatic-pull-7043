import React from 'react'
import { Stack, SimpleGrid, Box, Text, VStack, Image, HStack, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { SiGooglemaps } from "react-icons/si";
//w="970px" h="980px"
//bgColor="#777777"
const Fantacy = () => {
  return (
    <Stack border="1px solid red" m="auto" w="970px" h="980px" bgColor="black" >


      <SimpleGrid columns={[1, 2, 2, 2]} spacing={3} justify="center">



        <Box border="1px solid blue" w={["100%", "70", "95%"]} h="auto" ml={5}>
          <Text fontSize={["12px", "14px", "14px"]} p="0px 0px 0px 4px" textColor="grey" align="left">UPCOMING MATCHES</Text>

          <VStack border="1px solid green" h="200px" align="left" >

            <Box border="1px solid #FFB600" w="90%" h="150px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>1st Semi-Final, Road Safety T20 World Series ,2022</Text>

              <HStack justify="center" p={2}>
                <Box border="1px solid yellow" w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/4_flag_safari.png" alt="pic" /></Box>
                <Text>IN-L</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>
                <Text>AU-L</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="0%"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/3_flag_safari.png" alt="pic" /></Box>
              </HStack>
              <HStack justify="space-between" >
                <Box ml="80px"pb={2}><Text>start in 6h 57min 39sec  </Text></Box>
               <Box mr="-80px"><Box><Button mt="-15px" color="yellow" border="none" bgColor="#FFFFFF3333"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>
              <HStack justify="center">
                <Text>September 28 2022. |</Text>
                <HStack>
                  <Box ><SiGooglemaps /></Box>
                  <Text>Raipur</Text>
                </HStack>
              </HStack>
            </Box>

          </VStack>



          <Text fontSize={["12px", "14px", "14px"]} p="0px 0px 0px 4px" textColor="grey" align="left">COMPLETED MATCHES</Text>
          <VStack border="1px solid green" h="150px" align="left" >

            <Box border="1px solid #FFB600" w="90%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>Eliminator, Caribbean Premier League ,2022</Text>

              <HStack justify="center" p={2}>
                <Box border="1px solid yellow" ml={-40} w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/1410_flag_safari.png" alt="pic" /></Box>
                <Box border="1px solid yellow" pl="-30px" borderRadius="6px" w="35px" h="30px"><Text align="center" fontSize="14px" fontWeight="600">SLK</Text></Box>

                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>

                <Box border="1px solid yellow" borderRadius="6px" w="35px" h="30px" justify="center" bgColor="#FFB600"><Text color="black" align="center" fontSize="14px" fontWeight="600">JAM</Text></Box>
              </HStack>
              <HStack justify="center">
                <Box ml={-6}><Text>JAM Won by 33 runs  </Text></Box>
               <Box> <Box border="1px solid yellow"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>

            </Box>

          </VStack>


          <VStack border="1px solid green" h="150px" align="left" >

<Box border="1px solid #FFB600" w="90%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

  <Text fontSize={["8px", "10px", "12px"]} isTruncated>2nd T20, Bangladesh Tour of UAE ,2022</Text>

  <HStack justify="center" p={2}>
    <Box border="1px solid yellow" ml={-40} w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/2_flag_safari.png" alt="pic" /></Box>
    <Box border="1px solid yellow" pl="-30px" borderRadius="6px" w="35px" h="30px" ><Text color="white" align="center" fontSize="14px" fontWeight="600">UAE</Text></Box>

    <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>

    <Box border="1px solid yellow" borderRadius="6px" w="35px" h="30px" justify="center" bgColor="#FFB600"><Text align="center" fontSize="14px" fontWeight="600">BAN</Text></Box>
  </HStack>
  <HStack justify="center">
    <Box ml={-6}><Text>BAN Won by 26 runs  </Text></Box>
    <Box border="1px solid yellow"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box>
  </HStack>

</Box>

</VStack>




<VStack border="1px solid green" h="150px" align="left" >

<Box border="1px solid #FFB600" w="90%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

  <Text fontSize={["8px", "10px", "12px"]} isTruncated>Match 20, Road Safety T20 World T20 Series ,2022</Text>

  <HStack justify="center" p={2}>
    <Box border="1px solid yellow" ml={-40} w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
    <Box border="1px solid yellow" pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text color="black" align="center" fontSize="14px" fontWeight="600">EN-L</Text></Box>

    <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>

    <Box border="1px solid yellow" borderRadius="6px" w="35px" h="30px" justify="center"><Text align="center" fontSize="14px" fontWeight="600">AU-L</Text></Box>
  </HStack>
  <HStack justify="center">
    <Box ml={-6}><Text>EN-L Won by 36 runs  </Text></Box>
    <Box border="1px solid yellow"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box>
  </HStack>

</Box>

</VStack>

        </Box>



        <Box border="1px solid yellow" w={["100%", "70%", "95%"]} h="auto" mr="-10px" >

          <VStack border="1px solid green" h="242px" align="left" pt={5}>

            <Box border="1px solid blue" w="90%" h="150px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>5th T20, England Tour of Pakistan ,2022</Text>

              <HStack justify="center" p={2}>
                <Box border="1px solid yellow" w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/6_flag_safari.png" alt="pic" /></Box>
                <Text>PAK</Text>
                <Box border="1px solid yellow" w="30px" h="30px" ><Text>vs</Text></Box>
                <Text>ENG</Text>
                <Box border="1px solid yellow" w="30px" h="30px" ><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/3_flag_safari.png" alt="pic" /></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="100px" pb={2}><Text>start in 6h 57min 39sec  </Text></Box>
                <Box ><Box><Button mt="-15px" border="none" bgColor="#FFFFFF3333" color="yellow"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>
              <HStack justify="center">
                <Text >September 28 2022. |</Text>
                <HStack>
                  <Box ><SiGooglemaps /></Box>
                  <Text>lahore</Text>
                </HStack>
              </HStack>
            </Box>

          </VStack>

          <VStack border="1px solid green" h="150px" align="left" >

            <Box border="1px solid #FFB600" w="90%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>Qualifier 1,Caribbean Premier League ,2022</Text>

              <HStack justify="center" p={2}>
                <Box border="1px solid yellow" ml={-40} w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/1405_flag_safari.png" alt="pic" /></Box>
                <Box border="1px solid yellow" pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text color="black" align="center" fontSize="14px" fontWeight="600">BR</Text></Box>

                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>

                <Box border="1px solid yellow" borderRadius="6px" w="35px" h="30px" justify="center"><Text align="center" fontSize="14px" fontWeight="600">GUY</Text></Box>
              </HStack>
              <HStack justify="center">
                <Box ml={-6}><Text>BR Won by 33 runs  </Text></Box>
                <Box border="1px solid yellow"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box>
              </HStack>

            </Box>

          </VStack>



          <VStack border="1px solid green" h="150px" align="left" >

<Box border="1px solid #FFB600" w="90%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

  <Text fontSize={["8px", "10px", "12px"]} isTruncated>Match 19, Road Safety T20 World T20 Series ,2022</Text>

  <HStack justify="center" p={2}>
    <Box border="1px solid yellow" ml={-40} w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
    <Box border="1px solid yellow" pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text color="black" align="center" fontSize="14px" fontWeight="600">SL-L</Text></Box>

    <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%"><Text>vs</Text></Box>

    <Box border="1px solid yellow" borderRadius="6px" w="35px" h="30px" justify="center"><Text align="center" fontSize="14px" fontWeight="600">BD-L</Text></Box>
  </HStack>
  <HStack justify="center">
    <Box ml={-6}><Text>SL-L Won by 70 runs  </Text></Box>
    <Box border="1px solid yellow"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box>
  </HStack>

</Box>

</VStack>

        </Box>

      </SimpleGrid>

    </Stack>
  )
}

export default Fantacy

