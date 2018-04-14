class Selection {
    sort(a) {
        const len = a.length;
        for (let i = 0; i < len; i++) {
            let min = i;

            for (let j = i + 1; j < len; j++) {
                if (a[j] < a[min]) min = j;
            }

            const prev = a[i];
            a[i] = a[min];
            a[min] = prev;

        }
        return a;
    }
}

const testArray = [7, 6, 3, 9, 2];

new Selection().sort(testArray);