function poemGenerator(event) {
    event.preventDefault();
new Typewriter("#poem", {
  strings: "love pateint and kind,is not proud or rude",
    autoStart: true,
    cursor: "",
});
}
let form=document.querySelector("#form");
form.addEventListener("submit", poemGenerator);