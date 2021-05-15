<?php

// echo "New record inserted sucessfully.";
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$gender = $_POST['gender'];
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
    $Select = "SELECT email FROM loginregister WHERE email = ? LIMIT 1";
    $Insert = "INSERT INTO loginregister(fname,lname, email, gender, pasword) values(?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($Select);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $stmt->fetch();
    $rnum = $stmt->num_rows;
    if ($rnum == 0) {
        $stmt->close();
        $stmt = $conn->prepare($Insert);
        $stmt->bind_param("sssss",$fname,$lname, $email, $gender, $password);
        if ($stmt->execute()) {
            // echo '<script>alert("Welcome to Geeks for Geeks")</script>';
            header("location: login.html");
        }
        else {
            echo $stmt->error;
        }
    }
    else {
        // echo '<script>alert("Welcome")</script>';
        header("location: signup.html");
    }
    $stmt->close();
    $conn->close();
}

?>