<?php
// Database connection code
$servername = "localhost";
$username = "lipika";
$password = "@torre58";
$database = "contactme";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the POST records
$txtName = $_POST['name'];
$txtEmail = $_POST['email'];
$txtMessage = $_POST['text'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO registration (name, email, text) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $txtName, $txtEmail, $txtMessage);

// Execute the statement
if ($stmt->execute()) { // If the query is successful
    // Redirect to the Thank You page
    header("Location: thankyou.html");
    exit(); // Ensure the script stops executing after the redirect
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>