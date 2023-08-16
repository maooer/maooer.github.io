import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';

let scene, camera, renderer, cube;

function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);

    // Position the camera
    camera.position.z = 5;

    // Resize listener
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    });

    // Cube
    let loader = new THREE.OBJLoader();
    loader.load('mybottle.obj', function (object) {
        scene.add(object);
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function animate() {
    function animate() {
        requestAnimationFrame(animate);
    
        // Render the scene and the camera
        renderer.render(scene, camera);
    }
    
}

init();
animate();