<?php

$email = $_POST['email'];
$password = $_POST['password'];

$host = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "loginreg";

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
if ($conn->connect_error) {
    die('Could not connect to the database.');
}
else {
    $query = "SELECT email,pasword FROM loginregister WHERE email='$email' AND pasword='$password'";
    
    $result = $conn->query($query);

    if($result->num_rows > 0){
        header("location: index.html");
    }
    else{
        header("location: login.html");
    }
}
$conn->close();

?>