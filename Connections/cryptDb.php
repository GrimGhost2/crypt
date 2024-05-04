<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_cryptDb = "localhost";
$database_cryptDb = "crypt";
$username_cryptDb = "root";
$password_cryptDb = "";
$cryptDb = mysql_pconnect($hostname_cryptDb, $username_cryptDb, $password_cryptDb) or trigger_error(mysql_error(),E_USER_ERROR); 
?>