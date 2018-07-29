// Jan-Joost van Zon, July 5, 2010

// Thanks to Matt Doyle http://www.elated.com/articles/javascript-and-cookies/


function setCookie(name, value, expires, path, domain, secure) {
    var cookie_string = name + "=" + escape(value);
    if (expires) { cookie_string += "; expires=" + expires; }
    if (path) { cookie_string += "; path=" + escape(path); }
    if (domain) { cookie_string += "; domain=" + escape(domain); }
    if (secure) { cookie_string += "; secure"; }
    document.cookie = cookie_string;
}

function saferGetCookie(name) {
    var results = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)"); // This RegExp was 'borrowed'. I do not know why it checks so many characters.
    if (results) { return results[2]; }
    else { return null; }
}
