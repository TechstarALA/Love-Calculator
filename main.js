function match(){
    var lover1 = document.getElementById('love').value;
    var lover2 = document.getElementById('love2').value;
    var comp = math.round(math.roundom()*100);
    var combine = lover1 + "and " + lover2 + "has "+ comp + "%"
    // document.getElementById('output').innerHTML = lover1 + ' and ' + lover2 + ' Your love percent is ' + comp + ' % ';
    document.getElementById("output").innerHTML = combine;
}