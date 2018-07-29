function getURLParameter(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(window.location.search);
    if (results == null) { return ""; }
    else { return results[1]; }
}