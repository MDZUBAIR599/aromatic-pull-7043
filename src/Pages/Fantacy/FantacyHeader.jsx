import { Box, SimpleGrid, Stack,Text } from '@chakra-ui/react'
import React from 'react'

const FantacyHeader = () => {
  return (
  <Stack >
<SimpleGrid>
<Box m="auto" border="1px solid red" w="970px" h="30px" bgColor="#FFB700">


    <Box>
        <Text align="left" fontWeight="600" ml="10px" fontSize={["12px","14px","14px"]} p="0px 0px 0px 16px" textColor="black">FANTASY CENTRE</Text>
    </Box>
</Box> 

</SimpleGrid>

  </Stack>

  )
}

export default FantacyHeader
