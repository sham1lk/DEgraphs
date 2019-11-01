"use strict";
class Abstract_numerical_method {
    constructor(x0, y0, x, h) {
        this.x = x;
        this.x0 = x0;
        this.y0 = y0;
        this.h = h;
    }
    add(data,label,name,color,myChart)
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
   
}


class E_method extends Abstract_numerical_method {

    evaluate(myChart)
    {    

        let X = [this.x0];
        let Y = [this.y0];
        X.length = 1;
        Y.length = 1;
        let n = (this.x - this.x0) / this.h;
        for (let i = 1; i <= n; i++) {
            X[i] = (Number(X[i - 1]) + Number(this.h)).toFixed(3);
            Y[i] = Number(Y[i - 1]) + Number(this.h) * Number(myfunction(X[i - 1], Y[i - 1]));
        }
        super.add(Y,X,"Euler method","#55bae7",myChart);
    }

}

class I_E_method extends Abstract_numerical_method {

   evaluate(myChart)
   {    
    let w;
    let X = [this.x0];
    let Y = [this.y0];
    let S = [this.y0];
    let M = [0];
    X.length = 1;
    S.length = 1;
    Y.length = 1;
    for(let i=1;X[i-1]<this.x;i++)
    {   
        w = 100.0;
        X[i]=(Number(X[i-1])+Number(this.h)).toFixed(3);;
        M[i]=myfunction(X[i-1],Y[i-1]);
        let c =0;
        while(w>0.0001)
        {
         let m1=myfunction(X[i],S[c]);
         let m2=(Number(M[i])+Number(m1))/2;
         S[c+1]=Number(Y[i-1])+Number(m2*this.h);
         w=Number(S[c])-Number(S[c+1]);
         w=Math.abs(w);
         c=c+1;
     }
     Y[i]=S[c];

 }
 super.add(Y, X,"Improved Euler method","#111",myChart);
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
    return myChart;
}
    


function myfunction(x, y) {
    let результат = (4 / (x * x)) - (y / x) - y * y;
    return результат;
}
let counter =0;
$("#renderBtn").click(

    function () {
        let myChart = createChart();
        counter++;
        let x0 = document.getElementById("txt1").value;
        let y0 = document.getElementById("txt2").value;
        let x = document.getElementById("txt3").value;
        let h = document.getElementById("txt4").value;
        let e_method = new E_method(x0,y0,x,h);
        let i_e_method = new I_E_method(x0,y0,x,h);
        if(document.getElementById("checkboxOne").checked == true)
            i_e_method.evaluate(myChart);
        if(document.getElementById("checkboxTwo").checked == true)
            e_method.evaluate(myChart);

    }
    );