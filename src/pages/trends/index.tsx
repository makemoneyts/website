/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const wrapperStyle = css`
  margin-top: 10vw;
  background: whitesmoke;
  color: gray;
`;

const Trends: React.FC<{}> = () => {
  return (
    <div css={wrapperStyle}>
      <a
        css={css`
          color: gray;
        `}
        href="https://github.com/hasura/3factor-example/"
      >
        今 Hasura が金になりそうな気がしている。
      </a>
    </div>
  );
};

export default Trends;
