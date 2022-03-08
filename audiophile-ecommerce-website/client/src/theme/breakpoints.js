import { css } from "@linaria/core";

const breakpoints = (cssProp, cssPropUnits, values, mediaQueryType) => {
  const breakpointProps = values.reduce(() => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];

    return (mediaQueries += `@media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
      ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
    }`);
  }, "");

  return css([breakpointProps]);
};

export default breakpoints;
