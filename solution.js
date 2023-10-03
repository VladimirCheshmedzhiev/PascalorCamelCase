function solve() {
    const textInput = document.getElementById("text").value;
    const conventionInput = document.getElementById("naming-convention").value;
  
    const words = textInput.split(' ');
  
    let result = "";
    if (conventionInput === "Camel Case") {
      for (let i = 0; i < words.length; i++) {
        if (i === 0) {
          result += words[i].toLowerCase();
        } else {
          result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
      }
    } else if (conventionInput === "Pascal Case") {
      for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    } else {
      result = "Error!";
    }
  

    document.getElementById("result").textContent = result;
  }
  
