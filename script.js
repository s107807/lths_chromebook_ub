function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

function testButton() {
  console.log('button pressed');
  document.querySelector('#testButton').innerText = 'does this work';
}

function urlChange() {
  var link = bar.value;
  if (link.indexOf('www.') == -1 && link.indexof('http') == -1){
    link = "https://www.google.com/search?q=" + link;
    console.log(link);
    window.location.href=link;
  }
  console.log(link);
  window.location.href=link;  
}
