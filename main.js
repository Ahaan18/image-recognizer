Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});
function capture(){
    Webcam.snap(function(snaps){
document.getElementById("result").innerHTML = '<img id="img123" src="'+snaps+'"/>"';
    });
}
console.log("ml5", ml5.version);
t = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OwZHfbZAh/model.json', model);
function model(){
    console.log("Model loaded!");
}
function identify(){
    i = document.getElementById("img123");
    t.classify(i, result1);
}
function result1(e, r){
if(e){
    console.log(e);
}
else{
    console.log(r);
    document.getElementById("object").innerHTML = r[0].label;
    document.getElementById("accuracy").innerHTML = r[0].confidence.toFixed(2);
}
}