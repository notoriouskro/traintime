// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtKTOeqShjHe5vsOkevu7jslcB6lEIRdY",
    authDomain: "bootcamp-fire.firebaseapp.com",
    databaseURL: "https://bootcamp-fire.firebaseio.com",
    projectId: "bootcamp-fire",
    storageBucket: "bootcamp-fire.appspot.com",
    messagingSenderId: "745415818494"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();


// Capture Button Click
$("#add-train").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    // Store user input.

    var name = $('#train-input').val();
    var destination = $('#destination-input').val();
    var time = $('#time-input').val();
    var frequency = $('#frequency-input').val();

    // Initial Values
    database.ref().set({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency
    })
    //add table row
    

    

    });


    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val().name);
        console.log(snapshot.val().destination);
        console.log(snapshot.val().frequency);
        console.log(snapshot.val().time);

        $("#newName").text(snapshot.val().name);
        $("#newDest").text(snapshot.val().destination);
        $("#newFreq").text(snapshot.val().frequency);
        $("#newTime").text(snapshot.val().time);

    });

//   If any errors are experienced, log them to console.
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   };