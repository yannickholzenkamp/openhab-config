(function(i) {
    var json = JSON.parse(i);
    return json['state']['buttonevent'] + "-RMT-" + json['state']['lastupdated'] 
})(input)