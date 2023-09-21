const main = () => {
  const TextInput = document.getElementById("text1");
  const addButton = document.getElementById("add-text");
  const TextList = document.getElementById("text-list");

  addButton.addEventListener("click", (e) => {
    if (TextInput.value === "") {
      alert("Error");
    } else {
      e.preventDefault();
      const newList = document.createElement("li");
      newList.textContent = TextInput.value;
      TextList.appendChild(newList);
      const newa = document.createElement("a");
      newa.innerHTML = "x";
      newList.appendChild(newa);
    }
    TextInput.value = "";
  });

  TextList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
    if (e.target.tagName === "A") {
      TextList.removeChild(e.target.parentElement);
    }
  });
};
document.addEventListener("DOMContentLoaded", () => {
  main();
});
