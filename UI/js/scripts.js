
    function check(form)/*function to check userid & password*/
    {
     /*the following code checkes whether the entered userid and password are matching*/
     if(form.email.value == "admin@epic.com" && form.password.value == "admin")
      {
        window.open('admin.html')/*opens the target page while Id & password matches*/
      }
     else
     {
       alert("Error Password or Username")/*displays error message*/
      }