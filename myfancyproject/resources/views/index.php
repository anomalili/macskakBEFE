<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="js/app.js" type="module"></script>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" type="module"></script>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css\macskakStyle.css">
    <meta name="csrf-token" content=<?php $token = csrf_token();
                                    echo $token; ?>>
    <meta name="viewport" content="width=device-width, initial-scale=1">


    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->


</head>

<body>
    <header>
        <h1>Hány macska van a rendszerben?</h1>

    </header>
    <main>
        <article>
            <button id="mutasdCicak">Mutasd az összes macskát!</button>
            <div id="cicakHelye"></div>

        </article>

    </main>


</body>

</html>