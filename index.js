function poemGenerator(event) {
  event.preventDefault();
  let userInputInstructions = document.querySelector("#input");
  let context = `User instructions:generate a romantic poem about${userInputInstructions.value}please give the poem in a more simplified  manner  use the poem writing structure and remember to include <br/> when you meet a comma  `;
  let prompt = "you are a romantic poem writer and love to share sweet poems about love,write me a 4 line romantic poem using the instructions below";
  let aiApiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=3adfat7038a3b8f55f4do5846b4c6a7d`;
  axios.get(aiApiUrl).then(displayPoem);
}


let form=document.querySelector("#form");
form.addEventListener("submit", poemGenerator);

function displayPoem(response) {
  
new Typewriter("#poem", {
  strings: `${response.data.answer}`,
  autoStart: true,
  cursor: "",
});

}