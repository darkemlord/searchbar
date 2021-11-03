// TODO: Autocomplete the input with AJAX calls.
const search = document.querySelector("#search");
const resultParent = document.querySelector("#results");
const results = document.querySelectorAll("#results li");

const printWords = (word) => {
  return word;
};

search.addEventListener('keyup', () => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${search.value}`)
    .then(response => response.json())
    .then((data) => {
      if (search.value === "" || search.value === " ") {
        resultParent.style.display = "none";
      } else {
        resultParent.style.display = "block";
        const words = data.words.map(printWords);
        results.forEach((result, index) => {
          result.innerHTML = words[index];
          if (words[index] === undefined) {
            result.innerHTML = "";
          }
        });
      }
    });
});
