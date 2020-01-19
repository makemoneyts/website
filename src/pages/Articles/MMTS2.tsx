/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import React from "react";
import * as THREE from "three";

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
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: "#e5b913" });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  var animate = function() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

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
