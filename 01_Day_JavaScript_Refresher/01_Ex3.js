class statistics {
    constructor(arr){
        this.arr = arr
    }
    
    count(){
        const count = this.arr.length;
        return count;
    }

    sum() {
        const sum = this.arr.reduce((num1, num2) => {return num1 + num2})
        return sum
    }

    min() {
        let min = this.arr[0];
        
        for(let i = 0; i <= this.count(); i++){
            if(min >= this.arr[i]){
                min = this.arr[i]
            };
        };
        
        return min
    }

    max() {
        let max = this.arr[0];
        
        for(let i = 0; i <= this.count(); i++){
            if(max <= this.arr[i]){
                max = this.arr[i]
            };
        };
        
        return max
    }
    
    range() {
        let range = this.max() - this.min();
        return range;
    }

    mean() {
        let mean = Math.round(this.sum() / this.count());
        return mean
    }

    median() {
        let sorted = this.arr.sort()
        let median = sorted[(this.count()-1)/2]
        return median
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38,
37, 31, 34, 24, 33, 29, 26]

const stats = new statistics(ages);

console.log("count: ", stats.count())
console.log("sum: ", stats.sum())
console.log("minimum: ", stats.min())
console.log("maximum: " ,stats.max())
console.log("range: ", stats.range())
console.log("mean: ", stats.mean())
console.log("median: ", stats.median())