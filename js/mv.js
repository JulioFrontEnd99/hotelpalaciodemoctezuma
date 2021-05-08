
const listOne = document.getElementsByClassName("list1")[0];
const listTwo = document.getElementsByClassName("list2")[0];
const listThree = document.getElementsByClassName("list3")[0];
const featureOne = document.getElementsByClassName("feature1")[0];
const featureTwo = document.getElementsByClassName("feature2")[0];


listOne.addEventListener("click", (e) => {
    listOne.style.borderBottom = "2px solid #35427d";
    listTwo.style.borderBottom = "1.5px solid hsl(210, 10%, 92%)";
    featureOne.style.display = "flex";
    featureTwo.style.display = "none";
});

listTwo.addEventListener("click", (e) => {
    listOne.style.borderBottom = "1.5px solid hsl(210, 10%, 92%)";
    listTwo.style.borderBottom = "2px solid #35427d";
    featureOne.style.display = "none";
    featureTwo.style.display = "flex";
});
