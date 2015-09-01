function Submit(){
 var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
 var fname = document.form.Name.value,
  lname = document.form.LastName.value,
  femail = document.form.Email.value,
  freemail = document.form.enterEmail.value,
  fpassword = document.form.Password.value,
  fmonth = document.form.birthday_month.value,
  fday = document.form.birthday_day.value,
  fyear = document.form.birthday_year.value;
   
 if( fname == "" )
   {
     document.form.Name.focus() ;
  document.getElementById("errorBox").innerHTML = "enter the first name";
     return false;
   }
 if( lname == "" )
   {
     document.form.LastName.focus() ;
   document.getElementById("errorBox").innerHTML = "enter the last name";
     return false;
   }
    
   if (femail == "" )
 {
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "enter the email";
  return false;
  }else if(!emailRegex.test(femail)){
  document.form.Email.focus();
  document.getElementById("errorBox").innerHTML = "enter the valid email";
  return false;
  }
   
   if (freemail == "" )
 {
  document.form.enterEmail.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the email";
  return false;
  }else if(!emailRegex.test(freemail)){
  document.form.enterEmail.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
  return false;
  }
   
  if(freemail !=  femail){
   document.form.enterEmail.focus();
   document.getElementById("errorBox").innerHTML = "emails are not matching, re-enter again";
   return false;
   }
   
   
 if(fpassword == "")
  {
   document.form.Password.focus();
   document.getElementById("errorBox").innerHTML = "enter the password";
   return false;
  }
   
   if (fmonth == "") {
        document.form.birthday_month.focus();
  document.getElementById("errorBox").innerHTML = "select the birthday month";
        return false;
     }
  if (fday == "") {
        document.form.birthday_day.focus();
  document.getElementById("errorBox").innerHTML = "select the birthday day";
        return false;
     }
  if (fyear == "") {
        document.form.birthday_year.focus();
  document.getElementById("errorBox").innerHTML = "select the birthday year";
        return false;
     }
  if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false){
    document.getElementById("errorBox").innerHTML = "select your gender";
    return false;
   }
  if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && fmonth != '' && fday != '' && fyear != ''){
   document.getElementById("errorBox").innerHTML = "form submitted successfully";
   }
   
    onDeviceReady();
   
   function populateDB(tx) {
        
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY, fname, lname, femail, fpassword, fmonth, fday, fyear)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (id, document.form.Name.value, document.form.LastName.value, document.form.Email.value, document.form.Password.value, document.form.birthday_month.value, document.form.birthday_day.value, document.form.birthday_year.value)');
        }

    // Query the database
    //
    function queryDB(tx) {
        tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
    }

    // Query the success callback
    //
    function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
		
		 var table  =  '<table>';
 
 for (var i=0; i<len; i++)
{
	table += '<tr>'
	table += '<td>'
	table += results.rows.item(i).id;
	table += '</td>'
	table += '<td>'
	table += results.rows.item(i).fname;
	table += '</td>'
	table += '</tr>'
}
 
table  += '</table>';

document.getElementById("display").innerHTML = table;
    }

    // Transaction error callback
    //
    function errorCB(err) {
        console.log("Error processing SQL: "+err.code);
    }

    // Transaction success callback
    //
    function successCB() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }

    // Cordova is ready
    //
    function  onDeviceReady() {
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(populateDB, errorCB, successCB);
    }
     
}
function callAnothePage()
             {
                window.location = "test.html";
             }

  //var fname = document.form.Name.value,
  //lname = document.form.LastName.value,
  //femail = document.form.Email.value,
  //freemail = document.form.enterEmail.value,
  //fpassword = document.form.Password.value,
  //fmonth = document.form.birthday_month.value,
  //fday = document.form.birthday_day.value,
  //fyear = document.form.birthday_year.value;

    // Wait for Cordova to load
    //
    // Populate the database 
    //
    
