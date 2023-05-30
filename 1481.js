const nums = [1, 2, 3, 4]

var runningSum = function(nums) {
    let finalArray = [nums[0]]
    for(let i=0; i < nums.length-1; i++) {
        finalArray.push(finalArray[i] + nums[i+1])
    }
    return console.log(finalArray)
}

runningSum(nums)