let square = {
    width:4,
     getArea: function () {return this.width*this.width},
           
};

let circle = {
    radius:5,
    getArea: function () {return this.radius*this.radius*Math.PI},
            
};

let triangle = {
    katet1:4,
    katet2:6,
    getArea: function () {return this.katet1*this.katet2*0.5},
            
};

function Area(figure) {
    switch (figure) {
      case "square":
        return console.log("Area "+ figure +' '+ square.getArea());
      case "circle" :
        return console.log("Area "+ figure +' '+ circle.getArea());
      case "triangle":
        return console.log("Area "+ figure +' '+ triangle.getArea());
      }
  }



Area("triangle");
Area("circle");
Area("square");