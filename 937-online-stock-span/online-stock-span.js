
var StockSpanner = function () {
    this.prices = [];
    let result = [];
    this.prices.isEmpty = function () {
        return this.length === 0;
    }
    this.prices.top = function(){
        return this[this.length - 1];
    }
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {

    if(this.prices.isEmpty()){
        this.prices.push([price,1]);  
        return 1;
    }

    let spanLength = 1;
    while (!this.prices.isEmpty() && this.prices.top()[0] <= price) {
        spanLength+= this.prices.top()[1];
        this.prices.pop();
    }
    this.prices.push([price, spanLength])
    return spanLength;
}

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */