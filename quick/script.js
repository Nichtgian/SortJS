let unsortedArray = [1, 5, 8, 6, 6, 3, 1, 9, 11];

class Quick {
    constructor(array) {
        this.array = this.sort(array);
    }

    sort(unsorted) {
        if (unsorted.length <= 1) {
            return unsorted;
        }
        let left = [];
        let right = [];
        let array = [];
        let pivot = unsorted.pop();
        let length = unsorted.length;
        for (let i = 0; i < length; i++) {
            if (unsorted[i] <= pivot) {
                left.push(unsorted[i]);
            }
            else {
                right.push(unsorted[i]);
            }
        }
        return array.concat(this.sort(left), pivot, this.sort(right));
    }
}

var t0 = performance.now();
let swag = new Quick(unsortedArray);
var t1 = performance.now();
console.log(swag.array);
console.log("Execute Time : " + (t1 - t0) + " milliseconds.")

