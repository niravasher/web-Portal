var app_fireBase = {};

// var firebase = require("firebase/app");

var config = {
        apiKey: "AIzaSyAiI5g8tqfPcqVSRUrqcLVqELPm3YwGFkU",
        authDomain: "bosm-portal.firebaseapp.com",
        databaseURL: "https://bosm-portal.firebaseio.com",
        projectId: "bosm-portal",
        storageBucket: "bosm-portal.appspot.com",
        messagingSenderId: "1043981884632"
};
firebase.initializeApp(config);

var db = firebase.firestore();


db.collection("sport")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            var sum = 0;
            sum = parseInt(doc.data().match_type) * 1000 + Number(doc.data().is_gender) * 100 + parseInt(doc.id) + 1;
            console.log(sum);
            $("#sport").append("<option value=" + sum + ">" + doc.data().name + "</option>");
            // doc.data().name;
        });
    })
    .catch(function(error) {
        // console.log("Error getting documents: ", error);
    });



// db.collection("cities").doc("LA").set({
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA"
//     })
//     .then(function() {
//         console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//         console.error("Error writing document: ", error);
//     });



app_fireBase = firebase;

