import Abstract_method from "./Abstrct_method.js"

export default class Exact_method extends Abstract_method {

    evaluate() {

        let h = (this.x - this.X[0]) / this.n;
        for (let i = 1; i <= this.n; i++) {
            this.X[i] = (Number(this.X[i - 1]) + Number(h)).toFixed(3);
            this.Y[i] = super.solution(Number(this.X[i]), this.X[0], this.Y[0]);
            console.log(this.Y);
        }
    }
    draw(myChart)
    {
        this.evaluate();
      super.add(this.X, this.Y, "exact solution", "#95F095", myChart);
    }


}