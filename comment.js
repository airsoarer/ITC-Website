(function(){
    $(document).ready(init);
    var config = {
    apiKey: "AIzaSyDTTDC2lnLcFVYOKy42Gk0z6SJFUUWd_Ow",
    authDomain: "sbpa-3edc6.firebaseapp.com",
    databaseURL: "https://sbpa-3edc6.firebaseio.com",
    projectId: "sbpa-3edc6",
    storageBucket: "sbpa-3edc6.appspot.com",
    messagingSenderId: "686609074912"
  };

function init(){
     firebase.initializeApp(config);
     function comments(){
        myFirebase = firebase.database().ref().child('Comments');
        myFirebase.on('child_added', function(snapshot){
        var comments = snapshot.val();
        console.log(comments);

         var dataNameElement = document.createElement("b");
        dataNameElement.textContent = comments.Name

        var dataCommentElement = document.createElement("p");
        dataCommentElement.textContent = comments.Comment

        var dataElement = document.createElement("div");
        dataElement.className = "data";
        dataElement.appendChild(dataNameElement);
        dataElement.appendChild(dataCommentElement);

        document.getElementById("messages").appendChild(dataElement);
     });
    }
    
    for(var i = 0; i < 1; i++){
        comments();
    }

     $('#post').on('click', getData);
}

function getData(){

    txtName = $('#name').val();
    txtComment = $('#comment').val();
    console.log(txtName, txtComment);

   firebase.database().ref('Comments').push({
        Name:txtName,
        Comment:txtComment,
    })
    var Firebase = firebase.database().ref('Comments');
    var startListening = function(){
    Firebase.once('child_added', function(snapshot){
        var data = snapshot.val();
        console.log(data);

        var dataNameElement = document.createElement("b");
        dataNameElement.textContent = data.Name

        var dataCommentElement = document.createElement("p");
        dataCommentElement.textContent = data.Comment

        var dataElement = document.createElement("div");
        dataElement.className = "data";
        dataElement.appendChild(dataNameElement);
        dataElement.appendChild(dataCommentElement);

        document.getElementById("messages").appendChild(dataElement);
            });
        }
        for(var i = 0;  i < 0; i++){
            startListening();
        }
}
})();