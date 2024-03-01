<?php 

$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "businessdb";
$conn = "";



// Assume connection variables are defined above
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from the AJAX POST request
$movieId = $_POST['movie_id'];
$watched = $_POST['watched']; // This will get the value 1

// Convert to boolean if necessary
$watchedStatus = $watched ? true : false; // Convert to true/false if your DB expects a boolean

// Prepare the SQL statement
$sql = "UPDATE movies SET watched = ? WHERE movie_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $watchedStatus, $movieId);

// Execute the statement
if ($stmt->execute()) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>