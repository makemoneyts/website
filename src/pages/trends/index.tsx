/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link } from "react-navi";

const wrapperStyle = css`
  margin-top: 10vw;
  background: whitesmoke;
  color: gray;
  display: flex;
  flex-direction: column;
`;

const Trends: React.FC<{}> = () => {
  return (
    <div css={wrapperStyle}>
      <Link href={`/why`}>なぜ今 makeMoney なのか</Link>
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
