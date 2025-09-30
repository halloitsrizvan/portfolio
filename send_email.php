<?php
// Add error reporting at the top
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Add basic validation
    if(empty($_POST['name']) {
        die('Name is required');
    }
    // Add similar checks for other fields
    
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $website_type = htmlspecialchars($_POST['website_type']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "clgrizvan@gmail.com";
    $email_subject = "New Contact Form Submission: $subject";
    $email_body = "You have received a new message.\n\n".
                  "Name: $name\n".
                  "Email: $email\n".
                  "Website Type: $website_type\n".
                  "Message:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // First test if mail would work
    if(mail($to, $email_subject, $email_body, $headers)) {
        // Create thank-you.html if it doesn't exist
        header('Location: thank-you.html');
    } else {
        echo "Mail function failed";
    }
    exit;
} else {
    // If someone tries to access directly
    header('Location: contact.html');
    exit;
}
?>