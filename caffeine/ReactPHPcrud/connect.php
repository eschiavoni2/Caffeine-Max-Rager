<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "containers-us-west-60.railway.app";
$username = "root";
$password = "WaLBEpIEU80u2lIfoGzh";
$database= "railway";
 
// Create connection
$db = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
if ($db->connect_error) {
  die($db->connect_error);
}
// echo "Connected successfully";
?>
