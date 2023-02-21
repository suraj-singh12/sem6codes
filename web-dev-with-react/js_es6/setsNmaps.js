
let arr = [1,2,2,2,4,4,5,3,4,7,7,7];

let st = new Set();
for(let elem of arr)
    st.add(elem);       // add element in set
st.delete(1);   // remove an element from set
console.log(st);


let mpp = new Map();
let ctr = 43;
for(let elem of arr) 
    mpp[elem] = ctr++;      // setting key:value pairs

mpp.set('435', 'hello');        // setting key: value pairs
mpp.set(3452, 'hello llllooo');
mpp.delete(3452);       // removing key: value pairs
console.log(mpp);