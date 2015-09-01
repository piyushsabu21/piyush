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
   
	var str1 = '"';
	var fname1 = str1.concat(fname);
    var fname2= fname1.concat(str1);
	
	var lname1 = str1.concat(lname);
    var lname2= lname1.concat(str1);
	
	var femail1 = str1.concat(femail);
    var femail2= femail1.concat(str1);
	
	var freemail1 = str1.concat(freemail);
    var freemail2= freemail1.concat(str1);
	
	var fpassword1 = str1.concat(fpassword);
    var fpassword2= fpassword1.concat(str1);
	
	var fmonth1 = str1.concat(fmonth);
    var fmonth2= fmonth1.concat(str1);
   
   var fday1 = str1.concat(fday);
    var fday2= fday1.concat(str1);
   
   var fyear1 = str1.concat(fyear);
    var fyear2= fyear1.concat(str1);
   
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
   tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (fname, lname, femail, fpassword, fmonth, fday, fyear)');
        tx.executeSql('INSERT INTO DEMO (fname, lname, femail, fpassword, fmonth, fday, fyear) VALUES (fname2, lname2, femail2, fpassword2, fmonth2, fday2, fyear2)');
		
		queryDB(tx);
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
	table += results.rows.item(i).lname;
	table += '</td>'
	table += '<td>'
	table += results.rows.item(i).fname;
	table += '</td>'
	table += '</tr>'
}
 
table  += '</table>';

document.getElementById('display').innerHTML = table;
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
    
