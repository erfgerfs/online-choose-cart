import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
export let scene, camera, renderer, controls, CSS3DRender
(function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
})();

(function help() {
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
})();
(function gd() {
    controls = new OrbitControls(camera, renderer.domElement);
})();
(function css3() {
    CSS3DRender = new CSS3DRenderer()
    CSS3DRender.setSize(window.innerHeight, window.innerWidth)
    CSS3DRender.domElement.style.position = 'fixed'
    CSS3DRender.domElement.style.left = '0'
    CSS3DRender.domElement.style.top = '0'
    CSS3DRender.domElement.style.pointerEvents = 'none'

    document.body.appendChild(CSS3DRender.domElement)
})();


(function animate() {

    requestAnimationFrame(animate);

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render(scene, camera);

})();

(function sp() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        CSS3DRender.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
})();

