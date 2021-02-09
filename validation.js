$(function() {

  $("#firstname_error_message").hide();
  $("#lastname_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();

  var error_firstname = false;
  var error_lastname = false;
  var error_email = false;
  var error_password = false;

  $("#firstname").focusout(function(){
    check_firstname();
  });

  $("#lastname").focusout(function(){
    check_lastname();
  });

  $("#email").focusout(function(){
    check_email();
  });

  $("#password").focusout(function(){
    check_password();
  });

  function check_firstname() {
    var firstname = $("#firstname").val();

    if (firstname == "") {
      $("#firstname_error_message").html("Πρέπει να εισάγετε όνομα");
      $("#firstname_error_message").show();
      $("#firstname_error_message").css("color", "#F90A0A");
      error_firstname = true;
    } else {
      $("#firstname_error_message").hide();
    }
  }

  function check_lastname() {
    var lastname = $("#lastname").val();

    if (lastname == "") {
      $("#lastname_error_message").html("Πρέπει να εισάγετε επίθετο");
      $("#lastname_error_message").show();
      $("#lastname_error_message").css("color", "#F90A0A");
      error_firstname = true;
    } else {
      $("#lastname_error_message").hide();
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();

    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
    } else {
      $("#email_error_message").html("Λανθασμένο email");
      $("#email_error_message").show();
      $("#email_error_message").css("color", "#F90A0A");
      error_email = true;
    }
  }

  function check_password() {
    var password_length = $("#password").val().length;
        
    if (password_length < 8) {
      $("#password_error_message").html("Ο κωδικός πρέπει να έχει τουλάχιστον 8 χαρακτήρες");
      $("#password_error_message").show();
      $("#password_error_message").css("color", "#F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  $("#registration").submit(function() {

    error_firstname = false;
    error_lastname = false;
    error_email = false;
    error_password = false;

    check_firstname();
    check_lastname();
    check_email();
    check_password();

    if (error_firstname === false && error_lastname === false &&
      error_email === false && error_password === false) {
      alert("Επιτυχής εγγραφή");
      return true;
    } else {
      alert("Λάθος στοιχεία. Πρέπει να συμπληρώσετε όλα τα πεδία");
      return false;
    }
  });
});