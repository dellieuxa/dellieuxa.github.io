function getmenu(name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = document.getElementById("menu");
      x.innerHTML = xhttp.responseText;
      x.scrollTop = 0;
    }
  };
  xhttp.open("GET", name + "/_index.htm", true);
  xhttp.send(null);
}

function getpage(file, name) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var x = document.getElementById("main");
      x.innerHTML = convertlinks(name, xhttp.responseText);
      x.scrollTop = 0;
    }
  };
  xhttp.open("GET", file + ".htm", true);
  xhttp.send(null);
}

function convertlinks(name, txt) {
  var tab = txt.split("\n");
  var tabNew = new Array(tab.length + 2);

  tabNew[0] = "<h3>" + name + "</h3>";

  tab.forEach((item, index) => {
      if (item.startsWith("http://") || item.startsWith("https://")) {
          tabNew[index + 1] = '<a href="' + item + '">' + item + '</a>';
      }
      else {
          tabNew[index + 1] = item;
      }
  });

  tabNew[tabNew.length - 1] = '<hr width="50%" align="center">';

  var newText = tabNew.join("<br>\n");
  return newText;
}
