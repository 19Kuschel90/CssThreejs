var THREE = require('three');
require("./lib/Css3DRenderer.js");
require("./lib/TrackballControls.js");
import { Css3DPicker } from "./Css3DPicker.js";



var camera, scene, renderer;
var controls;


init();
animate();

function init() {

    var container = document.getElementsByClassName('container')[0];

    camera = new THREE.PerspectiveCamera(50, 200 / 200, 1, 5000);
    camera.position.set(10, 10, 10);

    scene = new THREE.Scene();

    // bug fix  document.getElementById('ssdfffff'), document.getElementById("ssssss")
    renderer = new THREE.CSS3DRenderer(document.getElementById('ssdfffff'), document.getElementById("ssssss"));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    var group = new THREE.Group();

    let cssColorPicker = new Css3DPicker();
    group.add(cssColorPicker.getElement(document.getElementsByClassName('css3D')[0], 0, 0, 0, 0));
    group.add(cssColorPicker.getElement(document.getElementsByClassName('css3D')[1], 100, 0, 0, 0));
    group.add(cssColorPicker.getElement(document.getElementsByClassName('css3D')[2], -100, 0, 0, 0));

    // https://youtu.be/ornXZGEFcds
    // group.add(new videoContaner('ornXZGEFcds', 0, 0, 240, 0));
    // //https://youtu.be/IEu-ETiZ-x8?t=48
    // group.add(new videoContaner('IEu-ETiZ-x8?t=48', 440, 0, 340, 0));
    // //https://youtu.be/P-pZNjme5po
    // group.add(new videoContaner('P-pZNjme5po', -440, 0, 340, 0));

    // group.add(new logo(0, 400, 0, Math.PI / 180, 0));
    // //footer
    // group.add(new footer(0, -400, 0, 0));
    scene.add(group);

    controls = new THREE.TrackballControls(camera);
    controls.rotateSpeed = 1;



    window.addEventListener('resize', onWindowResize, false);
    // Block iframe events when dragging camera
    var blocker = document.getElementById('blocker');

    document.addEventListener('mousedown', function() {
        blocker.style.display = '';
    });
    document.addEventListener('mouseup', function() {
        blocker.style.display = 'none';
    });
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

}