import React from "react";

import resumeData from "../core/resumeData";

const Projects = () => {
  return (
    <>
      <h1 className="projectTitle">Projects</h1>

      {resumeData.portfolio.map((dataObj, key) => {
        return (
          <div className="projectItem" key={key}>
            <div className="projectSection">
              <div className="projectSectionLinks">
                {dataObj.imgurl && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: 10,
                    }}
                  >
                    <img
                      alt="cartoon preview"
                      src={dataObj.imgurl}
                      style={{
                        height: "100%",
                        width: "100%",
                        maxHeight: "300px",
                        maxWidth: "300px",
                      }}
                    />
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {dataObj.url !== null ? (
                      <a
                        href={dataObj.url}
                        target="_blank"
                        rel="noreferrer"
                        className="projectLinks"
                      >
                        <p>Live Site</p>
                      </a>
                    ) : null}

                    {dataObj.altUrl && (
                      <a
                        href={dataObj.altUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="projectLinks"
                      >
                        <p>Alternate site</p>
                      </a>
                    )}

                    {dataObj.prePackagedUrl && (
                      <a
                        href={dataObj.prePackagedUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="projectLinks"
                      >
                        <p>Zipped windows app</p>
                      </a>
                    )}
                    {dataObj.repourl !== null ? (
                      <a
                        href={dataObj.repourl}
                        target="_blank"
                        rel="noreferrer"
                        className="projectLinks"
                      >
                        <p>Repository</p>
                      </a>
                    ) : null}
                  </div>

                  {dataObj.url === null && dataObj.repourl === null ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                      }}
                    >
                      <img
                        alt="android"
                        src={dataObj.android.imgurl}
                        style={{ height: "90px", width: "90px" }}
                      />

                      <img
                        alt="World wide web"
                        src={dataObj.website.imgurl}
                        style={{ height: "60px", width: "60px" }}
                      />

                      <img
                        alt="ios"
                        src={dataObj.ios.imgurl}
                        style={{ height: "90px", width: "90px" }}
                      />
                    </div>
                  ) : null}

                  {dataObj.android && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                      }}
                    >
                      {dataObj.android.url !== null ? (
                        <a
                          className="projectIcon"
                          href={dataObj.android.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-android"></i>
                        </a>
                      ) : null}
                      {dataObj.website.url !== null ? (
                        <a
                          className="projectIcon"
                          href={dataObj.website.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fas fa-globe"></i>
                        </a>
                      ) : null}
                      {dataObj.ios.url !== null ? (
                        <a
                          className="projectIcon"
                          href={dataObj.ios.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-app-store-ios"></i>
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
              <div className="projectDesc">
                <h2>{dataObj.name}</h2>
                <p style={{ fontSize: 18 }}>{dataObj.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
