var canvas = document.querySelector('canvas')
    ;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');




function Circle(x, y, dx, dy, radius) { //하나의 객체를 만든 셈이다
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
        c.fillStyle='yellow';
    }
    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x + this.radius > innerWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }
        this.draw();
    }
}
var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius*2)+radius; //시작 위치
    var y = Math.random() * (innerHeight - radius*2)+radius;
    var dx = (Math.random() - 0.5) * 5; //속도
    var dy = (Math.random() - 0.5) * 5;
    
    circleArray.push(new Circle(x,y,dx,dy,radius));
}
function animate() {
    requestAnimationFrame(animate); //애니메이션
    c.clearRect(0, 0, innerWidth, innerHeight); //흔적 안남도록 순간순간 초기화
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}
animate();