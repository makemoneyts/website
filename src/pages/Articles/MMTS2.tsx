/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import React from "react";

const wrapperStyle = css`
  background: whitesmoke;
  color: gray;
  max-width: 400px;
  margin: 0 auto;
`;

const globalStyle = css`
  body {
    background: #e5b913;
  }
`;

const MMTS1: React.FC<{}> = () => {
  return (
    <div css={wrapperStyle}>
      <Global styles={globalStyle} />
      第二回 MakeMomoney.TS。コア技術である GraphQL
      を構築するライブラリ「Apollo」の公式ドキュメント翻訳完了記念パーティー。翻訳者が集合。
      <br />
    </div>
  );
};

export default MMTS1;
