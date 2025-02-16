<?php
session_start(); // Start the session

// Store user details in session variables
$_SESSION["username"] = "DarylAdrien";
$_SESSION["email"] = "edaryl2705@gmail.com";
$_SESSION["role"] = "Admin";

echo "Session Created Successfully! <br>";
echo "<a href='session_view.php'>Go to Session View</a>";
?>
