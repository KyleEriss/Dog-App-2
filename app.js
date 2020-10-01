function getDogImage() {
    let rawUserInput = document.getElementById("dogBreed").value;
    let userInput = rawUserInput.toLowerCase();
    let userInputLength = countWords(userInput);
    if (userInputLength === 1) {
        let dynamicUrl = `https://dog.ceo/api/breed/${userInput}/images/random`;
        
        // Check if file found
        fetch(dynamicUrl)
        .then(handleErrors)
        .then(response => console.log("ok") )
        .catch(error => alert("Sorry, breed not found. Please check spelling."));
        
        // Resume program if file found
        fetch(dynamicUrl)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("Something went wrong. Try again later."));
    }
    else if (userInputLength === 2) {
        let userInputArray = userInput.split(" ");
        let subBreed = userInputArray[0];
        let breed = userInputArray[1]
        let dynamicUrl = `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
        
        // Check if file found
        fetch(dynamicUrl)
        .then(handleErrors)
        .then(response => console.log("ok") )
        .catch(error => alert("Sorry, breed not found. Please check spelling."));

        // Resume program if file found
        fetch(dynamicUrl)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert("Something went wrong. Try again later."));
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

    function countWords(userInput) { 
    return userInput.split(" ").length;
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
        if (document.getElementById("dogBreed").value === 0) {
            return alert("Please enter dog breed");
        }
        $(".results-img").empty();
        getDogImage();
    });
}
    
$(function() {
    console.log("App loaded! Waiting for submit!");
    watchForm();
});