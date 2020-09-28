function getDogImage() {
    let userInput = document.getElementById("dogBreed");
    let dynamicUrl = "https://dog.ceo/api/breed/"${userInput}"/images/random";
    fetch(dynamicUrl)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}
    
function displayResults(responseJson) {
    console.log(responseJson);
    let imageText = `<li><img src="${responseJson.message}" class="results-img"></li>`;
    $(".results-img").append(imageText)
    $(".results").removeClass("hidden");
}
    
function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        $(".results-img").empty();
        getDogImage();
    });
}
    
$(function() {
    console.log("App loaded! Waiting for submit!");
    watchForm();
});