var config = {
    apiKey: "AIzaSyAW4lIDhhyiO6n1zfT-_DbVOiliAGi2UoE",
    authDomain: "test-8dead.firebaseapp.com",
    databaseURL: "https://test-8dead.firebaseio.com",
    projectId: "test-8dead",
    storageBucket: "test-8dead.appspot.com",
    messagingSenderId: "219612670369",
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('registrationform').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var age = getInputVal('age');
    var gender = getInputVal('gender');
    var bio = getInputVal('bio');
    var experience = getInputVal('experience')
    // Save message
    saveMessage(name, email, age, gender, bio, experience);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('registrationform').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, age, gender, bio, experience){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      age:age,
      gender:gender,
      bio:bio,
      experience:experience
    });
  }