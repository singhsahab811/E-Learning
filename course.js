function submitClick() {
    if (formValidation()) {
      alert("Thank you for your time! Your details have been submitted!");
      return true;
    } else {
      return false;
    }
  }

  function formValidation() {
    flag = true;

    if (document.myForm.coursecode.value == "") {
      alert("Please fill in your Name!");
      flag = false;
    }

    // Validate letters only as Name
    if (!/^[a-zA-Z]*$/g.test(document.myForm.coursename.value)) {
      alert("Enter alphabetic characters as Name!");
      flag = false;
    }

    if (document.myForm.courseurl.value == "") {
        alert("Please fill in your Name!");
        flag = false;
      }

    return flag;
  }