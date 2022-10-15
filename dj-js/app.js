
var coloredBox = document.getElementById("coloredBox")
coloredBox.addEventListener('mouseover', function handleMouseOver(){
    coloredBox.style.backgroundColor = "blue";
        }
);
coloredBox.addEventListener('mouseout', function handleMouseOut() {
    coloredBox.style.backgroundColor = 'orange';
    
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




window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch(event.code) {
    case "KeyR":
      coloredBox.style.backgroundColor = 'red';
      break;
    case "KeyB":
      coloredBox.style.backgroundColor = 'blue';
      break;
    case "KeyY":
      coloredBox.style.backgroundColor = 'yellow';
      break;
    case "KeyO":
      coloredBox.style.backgroundColor = 'orange';
      break;
    case "KeyG":
      coloredBox.style.backgroundColor = 'green'
      break;
  }
  refresh();

  if (event.code !== "Tab")
  {
    event.preventDefault();
  }
}, true);

