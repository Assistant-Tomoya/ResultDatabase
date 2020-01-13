let reference;
let message;
let user;
let database;
let num;
let holder;

// Initialize Firebase

const config = {
  apiKey: "AIzaSyC-dq14LCFEUTbm_hdSLhZ4mCp6SUPWims",
  authDomain: "assistant-tomoya.firebaseapp.com",
  databaseURL: "https://assistant-tomoya.firebaseio.com",
  projectId: "assistant-tomoya",
  storageBucket: "assistant-tomoya.appspot.com",
  messagingSenderId: "701573625629"
};

firebase.initializeApp(config);
database = firebase.database();
reference = database.ref("Grades/Quiz2");
reference.on("value", gotData, errData);

function gotData(data) {
  clearStuff();
  let datas = data.val();
  let keys = Object.keys(datas);

  for (key of keys) {
    let name = datas[key].Name;
    let score = datas[key].Score;

    var li = document.createElement("li");
    li.innerHTML =
      "<span class = 'name'>" +
      name +
      "</span><span class = 'score'>" +
      score +
      "</span>";
    document.getElementById("Database").appendChild(li); //parent element
  }
}

function errData(error) {
  console.log("error");
  console.error(error);
}

function clearStuff() {
  // for realtime database one needs to delete previouly retrived data
  let myStuff = document.getElementsByTagName("li");
  for (let i = 0; i < myStuff.length; i++) {
    myStuff[i].style.display = "none";
  }
}
