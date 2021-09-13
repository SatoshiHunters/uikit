import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f98c08",
  primaryBright: "#ffb948",
  primaryDark: "#f98c08",
  secondary: "#ffb948",
  success: "#31D0AA",
  warning: "#FFB237",
  };
  
  export const brandColors = {
    binance: "#F0B90B",
  };
  
  export const lightColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#FFFFFF",
    backgroundDisabled: "#E9EAEB",
    contrast: "#261d13",
    invertedContrast: "#FFFFFF",
    input: "#f4efea",
    // inputBorder: "#cccccc",
    inputSecondary: "#cccccc",
    tertiary: "#f5f3ef",
    text: "#333333",
    textDisabled: "#BDC2C4",
    textSubtle: "#703c2c",
    activeButton: "#397f49",
    borderColor: "#E9EAEB",
    card: "#FFFFFF",
    nav: "#FFFFFF",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    },
  };
  
  export const darkColors: Colors = {
    ...baseColors,
    ...brandColors,
    background: "#353331",
    backgroundDisabled: "#423d37",
    contrast: "#FFFFFF",
    invertedContrast: "#261e13",
    input: "#5a4d3f",
    // inputBorder: "#cccccc",    
    inputSecondary: "#cccccc",
    tertiary: "#473e35",
    text: "#fff",
    textDisabled: "#716a61",
    textSubtle: "#fff",
    activeButton: "#397f49",
    borderColor: "#63584b",
    card: "#2c2926",
    nav: "#2c2926",
    gradients: {
      bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    },
  };