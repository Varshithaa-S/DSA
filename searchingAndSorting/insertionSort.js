function insertionSort (n) {
console.log(n)

    for (let i=1;i<n.length;i++) {
        let curr = n[i];
        let prev = i-1;
        while(n[prev] > curr && prev >=0) {
            n[prev+1] = n[prev]
            prev -- ;
        }
        n[prev+1] = curr
    }
    return n;
}
console.log(insertionSort([7, 1, 5, 4, 3, 2]))

