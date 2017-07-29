(function (){
  $(document).ready(init);
  var config = {
    apiKey: "AIzaSyDqozJaxGR5dgHYsNdDTgizHP5fnmKUif4",
    authDomain: "south-bend-pollution-awareness.firebaseapp.com",
    databaseURL: "https://south-bend-pollution-awareness.firebaseio.com",
    projectId: "south-bend-pollution-awareness",
    storageBucket: "",
    messagingSenderId: "146607326110"
  };

function init(){
   firebase.initializeApp(config);
  $('#post").on('click' , post);
}

function post(){
  var txtName = $('#txtname').val();
  var txtMessage = $('#txtcomments').val();
  
  firebase = firebase.database().ref('Messages').push({
      Name:txtName,
      Message:txtMessage,
  });
}

  var myFirebase = fireabse.database().ref('Messages');
  var startListening = function(){
    myfirebase.once('child_added', function(snapshot){
      var data = snapshot.val();
      console.log(data);
      
      var dataNameElement = document.createElement("b");
      dataNameElement.textContent = data.Name;
      
      var dataMessageElement = document.createElement("p");
      dataMessageElement.textContent = data.Message;
      
      var dataElement = document.createElement("div");
      dataElement.className = "data";
      dataElement.appendChild(dataNameElement);
      dataElement.appendChild(dataMessageElement);
      
      document.getElementById('comments').appendChild(dataElement);
    });
  }
    startListening();
  })();
})();
