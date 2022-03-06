import { css } from "@linaria/core";

const globalStyles = css`
  :global() {
    @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: "Manrope", sans-serif;
    }
  }
`;

export default globalStyles;
