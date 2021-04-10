import React from "react";
import resumeData from "../resumeData";

const Experience = () => {
  return (
    <div>
      <h1 className="experienceTitle">Experience</h1>

      <div>
        {resumeData.work.map((item, k) => {
          return (
            <div key={k}>
              <h1
                style={{
                  marginTop: 10,
                  textDecoration: "underline",
                }}
              >
                {item.CompanyName}
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 style={{ fontStyle: "italic", marginTop: 0 }}>
                  {item.jobTitle}
                </h4>
                <h4 style={{ fontStyle: "italic", marginTop: 0 }}>
                  {item.MonthOfStarting} {item.YearOfStarting} -{" "}
                  {item.MonthOfLeaving} {item.YearOfLeaving}
                </h4>
              </div>

              <p style={{ fontSize: 19 }}>
                <br />
                <span>&bull;</span> {item.specialization}
                <br />
                <span>&bull;</span> {item.specialization2}
                <br />
                <span>&bull;</span> {item.specialization3}
                <br />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
