var THREE = require('three');
require("./lib/Css3DRenderer.js");

require("./lib/TrackballControls.js");

// z.B
// var videoContaner = function(id, x, y, z, rx = 0, ry = 0) {

//     var div = document.createElement('div');
//     div.classList.add('videoContaner');
//     // div.style.width = '480px';
//     // div.style.height = '360px';
//     // div.style.backgroundColor = '#000';

//     var iframe = document.createElement('iframe');
//     // div.classList.add('videoIframe');

//     // iframe.style.width = '480px';
//     // iframe.style.height = '360px';
//     // iframe.style.border = '0px';
//     iframe.src = ['https://www.youtube.com/embed/', id, '?rel=0'].join('');
//     div.appendChild(iframe);
//     var object = new THREE.CSS3DObject(div);
//     object.position.set(x, y, z);
//     object.rotation.x = rx;
//     object.rotation.y = ry;

//     return object;

// };

export class Css3DPicker {

    constructor() {

    }

    //  div = <div></div>;
    getElement(div, x, y, z, rx = 0, ry = 0) // return 1 elment 
        {

            var object = new THREE.CSS3DObject(div);
            object.position.set(x, y, z);
            object.rotation.x = rx;
            object.rotation.y = ry;

            return object;
        }

}