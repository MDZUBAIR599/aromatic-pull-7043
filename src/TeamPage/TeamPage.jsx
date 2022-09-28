import React from "react";

import { Stack, Input } from "@chakra-ui/react";
import "./team.css";
import International from "./International";
import Other from "./Other";
const TeamPage = () => {
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
          <div className="Heading-team-1">
            <span>international</span>
          </div>
          <div className="Heading-team-2">
            <span>other leagues</span>
          </div>
        </div>
       <International/>
       <Other/>
      </div>
    </div>
  );
};

export default TeamPage;
