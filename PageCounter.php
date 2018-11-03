<?php
$countFile = "Counter.txt";
$ipFile = "Ip.txt";

if(!file_exists($countFile)){
    fopen($countFile, "w");
}

if(!file_exists($ipFile)){
    fopen($ipFile, "w");
}

$ip = $_SERVER['REMOTE_ADDR'];
$counter = fopen("Counter.txt", "r");
$count = fgets($counter, 1000);
fclose($counter);

$count = $count + 1;

echo $count ."hits";

if(!in_array($ip, file($ipFile, FILE_IGNORE_NEW_LINES))){
    $hit_counter = (file_exists($countFile)) ? file_get_contents($countFile) : 0;
    file_put_contents($ipFile, $ip. "\n", FILE_APPEND);
    file_put_contents($countFile, ++$hit_counter);    
}