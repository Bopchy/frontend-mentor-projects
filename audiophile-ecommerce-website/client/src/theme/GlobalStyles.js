import { css } from "@linaria/core";

const globalStyles = css`
  :global() {
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
    }

    @font-face() {
    }
  }
`;

export default globalStyles;
