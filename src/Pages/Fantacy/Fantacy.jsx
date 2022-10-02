import React from 'react'
import { Stack, SimpleGrid, Box, Text, VStack, Image, HStack, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { SiGooglemaps } from "react-icons/si";
import FantacyHeader from './FantacyHeader';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Fotter/Footer';
//w="970px" h="980px"
//bgColor="#777777"
const Fantacy = () => {
  return (

    <Stack m="auto" w="970px" h="1100px" bgColor="black" mt="100px" >

      <FantacyHeader />
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={3} justify="center">



        <Box color={"white"}w={["100%", "70", "95%"]} h="auto" ml={5}>
          <Text fontSize={["12px", "14px", "14px"]} p="0px 0px 0px 4px" textColor="grey" align="left" fontWeight="600">UPCOMING MATCHES</Text>

          <VStack  color={"white"} h="200px" align="left" >

            <Box   border="1px solid #FFB600" w="100%" h="150px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text  fontSize={["8px", "10px", "12px"]} isTruncated>1st Semi-Final, Road Safety T20 World Series ,2022</Text>

              <HStack justify="center" p={2}>
                <Box w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/4_flag_safari.png" alt="pic" /></Box>
                <Text fontSize="20px" color="#999999" pr="12px" pl="2px">IN-L</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%" ml="10px" mr="5px" bgColor="#FFB600"><Text color="black">vs</Text></Box>
                <Text fontSize="20px" color="#999999" pl="12px" pr="2px">AU-L</Text>
                <Box w="30px" h="30px" borderRadius="0%"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/3_flag_safari.png" alt="pic" /></Box>
              </HStack>
              <HStack justify="space-between" >
                <Box pb={3} ml="125px" w="150px" h="18px" pl="4px" pr="4px" borderRadius="12px" bgColor="#FFB600" justify="center" ><Text color="black" fontSize="12.4px">start in 6h 57min 39sec  </Text></Box>
                <Link to="/secondpage"><Box mr="-0px"><Box><Button mt="-15px" color="yellow" border="none" bgColor="grey.1000"><Icon as={ChevronRightIcon} /></Button></Box></Box></Link>
              </HStack>
              <HStack justify="center" pt="6px">
                <Text fontSize="12px" color="#999999">September 28 2022. |</Text>
                <HStack>
                  <Box ><SiGooglemaps /></Box>
                  <Text fontSize="12px" color="#999999">Raipur</Text>
                </HStack>
              </HStack>
            </Box>

          </VStack>


          <Text fontSize={["12px", "14px", "14px"]} mt="-25px" p="0px 0px 0px 4px" textColor="grey" align="left" fontWeight="600">LIVE MATCHES</Text>
          <VStack h="150px" align="left" >

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>1st Semi-Final, Road Safety T20 World Series, 2022</Text>

              <HStack justify="center" p={2}>
                <Box w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
                <Text fontSize="20px" color="#999999" pr="12px" pl="2px">IN-L</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%" ml="10px" mr="5px" bgColor="#FFB600"><Text color="black">vs</Text></Box>
                <Text fontSize="20px" color="#999999" pl="12px" pr="2px">AU-L</Text>
                <Box w="30px" h="30px" borderRadius="0%"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
              </HStack>
              <HStack justify="space-between">
                <Box pb={3} border="1px solid grey" ml="128px" mt="10px" w="150px" h="18px" pl="4px" pr="4px" borderRadius="12px" ><Text color="#999999" fontSize="12.4px">Day undefined:Stumps  </Text></Box>
                <Box mt="-60px"> <Box mt="-46px"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>

            </Box>

          </VStack>




          <Text fontSize={["12px", "14px", "14px"]} p="0px 0px 0px 4px" mt="-22px" textColor="grey" align="left" fontWeight="600">COMPLETED MATCHES</Text>
          <VStack h="130px" align="left" >

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "14px"]} isTruncated color="white">Eliminator, Caribbean Premier League ,2022</Text>

              <HStack justify="center" p={3} ml="-45px">
                <Box ml={-40} w="30px" h="30px"><Image w="35px" h="30px" mr="10px" borderRadius="50%" src="https://images.cricket.com/teams/1410_flag_safari.png" alt="pic" /></Box>
                <Box border="1px solid grey" pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="grey.400"><Text align="center" mt="3px" fontSize="14px" fontWeight="600">SLK</Text></Box>

                <Box w="30px" h="30px"><Text fontSize="16.4px" color="grey" pl="4px" pr="4px">Vs</Text></Box>

                <Box borderRadius="6px" w="35px" h="30px" justify="center" bgColor="#FFB600"><Text color="black" align="center" mt="3px" fontSize="14px" fontWeight="600">JAM</Text></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="85px"><Text fontSize="12px" fontWeight="600">JAM Won by 33 runs  </Text></Box>
                <Box> <Box color="yellow" mt="-40px"><Icon as={ChevronRightIcon} /></Box></Box>
              </HStack>

            </Box>

          </VStack>


          <VStack h="130px" align="left" >

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "14px"]} ml="-22px" isTruncated>2nd T20,BAngladesh Tour of UAE ,2022</Text>

              <HStack justify="center" p={3} ml="-40px">
                <Box ml={-40} w="30px" h="30px"><Image w="35px" h="30px" mr="10px" borderRadius="50%" src="https://images.cricket.com/teams/2_flag_safari.png" alt="pic" /></Box>
                <Box pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text align="center" mt="3px" fontSize="14px" color="black" fontWeight="600">BAN</Text></Box>

                <Box w="30px" h="30px"><Text fontSize="16.4px" color="grey" pl="4px" pr="4px">Vs</Text></Box>

                <Box borderRadius="6px" border="1px solid grey" w="35px" h="30px" justify="center" bgColor="grey.400"><Text color="white" align="center" mt="3px" fontSize="14px" fontWeight="600">UAE</Text></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="85px"><Text fontSize="12px" fontWeight="600">BAN Won by 40 runs  </Text></Box>
                <Box> <Box color="yellow" mt="-40px"><Icon as={ChevronRightIcon} /></Box></Box>
              </HStack>

            </Box>

          </VStack>




          <VStack h="130px" align="left" >

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "14px"]} ml="-0px" isTruncated>Match 20,Road Safety T20 world Series ,2022</Text>

              <HStack justify="center" p={3} ml="-40px">
                <Box ml={-40} w="30px" h="30px"><Image w="35px" h="30px" mr="10px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
                <Box pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text align="center" mt="3px" fontSize="14px" color="black" fontWeight="600">EN-L</Text></Box>

                <Box w="30px" h="30px"><Text fontSize="16.4px" color="grey" pl="4px" pr="4px">Vs</Text></Box>

                <Box borderRadius="6px" border="1px solid grey" w="40px" h="30px" justify="center" bgColor="grey.400"><Text color="white" align="center" mt="3px" fontSize="14px" fontWeight="600">AU-L</Text></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="85px"><Text fontSize="12px" fontWeight="600">EN-L Won by 6 wickets  </Text></Box>
                <Box> <Box color="yellow" mt="-40px"><Icon as={ChevronRightIcon} /></Box></Box>
              </HStack>

            </Box>

          </VStack>







        </Box>



        <Box w={["100%", "70%", "95%"]} h="auto" mr="-10px" >

          <VStack h="200px" align="left" mt="20px" >

            <Box border="1px solid #FFB600" w="100%" h="150px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text color={"white"} fontSize={["8px", "10px", "12px"]} isTruncated>5st T20, England Tour of Pakistan, 2022</Text>

              <HStack justify="center" p={2}>
                <Box w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/6_flag_safari.png" alt="pic" /></Box>
                <Text fontSize="20px" color="#999999" pr="12px" pl="2px">PAK</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%" ml="10px" mr="5px" bgColor="#FFB600"><Text color="black">vs</Text></Box>
                <Text fontSize="20px" color="#999999" pl="12px" pr="2px">ENG</Text>
                <Box w="30px" h="30px" borderRadius="0%"><Image w="35px" h="30px" borderRadius="50%" src="https://images.cricket.com/teams/3_flag_safari.png" alt="pic" /></Box>
              </HStack>
              <HStack justify="space-between" >
                <Box pb={3} ml="125px" w="150px" h="18px" pl="4px" pr="4px" borderRadius="12px" bgColor="#FFB600" justify="center" ><Text color="black" fontSize="12.4px">start in 3h 17min 49sec  </Text></Box>
                <Box mr="-80px"><Box><Button mt="-15px" color="yellow" border="none" bgColor="grey.1000"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>
              <HStack justify="center" pt="6px">
                <Text fontSize="12px" color="#999999">September 28 2022. |</Text>
                <HStack>
                  <Box ><SiGooglemaps /></Box>
                  <Text fontSize="12px" color="#999999">Lahore</Text>
                </HStack>
              </HStack>
            </Box>

          </VStack>



          <VStack h="150px" align="left" mt="-5px">

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "12px"]} isTruncated>5th T20, Road Safety T20 World Series, 2022</Text>

              <HStack justify="center" p={2}>
                <Box w="30px" h="30px"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
                <Text fontSize="20px" color="#999999" pr="12px" pl="2px">WI-L</Text>
                <Box border="1px solid yellow" w="30px" h="30px" borderRadius="50%" ml="10px" mr="5px" bgColor="#FFB600"><Text color="black">vs</Text></Box>
                <Text fontSize="20px" color="#999999" pl="12px" pr="2px">AU-L</Text>
                <Box w="30px" h="30px" borderRadius="0%"><Image w="35px" h="30px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
              </HStack>
              <HStack color={"white"} justify="space-between">
                <Box pb={3} border="1px solid grey" ml="128px" mt="10px" w="150px" h="18px" pl="4px" pr="4px" borderRadius="12px" ><Text color="#999999" fontSize="12.4px">Day undefined:Stumps  </Text></Box>
                <Box mt="-60px"> <Box mt="-46px"><Button color="yellow"><Icon as={ChevronRightIcon} /></Button></Box></Box>
              </HStack>

            </Box>

          </VStack>




          <VStack h="130px" align="left" mt="-0px" >

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33" >

              <Text fontSize={["8px", "10px", "14px"]} ml="-0px" isTruncated>Match 20,Road Safety T20 world Series ,2022</Text>

              <HStack justify="center" p={3} ml="-40px">
                <Box ml={-40} w="30px" h="30px"><Image w="35px" h="30px" mr="10px" borderRadius="50%" src="https://www.cricket.com/svgs/images/flag_empty.png" alt="pic" /></Box>
                <Box pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="#FFB600"><Text align="center" mt="3px" fontSize="14px" color="black" fontWeight="600">BR</Text></Box>

                <Box w="30px" h="30px"><Text fontSize="16.4px" color="grey" pl="4px" pr="4px">Vs</Text></Box>

                <Box borderRadius="6px" border="1px solid grey" w="40px" h="30px" justify="center" bgColor="grey.400"><Text color="white" align="center" mt="3px" fontSize="14px" fontWeight="600">GUY</Text></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="85px"><Text fontSize="12px" fontWeight="600">BR Won by 70 runs  </Text></Box>
                <Box> <Box color="yellow" mt="-40px"><Icon as={ChevronRightIcon} /></Box></Box>
              </HStack>

            </Box>

          </VStack>



          <VStack h="130px" align="left">

            <Box border="1px solid grey" w="100%" h="120px" borderRadius="8px" pt={2} bgColor="#FFFFFF33">

              <Text fontSize={["8px", "10px", "14px"]} ml="-30px" isTruncated>Match 19, Road Safety T20 Series, 2022</Text>

              <HStack color="white"  justify="center" p={3} ml="-45px">
                <Box ml={-40} w="30px" h="30px"><Image w="35px" h="30px" mr="10px" borderRadius="50%" src="https://images.cricket.com/teams/1405_flag_safari.png" alt="pic" /></Box>
                <Box border="1px solid grey" pl="-30px" borderRadius="6px" w="35px" h="30px" bgColor="grey.400"><Text align="center" mt="3px" fontSize="14px" fontWeight="600">SL-L</Text></Box>

                <Box w="30px" h="30px"><Text fontSize="16.4px" color="grey" pl="4px" pr="4px">Vs</Text></Box>

                <Box borderRadius="6px" w="35px" h="30px" justify="center" bgColor="#FFB600"><Text color="black" align="center" mt="3px" fontSize="14px" fontWeight="600">BD-L</Text></Box>
              </HStack>
              <HStack justify="space-between">
                <Box ml="85px"><Text fontSize="12px" fontWeight="600">BD-L Won by 25 runs  </Text></Box>
                <Box> <Box color="yellow" mt="-40px"><Icon as={ChevronRightIcon} /></Box></Box>
              </HStack>

            </Box>

          </VStack>

        </Box>

      </SimpleGrid>
      <SimpleGrid colums={[1, 2, 2, 2]}>

        <Box border="1px solid grey" w="96%" h="30px" m="auto">
          <Text align="left" color="#999999">FANTASY PREVIEWS</Text>
        </Box>

        <HStack border="1px solid grey" w="96%" h="160px" m="auto" >
          <HStack w="48%" h="98%" m="auto">

            <Box w="40%" h="98%" m="auto" bgColor="red">
              <Image h="80%" w="100%" src="https://images-cricketcom.imgix.net/news-1664427535628" alt="pic" />
              <Text color="white" ml="-80px">FANTASY</Text>
            </Box>
            <Box w="60%" h="98%" m="auto">
              <VStack align="left">
                <Text fontSize="12px" align="left" fontWeight="600">FANTASY:Tough to bet against Riswan and Moeen</Text>
                <Text fontSize="11px" align="left" isTruncated> Here are few tips that could help you create your fantasy</Text>
                <Text fontSize="11px" align="left" >XI for the</Text>
                <Text fontSize="11px" align="left" >cricket.com staff</Text>
                <Text fontSize="11px" align="left">29 sep 2022</Text>
              </VStack>
            </Box>

          </HStack>
          <HStack w="48%" h="98%" m="auto">

            <Box w="40%" h="98%" m="auto" bgColor="red">
              <Image h="80%" w="100%" src="https://images-cricketcom.imgix.net/news-1664293342733" alt="pic" />
              <Text color="white" ml="-80px">FANTASY</Text>
            </Box>
            <Box w="55%" h="98%" m="auto">
              <VStack align="left">
                <Text fontSize="12px" align="left" fontWeight="600">FANTASY:Expect Pakistan pacers to fire</Text>
                <Text fontSize="11px" align="left" isTruncated> Here are few tips that could help you create your fantasy</Text>
                <Text fontSize="11px" align="left" >XI for the</Text>
                <Text fontSize="11px" align="left" >cricket.com staff</Text>
                <Text fontSize="11px" align="left">29 sep 2022</Text>
              </VStack>

            </Box>

          </HStack>

        </HStack>

       
      </SimpleGrid>
     
    </Stack>

  )
}

export default Fantacy

