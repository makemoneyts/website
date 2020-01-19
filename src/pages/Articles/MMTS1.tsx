/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const wrapperStyle = css`
  background: whitesmoke;
  color: gray;
`;

const MMTS1: React.FC<{}> = () => {
  return (
    <div css={wrapperStyle}>
      第一回 MakeMomoney.TS終了。
      Hasuraで堅牢なウェブアプリケーション開発、FirebaseでtodoApp、react hooks
      を活用したアニメーション豊富なLP作成、がメイントーク。加えてuseContextのスコープの適切化、TypeScriptのalias設定、等の実務Tipsを共有した。1日一つ成り上がる。
    </div>
  );
};

export default MMTS1;
