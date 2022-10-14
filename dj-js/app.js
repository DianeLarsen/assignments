
var coloredBox = document.getElementById("coloredBox")
coloredBox.addEventListener('mouseover', function handleMouseOver(){
    coloredBox.style.backgroundColor = "blue";
        }
);
coloredBox.addEventListener('mouseout', function handleMouseOut() {
    coloredBox.style.backgroundColor = 'purple';
    
  });
coloredBox.addEventListener('mousedown', function handleMouseDown() {
    coloredBox.style.backgroundColor = 'red';
    
  });
coloredBox.addEventListener('mouseup', function handleMouseUp() {
    coloredBox.style.backgroundColor = 'yellow';
    
});
coloredBox.addEventListener('dblclick', function handleMouseDblClick() {
    coloredBox.style.backgroundColor = 'green';
  
});

coloredBox.addEventListener("keydown", (event) => {
  if(event.isComposing || event.keycode === KeyR){
    return;
}
coloredBox.style.backgroundColor = 'red';
 
});

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}


// $input.addEventListener('keypress', (e) => {
//   console.log("keypressed " + e.charCode);
// })

    // coloredBox.style.backgroundColor = "red";
    // console.log("I'm Blue!");

//  Object.keys(window).forEach(key => {
//      if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//              console.log(event.type);
//           });
//       }
//  }); 
 