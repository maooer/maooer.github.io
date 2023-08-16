import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { OBJLoader } from 'https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/loaders/OBJLoader.js';

let camera, scene, renderer;

function init() {
    // Create a scene
    scene = new THREE.Scene();

    // Setup camera with 75° field of view, and aspect based on window dimensions. Near and far clipping planes at 0.1 and 1000
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    // Create a WebGLRenderer and set its width and height
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Append the renderer to the body
    document.body.appendChild(renderer.domElement);

    // Position the camera so that we can view our bottle.
    camera.position.z = 5;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Load your OBJ model
    const loader = new OBJLoader();
    loader.load('mybottle.obj', function (object) {
        scene.add(object);
    });

    // Adjust the view when the window is resized
    window.addEventListener('resize', onWindowResize, false);
}

// Resize the renderer and adjust the camera when the window is resized
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call our init function to set everything up, then call animate to start the animation loop
init();
animate();