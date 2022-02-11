var createScene = function () {
    var scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
    camera.setPosition(new BABYLON.Vector3(1, 1, -1));
    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    var car;

    let sphereArguments = {
        segments: 32,
        diameter: 1
    }

    let boxArguments = {
        size: 1,
        height: 1,
        width: 1
    }

    function setupMaterials() {
        car = new BABYLON.StandardMaterial("mat", scene);
        car.diffuseTexture = new BABYLON.Texture("https://i.imgur.com/xyUjc74.jpeg");
    }


    
    function sphere(options) {
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", options);
        sphere.position = new BABYLON.Vector3(2, 0, 4);
        sphere.position.x = 0;
    }

    function box(options) {
        const box = BABYLON.MeshBuilder.CreateBox("box", options, scene);
        box.rotation = new BABYLON.Vector3(1, 2, 0);
        box.scaling = new BABYLON.Vector3(2, 3, 2);
        box.scaling.x = 3;
        box.material = car;
    }

    // Setup materials and textures
    setupMaterials();

    // Create sphere
    sphere(sphereArguments);

    // Create box
    box(boxArguments);

    return scene;
}