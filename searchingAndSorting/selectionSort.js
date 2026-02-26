function selectionSort (n) {


    for (let i=0;i<n.length-1;i++) {
        let min = i;
        for (let j=i+1;j<n.length;j++) {
            if (n[j] < n[min]) {
                min = j;
            }
        }
        if (n[i] != n[min]) {
            let temp = n[min];
            n[min] = n[i];
            n[i] = temp
        }

    }
    return n;
}
console.log(selectionSort([7, 1, 5, 4, 3, 2]))

