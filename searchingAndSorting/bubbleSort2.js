function _sortBuuble(arr){
    while(true) {
        let isSwapped = false
       for (let i=0;i< arr.length;i++) {
        if(arr[i] > arr[i+1]){
            // let temp = arr[i];
            // arr[i] = arr[i+1];
            // arr[i+1] = temp
            arr[i] = (arr[i] + arr[i+1]);
            arr[i+1] = (arr[i] - arr[i+1]);
            arr[i] = (arr[i] - arr[i+1]);


            isSwapped = true;
        }

       }
       if (!isSwapped) break;
       console.log(arr);
    }

    console.log("Final array :", arr);
    

}
let arr1= [10,-3,5,-7,20,13]
_sortBuuble(arr1)


// let a = 5;
// let b = 10;
