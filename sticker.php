<?php
switch ($_SERVER['HTTP_ORIGIN']) {
    case 'https://pro-cycling-stickers.myshopify.com': case 'https://pro-cycling-stickers.myshopify.com':
    header('Access-Control-Allow-Origin: '.$_SERVER['HTTP_ORIGIN']);
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    break;
}
$image = $_POST['image'];
$location = "upload/";
$image_parts = explode(";base64,", $image);
$image_base64 = base64_decode($image_parts[1]);
$filename = "sticker-".uniqid().'.png';
$file = $location . $filename;
file_put_contents($file, $image_base64);
echo 'https://www.codehouse.pk/'.$file;

//with image tag
//echo '<img src="https://www.codehouse.pk/'.$file.'">';

//base64 image returns
//$image = $file;
//$imageData = base64_encode(file_get_contents($image));
//echo '<img src="data:image/jpeg;base64,'.$imageData.'">';
?>
