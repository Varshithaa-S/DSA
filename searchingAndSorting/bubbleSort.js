function bubbleSort(arr) {
    let n=arr.length
    for (i=0;i<n-1;i++) {
        let isSwapped = false;
        for (j=0;j<n-1-i;j++) {
            if (arr[j]>arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;




}
console.log(bubbleSort([5,4,9,1,0]))