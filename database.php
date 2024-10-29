<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '@torre58','contactme');

// get the post records
$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
// $txtPhone = $_POST['txtPhone'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `contactme` (`Id`, `NAME`, `EMAIL`, `MESSAGE`) VALUES ('0', '$txtName', '$txtEmail', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if (mysqli_query($conn, $sql)) {
    echo "Data saved successfully!";
} else {
    echo "Error saving data: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>