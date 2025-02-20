import * as THREE from 'three';

const windowSize = window.innerWidth / window.innerHeight;
// create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// add the camera
const camera = new THREE.PerspectiveCamera(75, windowSize, 0.1, 1000);
camera.position.z = 5;


// create and add cube object 
const geometry = new THREE.TorusGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585'});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// animate scene
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += .01;
    cube.rotation.y += .01;
    renderer.render(scene, camera);
}

animate();
