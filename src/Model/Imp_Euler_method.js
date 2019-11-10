import Abstract_method from "./Abstrct_method.js"

export default class I_E_method extends Abstract_method {

    evaluate() {
        this.Y.length = 1;
        let M = [0];
        let local_err = [0];
        local_err.length = 1;
        let h = (this.x - this.X[0]) / this.n;
        for (let i = 1; i <= this.n; i++) {
            this.X[i] = (Number(this.X[i - 1]) + Number(h));
            if(this.X[i]==0)
                this.X[i]=0.001;
            let m1 = super.myfunction(this.X[i-1], this.Y[i - 1]);
            let m2 = super.myfunction(this.X[i],this.Y[i-1]+m1*h);
            this.Y[i] = (Number(this.Y[i - 1]) + (m2+m1)/2 * h);
        }

        
    }
    draw(myChart)
    {
        this.evaluate();
        super.add(this.X, this.Y, "Improved Euler method", "#111", myChart);
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
        console.log(this.n);
        super.add(N,global_er,"I.E.G err","#123456", myChart1);

    }
}

