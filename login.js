function authenticate() {
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    var user1 = "student"; 
    var pass1 = "tushar";
    var user3 = "student2"; 
    var pass3 = "anmol";
    var user2 = "teacher"; 
    var pass2 = "mudit";
    if ((un == user1) && (pw == pass1)) {
        window.location = "student.html";
        return false;
    }
    else if ((un == user2) && (pw == pass2)) {
        window.location = "teacher.html";
        return false;
    }
    else if ((un == user3) && (pw == pass3)) {
        window.location = "student2.html";
        return false;
    }
    else {
        alert ("Login was unsuccessful, please check your Username or Password");
    }
  }
function  credential(){
        window.onload=mycode();
      
  }
function  mycode(){
    alert("For Student 1 use username/Password : student/tushar\nFor Student 2 use username/Password : student1/anmol\nFor Student 1 use username/Password : teacher/mudit");
  }