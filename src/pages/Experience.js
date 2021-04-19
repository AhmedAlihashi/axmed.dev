import React from "react";
import resumeData from "../core/resumeData";

const Experience = () => (
  <div>
    <h1 className="experienceTitle">Experience</h1>

    <div className="expCont">
      {resumeData.work.map((item, k) => {
        return (
          <div key={k}>
            <h1
              style={{
                marginTop: 10,
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

            <p style={{ fontSize: 19, marginTop: "10px" }}>
              {item.specialization && (
                <p>
                  <span>&bull;</span> {item.specialization}
                </p>
              )}
              {item.specialization2 && (
                <p>
                  <span>&bull;</span> {item.specialization2}
                </p>
              )}
              {item.specialization3 && (
                <p>
                  <span>&bull;</span> {item.specialization3}
                </p>
              )}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Experience;
