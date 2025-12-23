console.log('Hello from external file!');

/*
Why is the script tag placed at the end of the body?

HTML loads top to bottom.

If <script> is in <head>, JS may run before DOM elements exist → errors.

Placing it at the end of <body> ensures HTML loads first.

This prevents blocking page rendering.

Alternative: use defer in <head>.</head> 
*/