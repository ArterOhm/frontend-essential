const main = () => {
  const frontendInput = document.getElementById("frontend");
  const frontendButton = document.getElementById("add-front");
  const frontendMilestonesList = document.getElementById("Frontend-Milestone");

  frontendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList = document.createElement("li");

    newList.textContent = frontendInput.value;

    frontendMilestonesList.appendChild(newList);
  });

  const backendInput = document.getElementById("backend");
  const backendButton = document.getElementById("add-back");
  const backendMilestonesList = document.getElementById("Backend-Milestone");

  backendButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newList2 = document.createElement("li");

    newList2.textContent = backendInput.value;

    backendMilestonesList.appendChild(newList2);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
