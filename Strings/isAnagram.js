/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//    return s.split("").sort().join("") == t.split("").sort().join("");

    // let m = new Map();
    // for(let i=0; i< s.length; i++) {
    //     if (m.has(s[i])) {
    //         let v = m.get(s[i]);
    //         v++
    //         m.set(s[i], v);
    //     } else {
    //         m.set(s[i],1)
    //     }
    // }
    // console.log("m===",m)

    // for(let i=0; i<t.length; i++) { 
    //     if (m.has(t[i])) {
    //         let v = m.get(t[i]);
    //         v--;
    //         m.set(t[i], v);
    //     } else {
    //         return false;
    //     }
    // }
    //     console.log("m=== 2nd",m)

    // for (let value of m.values()) {
    //     if(value != 0) return false
    // }
    // return true
    if(s.length != t.length) return false;
    let map = {};
    for (let i=0;i< s.length; i++) {
        if(!map[s[i]]) map[s[i]] =1
        else ++map[s[i]]
    }

    for(let i=0;i<t.length;i++) {
        if(!map[t[i]] || map[t[i]] < 0) return false
        else --map[t[i]]
    }
    return true;
}; 