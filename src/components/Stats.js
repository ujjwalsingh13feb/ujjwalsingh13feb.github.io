import React from "react";
import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak
    
    <div style={{  height: "17rem"}}>
         <h1 style={{color:"black", margin:"auto",textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif ", padding:"10px",fontSize:"2rem" }}>GitHub Statistics</h1>
      {/*   <div style={{ width: "40%", margin: "auto"}}>
        <a href="https://github.com/ujjwalsingh13feb">
         <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=ujjwalsingh13feb"
           />
        </a>
       </div> */}
       
      <div
      
        style={{
          width: "50%",
          height: "190px",
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          
          boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding:"1rem",
          borderRadius:"1rem"

        }}
      >
        <a href="https://github.com/ujjwalsingh13feb">
          <img
            align="center"
            width={"95%"}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ujjwalsingh13feb" //launguages
          />
        </a>
        <a href="https://github.com/ujjwalsingh13feb">
          <img
            align="left"
            
            src="https://github-readme-stats.vercel.app/api?username=ujjwalsingh13feb&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;