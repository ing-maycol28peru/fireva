// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAznkAvZMZtobetKW0ENGu6fhUR_XlqE-U",
    authDomain: "agenda-89098.firebaseapp.com",
    databaseURL: "https://agenda-89098.firebaseio.com",
    projectId: "agenda-89098",
    storageBucket: "agenda-89098.appspot.com",
    messagingSenderId: "134436183499"
  };
  firebase.initializeApp(config);
//coleccion de referencia de mensaje en la base de sdstos

var messagesRef=firebase.database().ref('messages');


document.getElementById('contactoform').addEventListener('button',buttonform);
fuction buttonform(e){


	e.preventDefault();
	console.log(1258);

	//get valor
	var name = getInputVal('name');
	var email = getInputVal('email');
	var codigo = getInputVal('codigo');
	saveMessage(name,email,codigo);
}
//fuction get

fuction getInputVal(id){
	return document.getElementById(id).value;
}

//fucion de guarda mensajes



fuction saveMessage(name,email,codigo){

	var newMessageRef= messagesRef.push();

}newMessageRef.set({
	name :name,
	email:email,
	codigo :codigo,
});