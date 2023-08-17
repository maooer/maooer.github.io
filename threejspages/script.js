import * as THREE from './libs/build/three.module.js';
import { OBJLoader } from './libs/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from "./libs/examples/jsm/controls/OrbitControls.js";

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
    document.getElementById('three-container').appendChild(renderer.domElement);

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

    // Add OrbitControls for interactivity
    const controls = new OrbitControls(camera, renderer.domElement);

    // Adjust the view when the window is resized
    window.addEventListener('resize', onWindowResize, false);
}

// Resize the renderer and adjust the camera when the window is resized
function onWindowResize() {
    const container = document.getElementById('three-container');
    
    // Get dimensions of the container
    const width = container.clientWidth;
    const height = container.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}



// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call our init function to set everything up, then call animate to start the animation loop
init();
animate();

const loader = new OBJLoader();
loader.load(
    'mybottle.obj',
    function (object) {
        object.position.y -= 0.25;
        camera.position.y += 1
        // 当加载完成时
        scene.add(object);
    },
    function (xhr) {
        // 当加载过程进行中时
        let percentComplete = (xhr.loaded / xhr.total) * 100;
        updateProgressBar(percentComplete);
    },
    function (error) {
        // 当加载发生错误时
        console.error('An error happened', error);
    }
);

function updateProgressBar(percentComplete) {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = `${percentComplete}%`;

    // 如果加载已经完成，您可以隐藏进度条或执行其他操作
    if (percentComplete === 100) {
        progressBar.style.display = 'none';
    }
}
