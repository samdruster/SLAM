<!DOCTYPE html>
<html>
  <head>
    <title> Display Data from DB</title>
      <style type="text/css">
      table{
      border-collapse: collapse;
      width: 100%;
      color: #d96549;
      font-family: monospace;
      font-size: 25px;
      text-align: Left;
}
th{
   background-color: #d96549;
   color: white;
}
tr:nth-child(even) {background-color: #f2f2f2}
}
</style>
</head>
<body>
<table>
<tr>
<th>ID</th>
<th>TEMP_VALUE</th>
<th>Hum_Value</th>
</tr>

<?php

$servername = "localhost"; 

$username = "root"; 

$password = "salman@0393"; 

$dbname = "SLAM"; 

// Create connection 

// Check connection 
$conn = mysqli_connect($servername,$username,$password,$dbname);

if ( !$conn ) { 

  die("Connection failed: " . mysqli_connect_error()); 
} 


// SQL query  

$sql = "SELECT ID,TEMP_VALUE,Hum_Value FROM TEMP_DETAILS"; 



$result = mysqli_query( $conn, $sql );  
$row = mysqli_fetch_array($result);

while($row = mysqli_fetch_array($result)) { 

  echo "<tr><td>" .$row["ID"]. "</td>td>".$row["TEMP_VALUE"]."</td><td>".$row["Hum_Value"]."</td></tr>"; //printing Query result 

}  


// Close connection 

mysqli_close($conn); 
?>
</table>
</body>
</html>