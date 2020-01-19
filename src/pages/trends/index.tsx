/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { Link } from "react-router-dom";

const wrapperStyle = css`
  margin-top: 10vw;
  background: whitesmoke;
  color: gray;
`;

const Trends: React.FC<{}> = () => {
  return (
    <div css={wrapperStyle}>
      <ul
        css={css`
          padding: 0 40px;
          margin: 20px 0;
        `}
      >
        <li>
          <Link
            to="https://github.com/hasura/3factor-example/"
            css={css`
              color: gray;
            `}
          >
            今 Hasura が金になりそうな気がしている。
          </Link>
        </li>
        <li>
          <Link
            css={css`
              color: gray;
            `}
            to="/mmts1"
          >
            MakeMoney.TS #1 開催 2019/10/30 14:00~
          </Link>
        </li>
        <li>
          <Link
            css={css`
              color: gray;
            `}
            to="/mmts2"
          >
            MakeMoney.TS #2 開催 2020/1/25 14:00~
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Trends;
