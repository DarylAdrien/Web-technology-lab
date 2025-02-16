<?php
$servername = "localhost";
$username = "root"; // Default MySQL username
$password = ""; // Leave empty if no password set
$database = "ajax_demo";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $city = $_POST["city"];

    $sql = "INSERT INTO users (name, city) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $name, $city);

    if ($stmt->execute()) {
        echo "User Registered Successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
