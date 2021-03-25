import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 650,
    computer: 992,
    largeScreen: 1400,
    widescreen: 1920,
  },
});

// Generate CSS to be injected into the head
export const mediaStyles = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
