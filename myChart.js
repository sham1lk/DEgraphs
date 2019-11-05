"use strict";
class Abstract_numerical_method {
    constructor(x0, y0, x, n) {
        this.x = x;
        this.X = [x0];
        this.Y = [y0];
        this.n = n;
    }
    add(label, data, name,color,myChart)
    {
        myChart.data.labels = label;
        myChart.data.datasets.push({
            label: name,
            fill: false,
            borderColor: color,
                    backgroundColor: color,
                    pointBackgroundColor: "#55bae7",
                    pointBorderColor: color,
                    pointHoverBackgroundColor: "#55bae7",
                    pointHoverBorderColor: "#55bae7",
                    data: data,
        });
         myChart.update();
    
    };
    local_err(myChart, name,color)
    {
        let local_er = [0];
        local_er.length = 1;
        
        for (let i = 1; i <=this.n; i++)
        local_er[i]=Math.abs((this.Y[i-1]-solution(this.X[i-1],this.X[0],this.Y[0]))-(this.Y[i]-solution(this.X[i],this.X[0],this.Y[0])));
        console.log(local_er);
        this.add(this.X, local_er, name ,color,myChart);
        
    }
   
}


class E_method extends Abstract_numerical_method {

    evaluate(myChart)
    {    

        let h = (this.x - this.X[0]) / this.n;
        for (let i = 1; i <=this. n; i++){

            this.X[i] = (Number(this.X[i - 1]) + Number(h)).toFixed(3);
            this.Y[i] = Number(this.Y[i - 1]) + Number(h) * Number(myfunction(this.X[i - 1], this.Y[i - 1]));
        
        }
        super.add(this.X, this.Y,"Euler method","#55bae7",myChart);
    }

}

class I_E_method extends Abstract_numerical_method {

   evaluate(myChart)
   {    
    let M = [0];
    let local_err = [0];
    local_err.length = 1;
    let h = (this.x - this.X[0]) / this.n;
    for(let i=1;i<=this.n;i++)
    {   
        this.X[i]=(Number(this.X[i-1])+Number(h)).toFixed(5);
        M[i]=myfunction(this.X[i-1],this.Y[i-1]).toFixed(5);
        let m1=myfunction(this.X[i],this.Y[i-1]).toFixed(5);
        let m2=((Number(M[i])+Number(m1))/2).toFixed(5);
        this.Y[i]=(Number(this.Y[i-1])+Number(m2*h)).toFixed(5);
    }
 
    super.add(this.X, this.Y,"Improved Euler method","#111",myChart);
    }
}
class RK_method extends Abstract_numerical_method {

   evaluate(myChart)
   {    
    let w;
   let h = (this.x - this.X[0]) / this.n;
    for(let i=1;i<=this.n;i++)
    {   
        let k1 = h*myfunction(this.X[i-1], this.Y[i-1]); 
        let k2 = h*myfunction(Number(this.X[i-1]) + Number(0.5*h), Number(this.Y[i-1] + 0.5*k1)); 
        let k3 = h*myfunction(Number(this.X[i-1]) + Number(0.5*h), Number(this.Y[i-1]) + Number(0.5*k2)); 
        let k4 = h*myfunction(Number(this.X[i-1]) + Number(h), Number(this.Y[i-1]) + k3);
        this.Y[i] = Number(this.Y[i-1]) + (1.0/6.0)*(k1 + 2*k2 + 2*k3 + k4);
        this.X[i]=(Number(this.X[i-1])+Number(h)).toFixed(3);
    }
       super.add(this.X, this.Y,"Range-Kutta","#35A095",myChart);

    }

}
class Exact_method extends Abstract_numerical_method
{   
    
    evaluate(myChart)
   {    
    
     let h = (this.x - this.X[0]) / this.n;
     for(let i=1;i<=this.n;i++)
     {   
        this.X[i]=(Number(this.X[i-1])+Number(h)).toFixed(3);
        this.Y[i]=solution(Number(this.X[i]),this.X[0],this.Y[0]); 
        console.log(this.Y);
     }
      super.add(this.X, this.Y, "exact solution","#95F095",myChart);
       
    }


}
 function createChart() {
        document.getElementById("mcontainer").innerHTML = '<canvas id="myChart"></canvas>';
        let ctx = document.getElementById("myChart").getContext('2d');
        
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        let myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: [{
               legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'green'
                }
            }
        }]
    });
        myChart.render();
document.getElementById("mcontainer1").innerHTML = '<canvas id="myChart1"></canvas>';
        let ctx1 = document.getElementById("myChart1").getContext('2d');
        
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultFontColor = '#777';

        let myChart1 = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: [{
               legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'green'
                }
            }
        }]
    });
        myChart1.render();
    return myChart;
}
    


function myfunction(x, y) {
    let результат = (4 / (x * x)) - (y / x) - y * y;
    return результат;
}
function solution(x,x0,y0){
    let c = (Math.pow(x0,5)+8*Math.pow(x0,3) - 2*y0*Math.pow(x0,4))/(2*y0-x0);
    return (Number(x)/-2)+(4*x*x*x)/(x*x*x*x + c);
}
$("#renderBtn").click(

    function () {
        let myChart = createChart();
        let x0 = document.getElementById("txt1").value;
        let y0 = document.getElementById("txt2").value;
        let x = document.getElementById("txt3").value;
        let h = document.getElementById("txt4").value;
        let N0 = document.getElementById("txt5").value;
      
        let e_method = new E_method(x0,y0,x,h);
        let i_e_method = new I_E_method(x0,y0,x,h);
        let rk_method = new RK_method(x0,y0,x,h);
        let exact_method = new Exact_method(x0,y0,x,h);
        
        if(document.getElementById("checkboxTwo").checked == true){
            i_e_method.evaluate(myChart);
            i_e_method.local_err(myChart,"IEM localerr","#fcdacd");
        }
        
        if(document.getElementById("checkboxOne").checked == true){
            e_method.evaluate(myChart);
            e_method.local_err(myChart,"E local err","#dc5a7f");

        }
        
        if(document.getElementById("checkboxThree").checked == true){
            rk_method.evaluate(myChart);
            rk_method.local_err(myChart,"RK local err","#fba422");

        }

        exact_method.evaluate(myChart);
        
    }
);