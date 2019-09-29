/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const style = css`
  background: red;
`;

type Props = {
  name: string;
};

const MyApp: React.FC<Props> = ({ name }) => <div>{name}</div>;

const App: React.FC = () => {
  return (
    <div css={style} className="App">
      MakeMoney.TS
    </div>
  );
};

export default App;
