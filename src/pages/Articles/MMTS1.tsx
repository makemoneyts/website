/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import * as THREE from "three";

const wrapperStyle = css`
  background: whitesmoke;
  color: gray;
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
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
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
      第一回 MakeMomoney.TS終了。
      Hasuraで堅牢なウェブアプリケーション開発、FirebaseでtodoApp、react hooks
      を活用したアニメーション豊富なLP作成、がメイントーク。加えてuseContextのスコープの適切化、TypeScriptのalias設定、等の実務Tipsを共有した。1日一つ成り上がる。
    </div>
  );
};

export default MMTS1;
