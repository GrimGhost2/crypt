<?php session_start() ?>
<?php require_once('Connections/cryptDb.php'); ?>
<?php
//initialize the session
if (!isset($_SESSION)) {
  session_start();
}

// ** Logout the current user. **
$logoutAction = $_SERVER['PHP_SELF']."?doLogout=true";
if ((isset($_SERVER['QUERY_STRING'])) && ($_SERVER['QUERY_STRING'] != "")){
  $logoutAction .="&". htmlentities($_SERVER['QUERY_STRING']);
}

if ((isset($_GET['doLogout'])) &&($_GET['doLogout']=="true")){
  //to fully log out a visitor we need to clear the session varialbles
  $_SESSION['MM_Username'] = NULL;
  $_SESSION['MM_UserGroup'] = NULL;
  $_SESSION['PrevUrl'] = NULL;
  unset($_SESSION['MM_Username']);
  unset($_SESSION['MM_UserGroup']);
  unset($_SESSION['PrevUrl']);
	
  $logoutGoTo = "index.php";
  if ($logoutGoTo) {
    header("Location: $logoutGoTo");
    exit;
  }
}
?>
<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

$editFormAction = $_SERVER['PHP_SELF'];
if (isset($_SERVER['QUERY_STRING'])) {
  $editFormAction .= "?" . htmlentities($_SERVER['QUERY_STRING']);
}

if ((isset($_POST["MM_insert"])) && ($_POST["MM_insert"] == "cryptVal")) {
  $insertSQL = sprintf("INSERT INTO crypt_value (username, cryptVal) VALUES (%s, %s)",
                       GetSQLValueString($_POST['username'], "text"),
                       GetSQLValueString($_POST['crypt_value'], "int"));

  mysql_select_db($database_cryptDb, $cryptDb);
  $Result1 = mysql_query($insertSQL, $cryptDb) or die(mysql_error());
}

$colname_userD = "-1";
if (isset($_SESSION['username'])) {
  $colname_userD = $_SESSION['username'];
}
mysql_select_db($database_cryptDb, $cryptDb);
$query_userD = sprintf("SELECT username, email FROM signup WHERE username = %s ORDER BY username ASC", GetSQLValueString($colname_userD, "text"));
$userD = mysql_query($query_userD, $cryptDb) or die(mysql_error());
$row_userD = mysql_fetch_assoc($userD);
$totalRows_userD = mysql_num_rows($userD);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Home</title>
<link rel="stylesheet" href="css/dash.css" />
</head>

<body>


<section class="contact">
        <div class="container contact__container">
<aside class="contact__aside">
<h2>WELCOME $<?php echo ucwords($_SESSION['MM_Username']); ?>😊</h2>


<div>
      <img src="images/crypt3.jpg" alt=""  class="aside__image">
    </div>

   <div class="mine">
       <p class="btn btn-primary" id="incrementButton">MINE</p>
  </div>
</aside>
<form action="<?php echo $editFormAction; ?>" method="POST" name="cryptVal">
<input type="text" name="username" value="<?php echo ucwords($_SESSION['MM_Username']); ?>"/>
<input type="range" name="crypt_value" id="crypt" />
<input type="submit" />
<h2> $Crypt value earned</h2>
  <h1 id="numberDisplay">5</h1>
<input type="hidden" name="MM_insert" value="cryptVal" />
</form>

</div>

<footer>

<a href="<?php echo $logoutAction ?>" class="btn btn-primary">Log out</a>

 </footer>



  <script>
    // Retrieve the number and last click timestamp from local storage
    let number = parseFloat(localStorage.getItem('savedNumber')) || 5;
    let lastClickTime = parseInt(localStorage.getItem('lastClickTime')) || 0;
    const numberDisplay = document.getElementById('numberDisplay');
	const inp = document.getElementById('crypt');
    const incrementButton = document.getElementById('incrementButton');

    // Display the number
    numberDisplay.textContent = ` $ ${number} `;

    // Function to increment the number by 0.2
    function incrementNumber() {
      const currentTime = Date.now();
      // Check if 24 hours have passed since the last click
      if (currentTime - lastClickTime >= 24 * 60 * 60 * 1000 ) {
        number += 0.2;
        numberDisplay.textContent = ` $ ${number} `;
		inp.value = number;
        
        // Store the updated number and timestamp of the current click in local storage
        localStorage.setItem('savedNumber', number);
        localStorage.setItem('lastClickTime', currentTime);
      } else {
        alert("You're mining session is stil ongoing.");
      }
    }

    // Add event listener to the button
    incrementButton.addEventListener('click', incrementNumber);
  </script>
</body>
</html>
<?php
mysql_free_result($userD);
?>
