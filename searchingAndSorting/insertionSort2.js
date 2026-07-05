const arr = [ 1, 20, 8, -2, 4, 7, -5];

//                                 c    

// [ -5, -2, 1, 4, 7, 8, 20];
//    j




// [ 1, 20, 8, -2, 4 ]

// NTI 20
// SE 1

// 1 > 20 ?





for ( let i = 1; i < arr.length; i++) {
    const currValue = arr[i]; // -5
    for (let j = i - 1; j >= 0; j-- ) {
        if (arr[j] > currValue) {
            arr[j + 1] = arr[j]; 
            if (j == 0) {
                arr[j] = currValue;
            }
        } else {
            arr[j + 1] = currValue;
        }
    }
}


console.log(arr);



// for ( let i = 1; i < arr.length; i++) {
//     const NTI = arr[i]; // 8
//     const SE = arr[i - 1]; // 20
//     const j = i;  // 2

//     if (SE > NTI) {
//         while(j >= 0) {
//             if (arr[j] > NTI) {
//                 arr[j] = arr [j - 1];
//                 j--;
//             }
//         }
//     }

// }




