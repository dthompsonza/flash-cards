$(document).ready(function () {

    var menu = new Array;
    var menuLevel = 0;

    loadDB();

    function loadDB() {
        $.getJSON("menu.json", function (data) {
            menu = data;
            drawMenu(menuLevel);
        })
    } //loadDB

    function drawMenu(currentLevel) {
        var menuName = menu.Name;
        $("#mainTitle").empty();
        $("#mainTitle").append(menuName);

  //      for (i = 0; i < menu)    
    }

    
});

