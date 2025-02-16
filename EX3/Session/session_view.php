<?php
session_start(); // Start or resume the session

// Check if session variables exist
if (isset($_SESSION["username"])) {
    echo "<h2>Session Details</h2>";
    echo "<p><strong>Username:</strong> " . $_SESSION["username"] . "</p>";
    echo "<p><strong>Email:</strong> " . $_SESSION["email"] . "</p>";
    echo "<p><strong>Role:</strong> " . $_SESSION["role"] . "</p>";
    echo "<a href='session_destroy.php'>Logout (Destroy Session)</a>";
} else {
    echo "No active session found. <a href='session_create.php'>Create Session</a>";
}
?>
