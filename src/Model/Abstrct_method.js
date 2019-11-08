import MyChart from "../View/Chart.js"
export default class Abstract_method {
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

    }
    local_err(myChart, name, color) {
        let local_er = [0];
        local_er.length = 1;

        for (let i = 1; i <= this.n; i++)
            local_er[i] = Math.abs((this.Y[i - 1] - this.solution(this.X[i - 1], this.X[0], this.Y[0])) - (this.Y[i] - this.solution(this.X[i], this.X[0], this.Y[0])));
         for (let i = 1; i <= this.n; i++)
            this.X[i] = this.X[i].toFixed(3);
        this.add(this.X, local_er, name, color, myChart);

    }
    myfunction(x, y) {
    let результат = (4 / (x * x)) - (y / x) - y * y;
    return результат;
    }

    solution(x, x0, y0) {
    let c = (2*Math.pow(x0, 4) - y0 * Math.pow(x0, 5)) / (2 + y0*x0);
    return (-2/Number(x)) + ((4 * x * x * x) / (x * x * x * x + c));
    }

}