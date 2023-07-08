window.onload = function() {
    var list = document.getElementById("list");
    var items = list.getElementsByTagName("li");
  
    for (var i = 0; i < items.length; i++) {
      var text = items[i].innerHTML;
      if (text.startsWith("http://") || text.startsWith("https://")) {
        var link = document.createElement("a");
        link.href = text;
        link.innerHTML = text;
        items[i].innerHTML = "";
        items[i].appendChild(link);
      }
      
      var nestedList = items[i].getElementsByTagName("ul")[0];
      if (nestedList) {
        var nestedItems = nestedList.getElementsByTagName("li");
        for (var j = 0; j < nestedItems.length; j++) {
          var nestedText = nestedItems[j].innerHTML;
          if (nestedText.startsWith("http://") || nestedText.startsWith("https://")) {
            var nestedLink = document.createElement("a");
            nestedLink.href = nestedText;
            nestedLink.innerHTML = nestedText;
            nestedItems[j].innerHTML = "";
            nestedItems[j].appendChild(nestedLink);
          }
        }
      }
    }
  };