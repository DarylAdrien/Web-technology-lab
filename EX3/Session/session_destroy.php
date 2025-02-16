<?php
session_start(); // Start or resume the session
session_unset(); // Unset all session variables
session_destroy(); // Destroy the session

echo "Session destroyed successfully! <br>";
echo "<a href='session_create.php'>Create New Session</a>";
?>
