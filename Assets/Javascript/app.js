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
    database.ref().push({
        name: name,
        destination: destination,
        time: time,
        frequency: frequency,
        minAway: minAway
    })
    //add table row
    
    

    });


    database.ref().on("child_added", function (snap) {

        console.log(snap.val())
    
        var val = snap.val();
        var current = moment();
        var name = val.name;
        var startTime = moment(val.time, "HH:mm");
        var destination = val.destination;
        var frequency = val.frequency;
        var timeDifference = current.diff(startTime);
        var nArr = current.add(timeDifference).minutes();
       
        
        // moment(startTime, "hh:mm A").diff(current, "hh:mm A");
        // console.log("Calc " + calc);
        console.log("Diff " + timeDifference);
        console.log("Current time " + current);
        console.log("Next Arrival " + nArr)
        
        
        
        
       

        
        
        var $row = $('<tr>');
        $row.append('<td>' + name + '</td>');
        $row.append('<td>' + destination + '</td>');
        $row.append('<td>' + frequency + '</td>');
        $row.append('<td>' + timeDifference + '</td>');
        $row.append('<td>' + nArr + '</td>');
       
        $('tbody').append($row);

    
    });

//   If any errors are experienced, log them to console.
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   };