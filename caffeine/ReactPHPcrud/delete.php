
<?php
require "connect.php";

header("Access-Control-Allow-Origin*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if(isset($_POST["id"]))
print_r($_POST);
{
$id=$_GET["id"];
$sql = "DELETE FROM bev_info WHERE id = '$id' LIMIT 5";
$sql_run = mysqli_query($db, $sql);

}

?>