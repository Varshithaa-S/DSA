/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let l= 2
    let r = Math.floor(x/2)

    while(l<=r) {
        let mid = Math.floor((l+r)/2);
        if(x<(mid*mid)) r=mid-1;
        else if (x>(mid*mid)) l=mid+1;
        else return mid;
    }
    return r
};