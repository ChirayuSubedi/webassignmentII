var (function(){

function init(){
     var horse1 = document.getElementsByTagName('horse1')[0];
     var c = horse1.getContext('2d');

     var container = {x:100,y:100,width:1200,height:800};
     var horse1 = [{x:400,y:400,r:50,color:25,vx:6,vy:10},
                    {x:500,y:300,r:100,color:125,vx:2,vy:-8},
                    {x:800,y:350,r:25,color:285,vx:20,vy:-20},
                    {x:800,y:700,r:75,color:325,vx:13,vy:-8},
                    {x:400,y:500,r:120,color:175,vx:-4,vy:-6}
     ];


     function horse1(){
         c.fillStyle = 'black';
         c.strokeStyle = 'black';
         c.fillRect(container.x,container.y,container.width,container.height);
         //c.clearRect(container.x,container.y,container.width,container.height);
         //c.strokeRect(container.x,container.y,container.width,container.height);

         for(var i=0; i <horse1.length; i++){
             c.fillStyle = 'hsl(' + horse1[i].color + ',100%,50%)';
             c.beginPath();
             c.arc(horse1[i].x,horse1[i].y,horse1[i].r,0,2*Math.PI,false);
             c.fill();

             if((horse1[i].x + horse1[i].vx + horse1[i].r > container.x + container.width) || (horse1[i].x - horse1[i].r + horse1[i].vx < container.x)){
                horse1[i].vx = - horse1[i].vx;
             }
             if((horse1[i].y + horse1[i].vy + horse1[i].r > container.y + container.height) || (horse1[i].y - horse1[i].r + horse1[i].vy < container.y)){
                 horse1[i].vy = - horse1[i].vy;
             }
             horse1[i].x +=horse1[i].vx;
             horse1[i].y +=horse1[i].vy;
         }



         requestAnimationFrame(draw);

     }


    requestAnimationFrame(draw);


}

//invoke function init once document is fully loaded
window.addEventListener('load',init,false);

}());  //self invoking function