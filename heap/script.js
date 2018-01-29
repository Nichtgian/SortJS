let unsortedArray = [1, 5, 8, 6, 6, 3, 1, 9, 11];

class Heap {
    constructor(array) {
        this.array = array;
        this.length = array.length;
        this.sort();
    }

    sort() {
        let input = this.array;
        let length = this.length;
        for (let i = Math.floor(length / 2); i >= 0; i--) {
            this.heapify(input, i);
        }
        for (let i = length - 1; i > 0; i--) {
            this.change(input, 0, i);
            length--;
            this.heapify(input, 0)
        }
    }

    heapify(input, i) {
        let length = this.length;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let max = i;
        if (left < length && input[left] > input[max]) {
            max = left;
        }
        if (right < length && input[right] > input[max]) {
            max = right;
        }
        if (max != i) {
            this.change(input, i, max);
            this.heapify(input, max);
        }
    }

    change(input, pos1, pos2) {
        let t = input[pos1];
        input[pos1] = input[pos2];
        input[pos2] = t;
    }
}

var t0 = performance.now();
let swag = new Heap(unsortedArray);
var t1 = performance.now();
console.log(swag.array);
console.log("Execute Time : " + (t1 - t0) + " milliseconds.")
