import React from "react";
import { useState } from "react";
import { Stack, Input } from "@chakra-ui/react";
import "./team.css";
import International from "./International";
import Other from "./Other";
const TeamPage = () => {
  const [text,settext]=useState("")
  const [color , setColor] = useState("international");
  
  return (
    <div className="team-main">
      <div className="team-main-2">
        <Stack spacing={3}>
          <Input
            variant="outline"
            placeholder="Team Search"
            width="93%"
            mx="auto"
            mb={12}
            mt={12}
            borderColor="#777777"
            size="sm"
          />
        </Stack>
        <div className="Heading-team">
          <div style={{borderBottom : `${color == "international" ? "2px solid red" : ""}`}} className="Heading-team-1">
            <span style={{color : `${color == "international" ? "black" : ""}`  }} onClick={()=>setColor("international")} >international</span>
          </div>
          <div style={{borderBottom : `${color == "other leagues" ? "2px solid red" : ""}`}} className="Heading-team-2">
            <span style={{color : `${color == "other leagues" ? "black" : ""}` }} onClick={()=>setColor("other leagues")}>other leagues</span>
          </div>
        </div>
        {
       
       color ==="international" ?  <International/> :  <Other/>
        }
      
      </div>
    </div>
  );
};

export default TeamPage;
