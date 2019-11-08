import Abstract_method from "./Abstrct_method.js"

export default class RK_method extends Abstract_method {

    evaluate() {
        let w;
        this.Y.length = 1;

        let h = (this.x - this.X[0]) / this.n;
        for (let i = 1; i <= this.n; i++) {
            let k1 = h * super.myfunction(this.X[i - 1], this.Y[i - 1]);
            let k2 = h * super.myfunction(Number(this.X[i - 1]) + Number(0.5 * h), Number(this.Y[i - 1] + 0.5 * k1));
            let k3 = h * super.myfunction(Number(this.X[i - 1]) + Number(0.5 * h), Number(this.Y[i - 1]) + Number(0.5 * k2));
            let k4 = h * super.myfunction(Number(this.X[i - 1]) + Number(h), Number(this.Y[i - 1]) + k3);
            this.Y[i] = Number(this.Y[i - 1]) + (k1 + 2 * k2 + 2 * k3 + k4)/6;
            this.X[i] = (Number(this.X[i - 1]) + Number(h));
        }

    }
    draw(myChart)
    {
        this.evaluate();
       super.add(this.X, this.Y, "Range-Kutta", "#35A095", myChart);
    }
    global_err(myChart1,N0){

        let global_er = [];
        let N = [];
        let c = this.n;
        let s = super.solution(this.x,this.X[0],this.Y[0]);
        for(let i = N0; i<=Number(c); i++)
        {
            this.n = i;
            N.push(i);
            this.evaluate();
            global_er.push(Math.abs(Number(this.Y[i])-Number(s)));
            console.log(this.Y);
        }

        super.add(N,global_er,"R.K.G err","#35A095", myChart1);

    }

}