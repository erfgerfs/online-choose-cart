
import * as THREE from 'three';
import { scene, camera, renderer, controls } from './src/entry/index'


function tx() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}
tx()

