//your JS code here. If required.
function updateOutputText() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello, world!");
      }, 1000);
    });
  }
  
  updateOutputText().then((message) => {
    let outputElement = document.getElementById('output');
    outputElement.innerText = message;
  });
  