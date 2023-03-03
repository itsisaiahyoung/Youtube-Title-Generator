const button = document.getElementById('button');
const output = document.getElementById('output');
const randomtitle1 = ['I Just Created ', 'In This Video We Will Be Punching ', 'They Actually Did This... '];
const randomtitle2 = ['The Worlds Biggest Pie ', 'Cars That Go Fast ', 'People With Shorts ']
const randomtitle3 = ['GONE WRONG', 'With His Mom', 'For 24 Hours']
button.addEventListener('click', function() {
  const message = "TITLE: " + randomtitle1[Math.floor(Math.random()*3)] + randomtitle2[Math.floor(Math.random()*3)] + randomtitle3[Math.floor(Math.random()*3)];

  output.innerHTML = message;
});