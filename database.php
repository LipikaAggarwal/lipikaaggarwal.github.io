<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

// <<<<<<< Updated upstream
// $con = mysqli_connect('localhost', 'root', '@torre58','contactme');
// =======
// $con = mysqli_connect('', 'root', '@torre58','db_contact');
// >>>>>>> Stashed changes



// get the post records
$txtName = $_POST['name'];
$txtEmail = $_POST['email'];
// $txtPhone = $_POST['txtPhone'];
$txtMessage = $_POST['text'];

$servername = "localhost";
$username = "root";
$password = "@torre58";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}{
    $stmt = $conn->prepare("insert into registration(name, email, text) values(?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $text);
    $execval = $stmt->execute();
    echo $execval;
    echo "Registration successfully...";
    $stmt->close();
    $conn->close();
}

// Close connection
mysqli_close($conn);
?>