const car = {
    Name: "Toyota",
    Model: "ALION",
    "Top Speed": "180km/h",
    start: function(){
        return "Car has started";
    },
    drive: function(){
        return "Car is driving";
    },
    brake: function(){
        return "Car is braked";
    },
    stop: function(){
        return "Car is stopped"
    }
}
// document.getElementById("name").innerHTML="Nothing"
// document.getElementById("model").innerHTML=car.Model;
// document.getElementById("top").innerHTML=car["Top Speed"];