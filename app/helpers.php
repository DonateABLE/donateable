<?php

// Convert seconds into months, days, hours, minutes, and seconds.
function formatSeconds($seconds) {
    $s = $seconds%60;
    $m = floor(($seconds%3600)/60);
    $h = floor($seconds/3600);

    // Ensure all values are 2 digits, prepending zero if necessary.
    $s = $s < 10 ? '0' . $s : $s;
    $m = $m < 10 ? '0' . $m : $m;
    $h = $h < 10 ? '0' . $h : $h;

    return "$h:$m:$s";

}
