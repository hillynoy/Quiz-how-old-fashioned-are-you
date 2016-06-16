var calculateScore = function() {

    var totalSum = checkAnswer1() + checkAnswer2() + checkAnswer3() + checkAnswer4() + checkAnswer5();
    var msg ="";
    var bg = "";
    if (totalSum >= 0 && totalSum <= 2) {
        msg = "You're not old fashioned at all! " +
            " actually, it seems like you belong to a shitty generation...";
        bg = "url('./pics/ff.jpg')"
    }
    else if (totalSum >= 3 && totalSum <= 5) {
        msg ="you have your 60's woodstock charm, but should probably work on your manners ...";
        bg = "url('./pics/hippie.jpg')"
    }
    else {
        msg ="You're OLD-SCHOOL!!! A breath of fresh air from the past.";
        bg = "url('./pics/ww.jpg')"
    }
    document.getElementById("message").innerHTML = msg;
    document.getElementById("message").style.backgroundImage = bg;
    document.getElementById("lightbox").style.display = "block";
}


//********************************************************************************************

    //first question
var checkAnswer1 = function () {
    var allAnswers = document.getElementsByName("question1");
    var result1 = 0;
    
    for (var i = 0; i < allAnswers.length; i++) {
        var currantAnswer = allAnswers[i];
        
        if (currantAnswer.checked) {
            result1 = parseInt(currantAnswer.value);
        }
            } return result1;
}

 //********************************************************************************************
    //second question pictures
var checkAnswer2 = function() {
    var selectedPic = document.getElementsByClassName("pic selected");
    var selectedPicVal = selectedPic[0].getAttribute("data-q-value");
    return parseInt(selectedPicVal);
}

var toggleSelected = function(pic) {

    var allPics = document.getElementsByClassName("pic");

    for (var i = 0; i < allPics.length; i++) {
        allPics[i].className = "pic";
    }
    if (pic.className.indexOf("selected") === -1) {         //if pic in clean
        pic.className = "pic selected";
    }
}

//********************************************************************************************
    //third question
var checkAnswer3 =function () {
    var allAnswers = document.getElementsByName("question3");
    var result3 = 0;

    for (var i = 0; i < allAnswers.length; i++) {
        var currantAnswer = allAnswers[i];
        var answerValue = parseInt(currantAnswer .value);

        if (currantAnswer.checked) {
            result3 = result3 + answerValue;
        }
    }return result3
}

//********************************************************************************************

    //fourth question
var checkAnswer4 = function () {
    var result4 = 0;
    var userAnswer = parseInt(document.getElementById("question4").value);

    if (userAnswer >= 0 && userAnswer <= 3 ) {
        result4 = 0;
    }
    else if (userAnswer <= 7 && userAnswer >=4 ) {
        result4 = 1;
    }
    else {
        result4 = 2;
    }
    return result4

}



//********************************************************************************************

    //fifth question
var checkAnswer5 = function () {
    var dropDown = document.getElementById("drop");
    var result5 = parseInt(dropDown.value);

     return result5
}

