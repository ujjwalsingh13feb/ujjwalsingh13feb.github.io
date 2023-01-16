import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div >
    <h1 style={{color:"black", margin:"auto",textAlign:"center", fontFamily:"Arial, Helvetica, sans-serif ", padding:"15px",fontSize:"2rem"}}>GitHub Calender</h1>
      <GitHubCalendar
        style={{ margin: "auto", marginBottom:"50px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"2rem",borderRadius:"1rem"}}
        username="ujjwalsingh13feb"
        // transformData={selectLastHalfYear}
        blockSize={15}
        fontSize={20}
      >
         <ReactTooltip delayShow={20} html /> 
      </GitHubCalendar>
    </div>
  );
};

export default Calender;