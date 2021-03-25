import React from "react";
import { HomeSection } from "../components";
import { Media } from "../core/media";

const Home = () => {
  return (
    <>
      <Media at="mobile">
        <HomeSection
          mobile
          flexDirection="column"
          bodyTextSize={17}
          skillTitleSize={19}
        />
      </Media>

      <Media greaterThan="mobile">
        <HomeSection
          flexDirection="row"
          bodyTextSize={20}
          skillTitleSize={25}
        />
      </Media>
    </>
  );
};

export default Home;
