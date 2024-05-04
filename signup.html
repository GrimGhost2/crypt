<?php session_start() ?>
<?php require_once('Connections/cryptDb.php'); ?>
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

if ((isset($_POST["MM_insert"])) && ($_POST["MM_insert"] == "signup")) {
  $insertSQL = sprintf("INSERT INTO signup (username, email, password_hash) VALUES (%s, %s, %s)",
                       GetSQLValueString($_POST['username'], "text"),
                       GetSQLValueString($_POST['email'], "text"),
                       GetSQLValueString(MD5($_POST['password']), "text"));

  mysql_select_db($database_cryptDb, $cryptDb);
  $Result1 = mysql_query($insertSQL, $cryptDb) or die(mysql_error());

  $insertGoTo = "login.php";
  if (isset($_SERVER['QUERY_STRING'])) {
    $insertGoTo .= (strpos($insertGoTo, '?')) ? "&" : "?";
    $insertGoTo .= $_SERVER['QUERY_STRING'];
  }
  header(sprintf("Location: %s", $insertGoTo));
}

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>sign up with crypt</title>
<link rel="stylesheet" href="css/signup.css">
<link rel="stylesheet" href="css/style.css">
<style>




.aside__image{
	border-radius: 22rem;
}

</style>
</head>

<body>
      
<script type="text/javascript">
    function myFunction() {
  var x = document.getElementById("password");
  var y = document.getElementById("password_conf");
  if (x.type === "password", y.type === "password") {
    x.type = "text";
	y.type = "text"
  } else {
    x.type = "password";
	y.type = "password";
  }
}
</script>

<section class="contact">
    <div class="container contact__container">
        <aside class="contact__aside">
            <h2>SIGN UP WITH CRYPT</h2>
            <div>
                <img src="images/crypt3.jpg" alt="" class="aside__image">
            </div>
        </aside>
        
        <form action="<?php echo $editFormAction; ?>" name="signup" method="POST">
            <div class="form__name">
                <input type="text" name="username" placeholder="USERNAME" class="inp" required autocomplete="off">
                <input type="email" name="email" class="inp" placeholder="someone@gmail.com" required autocomplete="off">

            </div>
        <input type="password" name="password" id="password" class="inp" placeholder="PASSWORD" required autocomplete="off">
        <input type="password" name="password_conf" id="password_conf" class="inp" placeholder="CONFIRM PASSWORD" required autocomplete="off">
        <div>
       <input type="checkbox" onclick="myFunction()" class="btn btn-primary" />Show Password
       </div>
       <button type="submit" class="btn btn-primary">signup</button>
       <input type="hidden" name="MM_insert" value="signup" />
      </form>
    </div>
</section>


</body>
</html>










