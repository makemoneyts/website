/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Trends from "~/pages/trends";

const globalStyle = css`
  body {
    background: #113130;
  }
`;

const fontSize = css`
  font-size: 9vw;
`;

const style = css`
  ${fontSize};
  color: Blue;
  font-weight: bold;
  border-bottom: 10px blue double;
  transition: 0.5s;

  &:hover {
    color: greenyellow;
    border-bottom: 10px yellowgreen double;
  }
`;

const tooManyStyle = css`
  ${fontSize};
  color: red;
  font-weight: bold;
  border-bottom: 10px red double;
`;

const wrapperStyle = css`
  user-select: none;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  count: number;
  clicked: boolean;
};

const countThreshold = 10;

const Title: React.FC<Props> = ({ count, clicked }) => {
  if (count < countThreshold) {
    return (
      <div css={style}>{!clicked ? "MakeMoney.TS" : "You need Money."}</div>
    );
  }
  return null;
};

const TooMany: React.FC<Props> = ({ count }) => {
  if (count >= countThreshold) {
    return (
      <div css={tooManyStyle}>
        You clicked too Money.
        <div
          css={css`
            font-size: 36px;
            text-align: center;
          `}
        >
          {count} times~!!!
        </div>
      </div>
    );
  }
  return null;
};

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedCount, increaseClickedCount] = useState(0);

  const moneyClicked = () => {
    setClicked(!clicked);
    increaseClickedCount(clickedCount + 1);
  };

  return (
    <div>
      <Helmet>
        <title>MakeMoney.TS</title>
      </Helmet>
      <Global styles={globalStyle} />
      <div onClick={moneyClicked} css={wrapperStyle} className="App">
        <Title count={clickedCount} clicked={clicked} />
        <TooMany count={clickedCount} clicked={clicked} />
        <Trends />
      </div>
    </div>
  );
};

export default App;
