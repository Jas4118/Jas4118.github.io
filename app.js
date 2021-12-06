//Used to build what the html page does
const fet = new Fetch();
const ui = new UI();

//Setting variables for search bar and button
const search = document.getElementById("userSearch");
const button = document.getElementById("submit");
//event listen for button
button.addEventListener("click", () => {
  //checks value entered in search bar
  const enterInfo = search.value;

  fet.getCurrent(enterInfo).then((data) => {
    //call populateUI from ui class
    ui.populateUI(data);
  });
});
