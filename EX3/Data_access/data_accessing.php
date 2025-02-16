<?php
$servername = "localhost";
$username = "root";  // Default user
$password = "";      // Keep empty if no password set
$database = "bookstore";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$book = null;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isbn = $_POST["isbn"];
    $sql = "SELECT * FROM books WHERE isbn = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $isbn);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $book = $result->fetch_assoc();
    } else {
        $error = "No book found with ISBN: $isbn";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Store - Search by ISBN</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            text-align: center;
        }
        table {
            width: 50%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 10px;
        }
        th {
            background-color: #f2f2f2;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h2>Search Book by ISBN</h2>
    <form method="post">
        <label for="isbn">Enter ISBN:</label>
        <input type="text" id="isbn" name="isbn" required>
        <button type="submit">Search</button>
    </form>

    <?php if (isset($book)): ?>
        <h3>Book Details</h3>
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
            </tr>
            <tr>
                <td><?php echo htmlspecialchars($book["title"]); ?></td>
                <td><?php echo htmlspecialchars($book["author"]); ?></td>
                <td>$<?php echo number_format($book["price"], 2); ?></td>
            </tr>
        </table>
    <?php elseif (isset($error)): ?>
        <p class="error"><?php echo htmlspecialchars($error); ?></p>
    <?php endif; ?>
</body>
</html>
