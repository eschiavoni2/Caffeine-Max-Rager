<?php
require "connect.php";

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$postdata = file_get_contents("php://input");
if(!isset($postdata)){
  return;
}
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    print_r($request);

    $quantity = $request->qty->bevQty;
    // print_r($quantity);
    $beverage = $request->tracking->bevType;
        print_r($beverage);


    if($beverage == "Black Coffee") {
      $result = 75 * $quantity;
      print_r($result);
    }
    if($beverage == "Monster Ultra Sunrise") {
      $result = 150 * $quantity;
      print_r($result);
    }
    if($beverage == "Americano") {
      $result = 77 * $quantity;
      print_r($result);
    }
    if($beverage == "Sugar Free NOS") {
      $result = 260 * $quantity;
      print_r($result);
    }
    if($beverage == "Five Hour Energy") {
      $result = 200 * $quantity;
      print_r($result);
    }
    
    $caffeine_max = 500;
    $new_result=$caffeine_max - $result;
    echo "Difference: ",$new_result;

    if($result > $caffeine_max){
      $new_result=$caffeine_max - $result;
    }
    
    $sql = "INSERT INTO bev_info (`bev_qty`, `bev_type`, `bev_mg`, `leftover_mg`) VALUES ('$quantity', '$beverage', $result, $new_result)";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}

?>