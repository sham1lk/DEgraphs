import RK_method from "../Model/RK_method.js"
import E_method from "../Model/Euler_method.js"
import Exact_method from "../Model/Exact_method.js"
import I_E_method from "../Model/Imp_Euler_method.js"
import MyChart from "../View/Chart.js"


"use strict";
$("#renderBtn").click(

    function() {
        let myChart = new MyChart("Solutions","myChart","mcontainer");
        let myChart1 = new MyChart("Global errors","myChart1","mcontainer1");
        let myChart2 = new MyChart("Local errors","myChart2","mcontainer2");
        myChart.createChart();
        myChart1.createChart();
        myChart2.createChart();
        let x0 = document.getElementById("txt1").value;
        let y0 = document.getElementById("txt2").value;
        let x = document.getElementById("txt3").value;
        let h = document.getElementById("txt4").value;
        let N0 = document.getElementById("txt5").value;
        let e_method = new E_method(x0,y0,x,h);
        let i_e_method = new I_E_method(x0,y0,x,h);
        let rk_method = new RK_method(x0,y0,x,h);

        if (document.getElementById("checkboxTwo").checked == true) {
            i_e_method.draw(myChart.chart);
            i_e_method.local_err(myChart2.chart, "IEM localerr", "#fcdacd");
            i_e_method.global_err(myChart1.chart,N0);
        }
        if (document.getElementById("checkboxOne").checked == true) {
            e_method.draw(myChart.chart);
            e_method.local_err(myChart2.chart, "E local err", "#dc5a7f");
            e_method.global_err(myChart1.chart,N0);

        }

        if (document.getElementById("checkboxThree").checked == true) {
            rk_method.draw(myChart.chart);
            rk_method.local_err(myChart2.chart, "RK local err", "#fba422");
            rk_method.global_err(myChart1.chart,N0);

        }
        let exact_method = new Exact_method(x0, y0, x, h);
        exact_method.draw(myChart.chart);

    }
);