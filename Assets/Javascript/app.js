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
        var current = (moment().format("m"));
        var name = val.name;

        // I really struggled with Moment JS. This is where I attempted to conver the current time and start time into minutes. The goal was to add them together to get an updated arrival time.
        var startTime = val.time;
        var startMin = (moment.duration(val.time).asMinutes());
        var destination = val.destination;
        var frequency = val.frequency;
        var timeDifference = (moment(current).diff(startMin));
        var diffMin = (moment.duration(timeDifference).asMinutes());
        // var interval = "15";
        // var nArr = startMin.plus(curMin).format("h:mm A");
       
        
        // moment(startTime, "hh:mm A").diff(current, "hh:mm A");
        // console.log("Calc " + calc);
        
        console.log("Current time " + current);
        // console.log("Current time min " + curMin);
        console.log("Start time min " + startMin);
        console.log("Start time " + startTime);
        console.log("Diff " + timeDifference);
        console.log("diff as min " + diffMin );
        
        // console.log("Next Arrival " + nArr)
        console.log("frequency " + frequency);
        
        
        // Assuming the interval time worked I would be able to get an updated minutes away here but between my Moment JS and console logs, it never worked the way it was supposed to.
       

        
        
        var $row = $('<tr>');
        $row.append('<td>' + name + '</td>');
        $row.append('<td>' + destination + '</td>');
        $row.append('<td>' + frequency + '</td>');
        // $row.append('<td>' + timeDifference + '</td>');
        // $row.append('<td>' + nArr + '</td>');
       
        $('tbody').append($row);

    
    });

//   If any errors are experienced, log them to console.
//   function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
//   };