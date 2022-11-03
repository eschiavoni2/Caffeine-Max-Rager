<?php
require "connect.php";

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

//  $conn = mysqli_connect("localhost","root","root14!","caffeine");
$conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);

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