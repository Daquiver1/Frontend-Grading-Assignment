<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Missing Grade Reporting System</h1>
  </header>

  <main>
    <div class="login">
      <h2>Login to your account</h2>
      <form action="/dashboard" method="post">
        <label for="studentId">Student ID:</label>
        <input type="text" id="studentId" name="studentId" required>
        <label for="pin">PIN:</label>
        <input type="password" id="pin" name="pin" required>
        <button type="submit">Login</button>
      </form>
    </div>
