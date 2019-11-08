export default class MyChart{
    constructor(text,id,container){
        this.text=text;
        this.id = id;
        this.container = container;
    }

    createChart() {
    document.getElementById(this.container).innerHTML = '<canvas id="' + this.id +'"></canvas>';
    let ctx = document.getElementById(this.id).getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: []
        },
        options: {
        title: {
            display: true,
            text: this.text
        },
        legend: {
                display: true,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'green'
                }
            }
    }
    });
    myChart.render();
    this.chart = myChart;
    }

}