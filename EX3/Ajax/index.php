<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX User Registration</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 40px;
        }
        form {
            margin-bottom: 20px;
        }
        #message {
            color: green;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Register User</h2>
    
    <form id="userForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="city">City:</label>
        <input type="text" id="city" name="city" required>
        <br><br>
        <button type="submit">Save</button>
    </form>

    <p id="message"></p>

    <script>
        $(document).ready(function() {
            $("#userForm").submit(function(event) {
                event.preventDefault(); // Prevent form from refreshing

                var name = $("#name").val();
                var city = $("#city").val();

                $.ajax({
                    url: "save.php",
                    type: "POST",
                    data: { name: name, city: city },
                    success: function(response) {
                        $("#message").html(response);
                        $("#userForm")[0].reset(); // Clear form fields
                    }
                });
            });
        });
    </script>
</body>
</html>
