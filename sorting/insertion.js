class Insertion {
    sort(a) {
        for (let i = 1; i < a.length; i++) {
            for (let j = i; j > 0 && a[j] < a[j - 1]; j--) {
                const prev = a[j];
                a[j] = a[j - 1];
                a[j - 1] = prev;
            }
        }
        return a;
    }
}

const testArray = [7, 6, 3, 9, 2];

new Insertion().sort(testArray);