import { Box, Heading, HStack, useBreakpointValue,Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <>
     {isDesktop ? (
     <div>
     <footer className="footer">
       <div className="div_1">
         <img src="https://www.cricket.com/static/svgs/cricket-logo.svg" />
         <p>Cricket like never before</p>
       </div>

       <div className="div_2">
         <a href="#">Term of use</a>
         <a href="#">Privacy Policy</a>
         <a href="#">Cookies Policy</a>
       </div>
       <div className="div_3">
        
         <div  className="iconsbox">
         <p>follow us on</p>
          <div className="icons">
           
            <img alt="img" src="https://www.cricket.com/svgs/facebook.svg"/>
            <img alt="img" src="	https://www.cricket.com/svgs/twitter.svg"/>
            <img alt="img" src="		https://www.cricket.com/svgs/linkedin.svg"/>
            
          </div>
          
         </div>
         <p>@ 2020 cricket.com | All rights reserved</p>
       </div>
     </footer>
   </div>
     ) :
     (
      <div className="bfooter">
        <div className="sbfooter">
          <a href="/">
              <img alt="/footer/tabicon1.svg" style={{fill:"blue"}}
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDI0IDIyIj4KICAgPHBhdGggZmlsbD0iI0Q0NDAzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSdNMS41IDExLjYyOGgyLjI5N3Y5LjA5OWEuNS41IDAgMCAwIC41LjVoNS41di01LjdhLjUuNSAwIDAgMSAuNS0uNWgzLjhhLjUuNSAwIDAgMSAuNS41djUuN2g1LjUwMWEuNS41IDAgMCAwIC41LS41di05LjA5OWgyLjI5NmEuNS41IDAgMCAwIC4zMzUtLjg3MUwxMi41MzMgMS4xMjhhLjUuNSAwIDAgMC0uNjY5IDBMMS4xNjYgMTAuNzU3YS41LjUgMCAwIDAgLjMzNC44NzF6Jy8+Cjwvc3ZnPg==" />
              <span class="f8  fw5 red">HOME</span></a>
            </div>
            <div className="sbfooter"><a href="/schedule/live-matches" > 
            <img alt="/footer/tabicon2.svg" class="h13 pt1 pb1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj4KICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii4yIiBkPSJNNC42MTQgMjEuMDEyaDE0LjU1MmEzLjYxOCAzLjYxOCAwIDAgMCAzLjYxNC0zLjYxNFY2LjQ2YTMuNjE4IDMuNjE4IDAgMCAwLTMuNjE0LTMuNjE0aC0xLjg5OVYxaC0xLjMxMnYxLjg0Nkg3LjgwOFYxSDYuNDk1djEuODQ2SDQuNjE0QTMuNjE4IDMuNjE4IDAgMCAwIDEgNi40NnYxMC45MzhhMy42MTggMy42MTggMCAwIDAgMy42MTQgMy42MTR6TTE5LjE2MiAxOS43SDQuNjE0YTIuMzIzIDIuMzIzIDAgMCAxLTIuMzE5LTIuMzJWOC41NmgxOS4xOXY4LjgzOGEyLjMyMyAyLjMyMyAwIDAgMS0yLjMxOSAyLjMybC0uMDA0LS4wMTh6TTQuNjE0IDQuMTRoMS44OTl2MS4wNjRoMS4zMTJWNC4xNGg4LjE0N3YxLjA2NGgxLjMxM1Y0LjE0aDEuODk5YTIuMzIzIDIuMzIzIDAgMCAxIDIuMzE4IDIuMzJ2LjgwNEgyLjI5NXYtLjhBMi4zMjMgMi4zMjMgMCAwIDEgNC42MTQgNC4xNHoiLz4KPC9zdmc+Cg==" /><span class="f8  gray">SCHEDULE</span></a></div>
            <div class="w-30 bg-transparent pv2"></div>
            <a title="Criclytics" className="sbmfooter" href="/criclytics"><div >
              <div className="imgiside" >
                <div  >
              <img alt="Criclytics" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NSIgaGVpZ2h0PSI0NSIgdmlld0JveD0iMCAwIDQ1IDQ1Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Q0NDAzMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIuNDc3IDBDMTAuMDU2IDAgMCAxMC4wNzkgMCAyMi41IDAgMzQuOTE5IDEwLjA1NiA0NSAyMi40NzcgNDUgMzQuOTIgNDUgNDUgMzQuOTE5IDQ1IDIyLjUgNDUgMTAuMDc5IDM0LjkxOSAwIDIyLjQ3NyAwIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM2LjQzNSAxOS40MzhhMi42NyAyLjY3IDAgMCAxLTEuMi0uMjk0bC01LjYwMiA1LjU1Yy4xNzMuMzYuMjguNzU3LjI4IDEuMTgzYTIuNzE1IDIuNzE1IDAgMSAxLTUuMzgtLjUzNWwtNC44MjUtMi44MzlhMi42OTQgMi42OTQgMCAwIDEtMS43NS42NTcgMi42NiAyLjY2IDAgMCAxLTEuNDI4LS40MThsLTUuMjcgNC4zMDdjLjEwOS4yOS4xNzUuNjA0LjE3NS45MzhBMi43MTYgMi43MTYgMCAwIDEgNiAyNy45ODRjMC0xLjUgMS4yMTgtMi43MTcgMi43MTctMi43MTdhMi43MSAyLjcxIDAgMCAxIDEuNTUuNDg2bDUuMTkyLTQuMjRhMi43MTcgMi43MTcgMCAxIDEgNS4yMTYtMS4wN2MwIC4yMzUtLjA0LjQ2My0uMDk4LjY3OWw0Ljc0NyAyLjc5NWEyLjcwNyAyLjcwNyAwIDAgMSAxLjg3MS0uNzU3Yy40OCAwIC45MjQuMTM1IDEuMzE2LjM1bDUuNTUtNS40OTdhMi42NzMgMi42NzMgMCAwIDEtLjM0My0xLjI5MyAyLjcxNyAyLjcxNyAwIDAgMSA1LjQzMiAwYzAgMS41LTEuMjE1IDIuNzE4LTIuNzE1IDIuNzE4Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=" /></div></div></div><div ><span >CRICLYTICS</span><span class="f9 gray v-top z-5"> TM </span></div></a>
            <div className="sbfooter"><a href="/news/latest"><img alt="/footer/tabicon4.svg" class="h13 pt1 pb1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIzIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIzIDExLjgxNHYzLjQ2YzAgMi4yMDQtMS43ODQgMy45OTUtMy45NzggMy45OTVIMy45NzdDMS43ODMgMTkuMjY5IDAgMTcuNDc4IDAgMTUuMjczVi41NjRDMCAuMjU0LjI1MyAwIC41NjIgMGgxNy41NmMuMzEgMCAuNTYyLjI1NC41NjIuNTY0djEwLjA1NEgyMi41YS41LjUgMCAwIDEgLjUuNXYuNjk2em0tNC4zMTYgMHYzLjgzOGMwIC4zMS0uMjUyLjU2NC0uNTYxLjU2NGEuNTY0LjU2NCAwIDAgMS0uNTYyLS41NjRWMS4xMjhIMS4xMjN2MTQuMTVhMi44NjMgMi44NjMgMCAwIDAgMi44NTQgMi44NjdoMTUuMDVhMi44NjMgMi44NjMgMCAwIDAgMi44NTQtMi44Njd2LTMuNDY0aC0zLjE5N3ptLTMuNDY4LTYuNjU3SDQuMDYyYy0uMjgyIDAtLjUxMi0uMjYtLjUxMi0uNTc4IDAtLjMxOS4yMy0uNTc5LjUxMi0uNTc5aDExLjE1NGMuMjgxIDAgLjUxMi4yNi41MTIuNTc5IDAgLjMxOC0uMjMuNTc4LS41MTIuNTc4em0uMDA1IDQuNTNoLTguNzFjLS4yOCAwLS41MTEtLjI2LS41MTEtLjU3OCAwLS4zMTguMjMtLjU3OS41MTItLjU3OWg4LjcxYy4yOCAwIC41MTEuMjYuNTExLjU3OSAwIC4zMTgtLjIzLjU3OC0uNTEyLjU3OHptLS4wMTMgMy4zNzNjLjI4MiAwIC41MDguMjYuNTA4LjU3OSAwIC4zMTgtLjIzLjU3OS0uNTEyLjU3OWgtNS4wNDJjLS4yODIgMC0uNTEyLS4yNi0uNTEyLS41OCAwLS4zMTcuMjMtLjU3OC41MTItLjU3OGg1LjA0NnoiLz4KPC9zdmc+Cg==" /><span class="f8  gray">NEWS</span></a>
            </div>
            <div className="sbfooter"><a title="More"href="/more"><img alt="/footer/tabicon5.svg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNzI3NjgyIiBzdHJva2Utd2lkdGg9IjEuMSIgZD0iTTExLjk4OC41NUM1LjY3LjU1LjU1IDUuNjc4LjU1IDEyYzAgNi4zMjMgNS4xMiAxMS40NSAxMS40MzggMTEuNDUgNi4zMyAwIDExLjQ2Mi01LjEyOCAxMS40NjItMTEuNDVDMjMuNDUgNS42OCAxOC4zMTguNTUgMTEuOTg4LjU1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3Mjc2ODIiIGQ9Ik0xNy45NjUgMTMuNzY1YTEuNzcgMS43NyAwIDAgMS0xLjc2NS0xLjc2NGMwLS45Ny43OTQtMS43NjUgMS43NjUtMS43NjUuOTcgMCAxLjc2NC43OTQgMS43NjQgMS43NjVhMS43NyAxLjc3IDAgMCAxLTEuNzY0IDEuNzY0TTEyLjI2NiAxMy43NjVhMS43NyAxLjc3IDAgMCAxLTEuNzY2LTEuNzY0YzAtLjk3Ljc5NC0xLjc2NSAxLjc2Ni0xLjc2NS45NzEgMCAxLjc2NS43OTQgMS43NjUgMS43NjVhMS43NyAxLjc3IDAgMCAxLTEuNzY1IDEuNzY0TTYuMjY1IDEzLjc2NUExLjc3IDEuNzcgMCAwIDEgNC41IDEyLjAwMWMwLS45Ny43OTQtMS43NjUgMS43NjUtMS43NjUuOTcgMCAxLjc2Ni43OTQgMS43NjYgMS43NjUgMCAuOTctLjc5NiAxLjc2NC0xLjc2NiAxLjc2NCIvPgogICAgPC9nPgo8L3N2Zz4K" /><span >MORE</span>
            </a>
            </div>
          </div>
      )}
      </>
  );
};

export default Footer;
