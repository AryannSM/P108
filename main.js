function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vmt5o3I0h/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        

        document.getElementById("result_label").innerHTML = 'I can hear -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


     img=document.getElementById('alien1')
     img1=document.getElementById('alien2')
     img2=document.getElementById('alien3')
     img3=document.getElementById('alien4')


        if (results[0].label == "bark") {
            img.src = '7566-dancing-dog.gif';
             img1.src = 'th.jpeg';
              img2.src = 'cow.jpeg';
                img3.src = 'lion.jpeg';

        }else if (results[0].label == "meow") {
            img.src = 'dog png.png';
            img1.src = '30159-dancing-celebrating-cat.gif';
            img2.src = 'cow.jpeg';
            img3.src = 'lion.jpeg';
        }
       else if (results[0].label == "mow") {
            img.src = 'dog png.png';
            img1.src = 'th.jpeg';
            img2.src = '44991-a-fitness-cow.gif';
            img3.src = 'lion.jpeg';
        }

        else if (results[0].label == "roar"){
            img.src = 'dog png.png';
            img1.src = 'th.jpeg';
            img2.src = 'cow.jpeg';
            img3.src = '36352-lion-running.gif';
        }
    }
}