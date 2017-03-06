$.ajax({
  dataType: "json",
  url: "https://kuoppai1.firebaseio.com/.json",
  success: articles
});

function articles(data, status, jqXHR) {
    console.log(data);
    jsonData = data;
    currentContent = parseInt(localStorage.getItem('currentMediaContent'));
    if (!Number.isInteger(currentContent)) {
        currentContent = 0;
    }
    setContent(jsonData.uutiset[currentContent]);
}

function rotateContent(direction="forward") {
    if (direction == "forward") {
        currentContent += 1;
        currentContent = currentContent % jsonData.uutiset.length;
    } else {
        currentContent -= 1;
        if (currentContent == -1) {
            currentContent = jsonData.uutiset.length - 1;
        }
    }
    setContent(jsonData.uutiset[currentContent]);
    localStorage.setItem('currentMediaContent', currentContent);
}

function toggleAutoRotation() {
    if (rotate) {
        clearInterval(interval);
        rotate = false;
    } else {
        interval = setInterval(rotateContent, 5000);
        rotate = true;
    }
}

function setContent(data) {
    $("#mediaelement").hide().fadeIn();
    $("#mediaelement > #content").text(data.sisältö);
    $("#mediaelement > h3").text(data.otsikko);
    $("#mediaelement > p > #pvm").text(data.päivämäärä);
    if (data.kuva != undefined) {
        $("#mediaelement > #img").html(data.kuva);
    } else {
        $("#mediaelement > #img").html("");
    }

}

window.onload = onPageLoad;

function onPageLoad() {
    rotate = true;
    interval = setInterval(rotateContent, 3000);
}
