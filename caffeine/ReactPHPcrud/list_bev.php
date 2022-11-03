
<?php
require "connect.php";

header("Access-Control-Allow-Origin*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$id="";
$method = $_SERVER["REQUEST_METHOD"];

switch ($method){
  case "GET":
    $sql = "SELECT * FROM bev_info";
    break;
}

// run SQL statement
$result = mysqli_query($db,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($db));
}
 
if ($method == "GET") {
    if (!$id) echo "[";
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?",":"").json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo "]";
}else {
    echo mysqli_affected_rows($con);
}

$db->close(); 

?>