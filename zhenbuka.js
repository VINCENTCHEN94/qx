var body = $response.body.replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/VINCENTCHEN94/qx/main/zhenbuka.css" type="text/css">').replace(/'6572'/g, "'6578'");
$done({ body });
