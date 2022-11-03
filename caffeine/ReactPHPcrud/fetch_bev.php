<?php
require "connect.php";

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

 $conn = mysqli_connect("containers-us-west-60.railway.app", "root", "WaLBEpIEU80u2lIfoGzh", "railway");

 $sql = "SELECT * FROM beverage";
 $query = mysqli_query($conn,$sql);

 $output = []; //OR  $output = array(); 
  
    while($row=mysqli_fetch_assoc($query))
    {
        $output[] = array(  
              "id" => $row["id"],  
							"bevType" => $row["bev_type"], 
						); 
    }

    echo json_encode($output,JSON_PRETTY_PRINT);
    ?>