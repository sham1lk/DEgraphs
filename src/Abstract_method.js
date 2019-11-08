"use strict";
class Abstract_method {
    constructor(x0, y0, x, n) {
        this.x = x;
        this.X = [x0];
        this.Y = [y0];
        this.n = n;
    }
    add(label, data, name, color, myChart) {
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
    local_err(myChart, name, color) {
        let local_er = [0];
        local_er.length = 1;

        for (let i = 1; i <= this.n; i++)
            local_er[i] = Math.abs((this.Y[i - 1] - solution(this.X[i - 1], this.X[0], this.Y[0])) - (this.Y[i] - solution(this.X[i], this.X[0], this.Y[0])));
         for (let i = 1; i <= this.n; i++)
            this.X[i] = this.X[i].
        toFixed(3);
        this.add(this.X, local_er, name, color, myChart);

    }

}