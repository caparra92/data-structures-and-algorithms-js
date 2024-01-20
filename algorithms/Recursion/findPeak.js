/**
* @author Camilo Parra <caparra92@gmail.com>
* GitHub: caparra92
*/

/**
 * Given an array with n elements, find all peaks
 * Peak : Element which is not smaller than its neighbors
 * 1st method O(n) complexity
 * 2nd method O(logn) complexity
 */

const arr = [6,3,54,21,5,7,4,10,90];
// const arr = [5,50,10,10,10,10,10,10];
// const arr = [];

// for(let i = 0; i < 10; i++) {
//     arr.push(Math.floor(Math.random() * 10000))
// }

const findPeakOn = (arr) => {
    const peaks = [];
    for(let i = 0; i < arr.length; i++) {

        if(arr.indexOf(arr[i]) === 0) {
            if(arr[i] >= arr[i + 1]) {
                peaks.push(arr[i]);
            } 
        } else if(arr.indexOf(arr[i]) === arr.length - 1) {
            if(arr[i] >= arr[i - 1]) {
                peaks.push(arr[i]);
            } 
        } else {
            if(arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
                peaks.push(arr[i]);
            }
        }
    }

    return peaks;
}

// const arr = [6,3,54,21,5,7,4,10,90] ==> indexes [0,1,2,3,4,5,6,7,8]; 
const peaks = []
const findPeakOLogN = (arr, min = 0, max = arr.length - 1) => {

    const mid = Math.floor(min + (max - min) / 2);

    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        peaks.push(arr[mid]);
    } else if(arr[mid -1] > arr[mid]){
        return findPeakOLogN(arr, min, mid - 1);
    } else if(arr[mid + 1] > arr[mid]) {
        return findPeakOLogN(arr, mid + 1, max);
    }

    return peaks;
}

// Loop method (Not efficient with large amount of values)

console.time('O(n) complexity');

console.log(findPeakOn(arr));

console.timeEnd('O(n) complexity');

console.log('====================');


// // Binary search method (Recomended)

console.time('O(logn) complexity');
console.log(findPeakOLogN(arr));


console.timeEnd('O(logn) complexity');