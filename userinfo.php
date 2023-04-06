<?php

// Establish a connection to the MySQL database server
$host = "localhost";
$username = "root";
$password = "";
$dbname = "youtubeusername";
$conn = new mysqli("localhost", "root", "", "youtubeusername");

// Check the connection and display an error message if there is a problem
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve user data from the form using POST method
$user = $_POST['user'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$comments = $_POST['comments'];

// Prepare and execute the SQL query to insert user data into the database
$sql = "INSERT INTO userinfodata (user, email, mobile, comments)
        VALUES ('$user', '$email', '$mobile', '$comments')";
if ($conn->query($sql) === TRUE) {
  echo "Thank you for contacting us!!!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();

?>
