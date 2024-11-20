function checkName() {
    var first = document.getElementById("first").value;
    var regex = /^[а-яА-Я\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("name_Check").style.color = "green";
        document.getElementById("name_Check").innerHTML = "Данные корректны";
        return true;
    }
    else {// if it's not
        document.getElementById("name_Check").style.color = "red";
        document.getElementById("name_Check").innerHTML = "Введите 2-15 символов на русской раскладке";
        return false;
    }
}

function checkMail() {
    var mail = document.getElementById("mail").value;
    var regex = /^[a-zA-Z\s]{4,20}$/;

    if (regex.test(mail)) { 
        document.getElementById("mail_Check").style.color = "green";
        document.getElementById("mail_Check").innerHTML = "Данные корректны";
        return true;
    }
    else {
        document.getElementById("mail_Check").style.color = "red";
        document.getElementById("mail_Check").innerHTML = "Вы уверены, что данные введены корректно?";
        return false;
    }
}

function checkTel() {
    var tel = document.getElementById("tel").value;
    var regex = /^\d{1}-\d{3}-(\d{3})-\d{2}-\d{2}$/;

    if (regex.test(tel)) { 
        document.getElementById("tel_Check").style.color = "green";
        document.getElementById("tel_Check").innerHTML = "Данные корректны";
        return true;
    }
    else {
        document.getElementById("tel_Check").style.color = "red";
        document.getElementById("tel_Check").innerHTML = "Введите номер телефона";
        return false;
    }
}

//Collect and output all the data
function outputData() {
    var first = document.getElementById("first").value;
    var mail = document.getElementById("mail").value;
    var tel = document.getElementById("tel").value;
    var studying = document.getElementById("studying").value;

    if (first != "" && mail != "" && tel != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Здравствуйте, " + first + "!";
        document.getElementById("summary").innerHTML += "<p>Ваша заявка была отправлена. Вы указали следующие данные: </p>";
        document.getElementById("summary").innerHTML += "<p>Номер телефона: " + tel + ".</br>";
        document.getElementById("summary").innerHTML += "<p>Почта: " + mail + ".</br>";
        document.getElementById("summary").innerHTML += "Интересующая форма обучения: " + studying + ".</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Не все поля заполнены";
    }
}

function getOutOfMySwamp() {
    document.getElementById("swamp").style.color = "rgba(0, 255, 34, 34)";
    document.getElementById("swamper").style.opacity = "100";
}

function joke() {
    document.getElementById("body__query").style.color = "red";
    document.getElementById("header").style.background = "red";
    document.getElementById("body__box__block__title").style.color = "red";
    document.getElementById("body__box__block__title2").style.color = "red";
    document.getElementById("body__box__block__title3").style.color = "red";
    document.getElementById("body__query2").style.color = "red";
    document.getElementById("body__query3").style.color = "red";
    document.getElementById("body__form").style.background = "rgb(87, 14, 14)";
    document.getElementById("body__form2").style.background = "rgb(87, 14, 14)";
    document.getElementById("tail").style.background = "red";

    
}




