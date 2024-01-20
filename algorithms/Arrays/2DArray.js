function hourglassSum(arr) {
    let max = -64
    let first;
    let center;
    let last;
    let result;
    // Write your code here
    for(let i = 0; i < arr.length; i++) {
        if(i < 4) {
            for(let j = 0; j < arr[i].length; j++){
            
                if(j < 4) {
                    first = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    center = arr[i+1][j+1]
                    last = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
                    
                    result = first + center + last
                    if(result > max) max = result;
                }
            }
        }
    }
    return max;
    
}

const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];
console.log(hourglassSum(arr));