let num = +document.querySelector('h1').innerText;


function count(event) {
  if (event.target.firstChild.nodeValue === "ADD COUNT") {
    num++
    document.querySelector('h1').innerHTML = num;
    console.log(num);
  }
  else{
    num--;
    console.log(num);
    document.querySelector('h1').innerHTML = num;
  }
}