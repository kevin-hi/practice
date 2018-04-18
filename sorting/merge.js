class Merge {

    sort(a) {
        this.aux = [];
        this.split(a, 0, a.length - 1);
        return a;
    }

    split(a, lo, hi) {
        if (hi <= lo) return;
        const mid = parseInt(lo + (hi - lo)/2);
        this.split(a, lo, mid);
        this.split(a, mid + 1, hi);
        this.merge(a, lo, mid, hi);
    }

    merge(a, lo, mid, hi) {
        let i = lo;
        let j = mid + 1;

        for (let k = lo; k <= hi; k++) this.aux[k] = a[k];

        for (let k = lo; k <= hi; k++) {
            if (i > mid) a[k] = this.aux[j++];
            else if (j > hi) a[k] = this.aux[i++];
            else if (this.aux[j] < this.aux[i]) a[k] = this.aux[j++];
            else a[k] = this.aux[i++];
        }
    }
}

const testArray = [7, 6, 3, 9, 2, 5];

console.log(new Merge().sort(testArray));
