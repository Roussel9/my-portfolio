<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formulardaten empfangen
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Daten validieren
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode([
            'status' => 'error',<?php
header('Content-Type: application/json');

// Erlaubt Zugriff von allen Domains (wichtig für AJAX)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Einfache Validierung
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['message'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Bitte fülle alle Felder aus.'
        ]);
        exit;
    }
    
    // Daten sammeln
    $newMessage = [
        'name' => trim($_POST['name']),
        'email' => trim($_POST['email']),
        'subject' => trim($_POST['subject']),
        'message' => trim($_POST['message']),
        'timestamp' => date('d.m.Y H:i:s')
    ];
    
    // Bestehende Nachrichten laden
    $messages = [];
    if (file_exists('contact_messages.json')) {
        $jsonContent = file_get_contents('contact_messages.json');
        $messages = json_decode($jsonContent, true);
        if ($messages === null) {
            $messages = []; // Falls JSON ungültig ist
        }
    }
    
    // Neue Nachricht hinzufügen
    $messages[] = $newMessage;
    
    // In Datei speichern
    if (file_put_contents('contact_messages.json', json_encode($messages, JSON_PRETTY_PRINT))) {
        echo json_encode([
            'status' => 'success',
            'message' => '✅ Vielen Dank! Deine Nachricht wurde gespeichert. Ich melde mich bald bei dir.'
        ]);
    } else {
        echo json_encode([
            'status' => 'error', 
            'message' => '❌ Fehler beim Speichern. Bitte sende mir direkt eine Email.'
        ]);
    }
    
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Ungültige Anfrage.'
    ]);
}
?>
            'message' => 'Bitte fülle alle Felder aus.'
        ]);
        exit;
    }
    
    // Daten-Array erstellen
    $data = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
        'timestamp' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR']
    ];
    
    // Versuche, Daten in JSON Datei zu speichern
    try {
        $jsonData = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        
        // In Datei speichern (jeder Eintrag in einer neuen Zeile)
        file_put_contents('contact_messages.json', $jsonData . ",\n", FILE_APPEND | LOCK_EX);
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Vielen Dank! Deine Nachricht wurde erhalten. Ich melde mich bald bei dir.'
        ]);
        
    } catch (Exception $e) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Es gab ein Problem beim Speichern deiner Nachricht. Bitte versuche es später erneut.'
        ]);
    }
    
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Ungültige Anfrage-Methode.'
    ]);
}
?>