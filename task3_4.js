let rectangle_ = {
    width:0,
    height: 0,
    getArea: function () {return this.width*this.height},
    getPerimetr: function () {return ((this.width+this.height)*2)}
        
};

rectangle_.width=2;
rectangle_.height=5;

console.log("Area = "+ rectangle_.getArea());
console.log("Perimetr = "+rectangle_.getPerimetr());
