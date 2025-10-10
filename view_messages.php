<?php
// view_messages.php
$password = "Marius@2009";

// Passwort prüfen
if (!isset($_POST['password']) || $_POST['password'] !== $password) {
    echo '
    <!DOCTYPE html>
    <html>
    <head>
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body class="container mt-5">
        <h2>Nachrichten anzeigen</h2>
        <form method="post" class="mt-3">
            <div class="mb-3">
                <input type="password" name="password" class="form-control" placeholder="Passwort" required>
            </div>
            <button type="submit" class="btn btn-primary">Anzeigen</button>
        </form>
    </body>
    </html>
    ';
    exit;
}

// Nachrichten laden
$messages = [];
if (file_exists('contact_messages.json')) {
    $jsonContent = file_get_contents('contact_messages.json');
    $messages = json_decode($jsonContent, true);
}

echo '
<!DOCTYPE html>
<html>
<head>
    <title>Kontakt Nachrichten</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-4">
    <h1>📨 Kontakt Nachrichten</h1>
    <p class="text-muted">Anzahl: ' . count($messages) . ' Nachrichten</p>
';

if (empty($messages)) {
    echo '<div class="alert alert-info">Noch keine Nachrichten vorhanden.</div>';
} else {
    foreach (array_reverse($messages) as $index => $msg) {
        echo '
        <div class="card mb-3">
            <div class="card-header">
                <strong>' . htmlspecialchars($msg['name']) . '</strong> 
                <small class="text-muted">' . htmlspecialchars($msg['email']) . '</small>
            </div>
            <div class="card-body">
                <h5 class="card-title">' . htmlspecialchars($msg['subject']) . '</h5>
                <p class="card-text">' . nl2br(htmlspecialchars($msg['message'])) . '</p>
                <small class="text-muted">' . $msg['timestamp'] . '</small>
            </div>
        </div>
        ';
    }
}

echo '</body></html>';
?>