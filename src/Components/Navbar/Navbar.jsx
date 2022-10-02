
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Deadline from "../../Assets/deadline/Deadline.png"
import { Box,  HStack, Image ,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  useBreakpointValue,
  Heading,
  Text,} from "@chakra-ui/react";
  import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box>
      <Box  
      // border={"1px solid blue"} 
      className="nav">
       {isDesktop ? (
        <HStack 
        height="80%"
        w="90%"
        m="auto"
        color=" #d9d0c9" fontSize={"13px"}
        justify="space-evenly"
        >
           <Box mr="300px" ml="50px">
          <Link to ={`/`}><Image
            m="auto"
            alt="logo"
          
            src="https://www.cricket.com/static/cricket.com.svg"
          /></Link>
        </Box>
          <Box className="link" >
           <Link to={`FantasyResearch`}><Box  className="navBox">
              <Image
                m="auto"
                alt="Fantasy"
                src="https://www.cricket.com/static/svgs/icons/frc.svg"
              />
                <p>Fantasy Research</p>
            </Box> </Link>
          </Box>

          <Box className="link">
          <Link to={`/criclytics`}><Box 
            
            className="navBox">
              
              <Image
             
                alt="criclytics"
                src="https://www.cricket.com/static/svgs/icons/criclytics-icon.svg"
              />
            
                <p  color="red">Criclytics</p>
              
            </Box></Link>
          </Box>

          <Box className="link">
          <Link to={`/schedule`}><Box className="navBox">
              <Image
                alt="Schedule"
                src="https://www.cricket.com/static/svgs/icons/schedule-icon.svg"
              />
            
                <p>Schedule</p>
              
            </Box></Link>
          </Box>

          <Box className="link">
          <Link to={`/series`}><Box className="navBox">
              <Image
                alt="Series"
                src="https://www.cricket.com/static/svgs/icons/series-icon.svg"
              />
            
                <p>Series</p>
            
            </Box>  </Link>
          </Box>

          <Box className="link">
          <Link to={`/news`}>  <Box className="navBox">
              <Image
                alt="News"
                src="https://www.cricket.com/static/svgs/icons/news-and-articles-icon.svg"
              />

            
                <p>News</p>
            
            </Box>  </Link>
          </Box>

          <Box className="link">
          <Link to={`/videos`}> <Box className="navBox">
              <Image
                alt="Videos"
                src="https://www.cricket.com/static/svgs/icons/video-icon.svg"
              />
           
                <p>Videos</p>
            
            </Box>  </Link>
          </Box>

          <Box className="link">
          <Link to={`/players`}> <Box className="navBox">
              <Image
                alt="Players"
                src="https://www.cricket.com/static/svgs/icons/players-icon.svg"
              />
             
                <p>Players</p>
             
            </Box>  </Link>
          </Box>

          <Box>
          <Link to={`/teams`}><Box className="navBox">
              <Image
                alt="Teams"
                src="https://www.cricket.com/static/svgs/icons/teams-icon.svg"
              />
            
                <p>Teams</p>
            
            </Box></Link>
          </Box>

         <Box className="navBox">
            
           
             <Menu  width="100px">
  <MenuButton  rightIcon={<ChevronDownIcon />}>
  <Image
              alt="profile"
              src="https://www.cricket.com/svgs/icons/more.svg"
            />
          More<ChevronDownIcon />
          </MenuButton>
          <MenuList bg="black" color={"white"}>
            <MenuItem>Stadiums</MenuItem>
            <MenuItem>Ranking</MenuItem>
            <MenuItem>Archives</MenuItem>
            <MenuItem>Records</MenuItem>
            <MenuItem ><Link to={`/login`}>Profile</Link></MenuItem>
          </MenuList>
        </Menu>
           
          </Box>
         
        </HStack>) :(
          <Box 
          border={"1px solid red"}
          width="100%"
          bg="whitesmoke"
          align="center" margin={"auto"}>
            <Text color={"white"}>What are you Looking for</Text>
            <Image
             
             display={"flex"}
             w="500px"
             m="auto"
             alt="deadline" src={Deadline} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
