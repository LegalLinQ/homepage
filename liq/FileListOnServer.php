var files = <?php $out = array();
foreach (glob('*.xlsx') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); 
/*
RETURN EEN LIJST MET FILENAMEN IN DEZE FOLDER
Aanroepen in JS script met "<script src='FileListOnServer.php'></script>"
Dan kun je gebruik maken van de "files[]" array.
*/
?>;