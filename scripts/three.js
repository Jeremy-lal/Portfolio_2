import * as THREE from 'three';
import { OrbitControls } from './OrbitControls';

export function three() {

    let width = window.innerWidth;
    let height = window.innerHeight;

    const torus = document.getElementById('torus');
    const icosaedrus = document.getElementById('icosaedrus');
    const sphere = document.getElementById('sphere');

    const sceneIcosaedrus = new THREE.Scene();
    const sceneTorus = new THREE.Scene();
    const sceneSphere = new THREE.Scene();

    const cameraIcosaedrus = new THREE.PerspectiveCamera(75, (width / 2) / (height), 0.1, 1000);
    const cameraTorus = new THREE.PerspectiveCamera(75, (width / 2) / (height), 0.1, 1000);
    const cameraSphere = new THREE.PerspectiveCamera(75, (width / 2.5) / (height), 0.1, 1000);
    
    const rendererIcosaedrus = new THREE.WebGLRenderer({ alpha: true });
    const rendererTorus = new THREE.WebGLRenderer({ alpha: true });
    const rendererSphere = new THREE.WebGLRenderer({ alpha: true });

    const controlsIcosaedrus = new OrbitControls(cameraIcosaedrus, rendererIcosaedrus.domElement);
    const controlsTorus = new OrbitControls(cameraTorus, rendererTorus.domElement);
    const controlsSphere = new OrbitControls(cameraSphere, rendererSphere.domElement);

    controlsIcosaedrus.enableZoom = false;
    controlsTorus.enableZoom = false;
    controlsSphere.enableZoom = false;

    icosaedrus.appendChild(rendererIcosaedrus.domElement);
    torus.appendChild(rendererTorus.domElement);
    sphere.appendChild(rendererSphere.domElement);

    const geometryIcosaedrus = new THREE.IcosahedronBufferGeometry(15, 2);
    const geometryTorus = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const geometrySphere = new THREE.SphereGeometry(15, 15, 15);

    const material = new THREE.MeshBasicMaterial({ color: 0xD5DDC5, wireframe: true, wireframeLinewidth: 0.1 }); //map: fibers

    const IcosaedrusMesh = new THREE.Mesh(geometryIcosaedrus, material);
    const TorusMesh = new THREE.Mesh(geometryTorus, material);
    const SphereMesh = new THREE.Mesh(geometrySphere, material);

    sceneIcosaedrus.add(IcosaedrusMesh);
    sceneTorus.add(TorusMesh);
    sceneSphere.add(SphereMesh);


    const animate = function () {
        requestAnimationFrame(animate);

        IcosaedrusMesh.rotation.x += 0.001;
        IcosaedrusMesh.rotation.y += 0.001;

        TorusMesh.rotation.x += 0.001;
        TorusMesh.rotation.y += 0.001;

        SphereMesh.rotation.x += 0.001;
        SphereMesh.rotation.y += 0.001;

        controlsIcosaedrus.update();
        controlsTorus.update();
        controlsSphere.update();

        rendererIcosaedrus.render(sceneIcosaedrus, cameraIcosaedrus);
        rendererTorus.render(sceneTorus, cameraTorus);
        rendererSphere.render(sceneSphere, cameraSphere);
    };

    animate();


    function analyseScreenSize() {

        width = window.innerWidth;
        height = window.innerHeight;

        let coefWidthIcosaedrus, coefWidthTorus, coefWidthSphere;
        let coefHeightIcosaedrus, coefHeightTorus, coefHeightSphere;
        let cameraZIcosaedrus, cameraZTorus, cameraZSphere;

        if (width >= 1200){
            coefWidthIcosaedrus = coefWidthTorus = coefWidthSphere  = 0.5;
            coefHeightIcosaedrus = coefHeightTorus = coefHeightSphere = 1;
            cameraZIcosaedrus = cameraZTorus = cameraZSphere = 35;

        } else if(width >= 780 && width < 1280) {
            coefWidthIcosaedrus = 0.5;
            coefHeightIcosaedrus = 0.5;
            cameraZIcosaedrus = 30;

            coefWidthTorus = coefWidthSphere = 0.4;
            coefHeightTorus = coefHeightSphere = 1;
            cameraZTorus = 70;
            cameraZSphere = 70;

        } else if (width < 780){

            coefWidthIcosaedrus = 0.8;
            coefHeightIcosaedrus = 0.7;
            cameraZIcosaedrus = 30;

            coefWidthTorus = coefWidthSphere = 0.8;
            coefHeightTorus = coefHeightSphere = 0.4;
            cameraZTorus = cameraZSphere = 30;

            if (width <= 540){
                cameraZIcosaedrus = 33;
                cameraZTorus = cameraZSphere = 40;
            } 
            if (width < 450){
                cameraZIcosaedrus = 40;
            } 
            if (width < 300){
                cameraZIcosaedrus = 45;
            } 
        } 

        cameraIcosaedrus.aspect = width*coefWidthIcosaedrus / (height*coefHeightIcosaedrus);
        cameraIcosaedrus.updateProjectionMatrix();
        cameraIcosaedrus.position.z = cameraZIcosaedrus;

        cameraTorus.aspect = width*coefWidthTorus / (height*coefHeightTorus);
        cameraTorus.updateProjectionMatrix();
        cameraTorus.position.z = cameraZTorus;

        cameraSphere.aspect = width*coefWidthSphere / (height*coefHeightSphere);
        cameraSphere.updateProjectionMatrix();
        cameraSphere.position.z = cameraZSphere;
        
        rendererIcosaedrus.setSize(width*coefWidthIcosaedrus, height*coefHeightIcosaedrus);
        rendererTorus.setSize(width*coefWidthTorus, height*coefHeightTorus);
        rendererSphere.setSize(width*coefWidthSphere, height*coefHeightSphere);
    }

    analyseScreenSize()

    window.addEventListener('resize', analyseScreenSize);

}