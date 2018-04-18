class Quick {

    sort(a) {
        this.shuffle(a);
        this._sort(a, 0, a.length - 1);
        return a;
    }

    _sort(a, lo, hi) {
        if (hi <= lo) return;
        const j = this.partition(a, lo, hi);
        this._sort(a, lo, j - 1);
        this._sort(a, j + 1, hi);
    }

    partition(a, lo, hi) {
        let i = lo;
        let j = hi + 1;

        while(true) {
            while (a[++i] < a[lo]) if (i === hi) break;
            while (a[lo] < a[--j]) if (j === lo) break;
            if (i >= j) break;
            this.swap(a, i, j);
        }

        this.swap(a, lo, j);
        return j;
    }


    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            this.swap(a, i, j);
        }
        return a;
    }

    swap(a, i, j) {
        const prev = a[i];
        a[i] = a[j];
        a[j] = prev;
    }
}

const testArray = [7, 6, 3, 9, 2, 5];

console.log(new Quick().sort(testArray));
