
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/65cMXmt9v/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        red1 = Math.floor(Math.random() * 255) + 1;
        green2 = Math.floor(Math.random() * 255) + 1;
        blue3 = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'detected voiced of - '+ results[0].label;
        document.getElementById("result_count").innerHTML = 'detected dog - '+ dog + 'detected cat' + cat;
        document.getElementById("result_label").style.color = "rgb("+ red1 +","+ green2 +","+ blue3 +")";
        document.getElementById("result_count").style.color = "rgb("+ red1 +","+ green2 +","+ blue3 +")";

        img3 = document.getElementById('animal_image');

        if (results[0] == "bark"){
            img3.src = 'bark.gif';
            dog = dog + 1;
        } else if (results[0].label == "meow"){
            img3.src = 'cat-cartoon.gif'; 
        }  else{
            img3.src = 'listen.gif';
        }
    }
}

