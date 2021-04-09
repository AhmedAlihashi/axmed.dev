import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";

const ProjectSection = ({ mobile, dataObj }) => {
  return (
    <div
      className="projectSection"
      style={{
        flexDirection: mobile ? "column" : "row",
      }}
    >
      <div
        compact
        inverted
        className="projectLinks"
        style={{
          width: mobile ? "100%" : "40%",
          marginBottom: mobile ? 10 : null,
        }}
      >
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
              <Label
                as="a"
                href={dataObj.url}
                target="_blank"
                id="projectLinks"
              >
                <Icon name="world" size="large" /> Live Site
              </Label>
            ) : null}

            {dataObj.altUrl && (
              <Label
                as="a"
                href={dataObj.altUrl}
                target="_blank"
                id="projectLinks"
              >
                <Icon name="world" size="large" /> Alternate site
              </Label>
            )}

            {dataObj.prePackagedUrl && (
              <Label
                as="a"
                href={dataObj.prePackagedUrl}
                target="_blank"
                id="projectLinks"
              >
                <Icon name="windows" size="large" /> Zipped windows app
              </Label>
            )}
            {dataObj.repourl !== null ? (
              <Label
                as="a"
                href={dataObj.repourl}
                target="_blank"
                id="projectLinks"
              >
                <Icon name="github" size="large" /> Repository
              </Label>
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
                <Button
                  icon="google play"
                  size="large"
                  as="a"
                  href={dataObj.android.url}
                  target="_blank"
                />
              ) : null}
              {dataObj.website.url !== null ? (
                <Button
                  icon="world"
                  size="large"
                  as="a"
                  href={dataObj.website.url}
                  target="_blank"
                />
              ) : null}
              {dataObj.ios.url !== null ? (
                <Button
                  icon="app store ios"
                  size="large"
                  as="a"
                  href={dataObj.ios.url}
                  target="_blank"
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
      <div
        className="projectDesc"
        style={{ width: mobile ? "100%" : "50%", margin: 0 }}
      >
        <h2>{dataObj.name}</h2>
        <p style={{ fontSize: 18 }}>{dataObj.description}</p>
      </div>
    </div>
  );
};

export default ProjectSection;
