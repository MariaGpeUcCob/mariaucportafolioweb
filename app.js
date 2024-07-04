let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #367bc3;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #367bc3;">Soy Ing. en Energías Renovables y me gusta la Investigación Científica</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
