import React from "react";
import styled from "styled-components";
// import "../App.css";
const Stats = () => {
  return (
    // streak
    
    <div style={{  height: "15rem" }}>
         <h1 style={{color:"black", margin:"auto",textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif ", padding:"10px"}}>GitHub Statistics</h1>
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
        }}
      >
        <a href="https://github.com/ujjwalsingh13feb">
          <img
            align="center"
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