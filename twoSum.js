let number = [3,2,4]; //array de numeros

const twoSum = function(numbers, target){
    let result = [];
    let soma;

    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            soma = nums[i] + nums[j];
            if(soma == target){
                result.push(i, j)
                return result
            }
        }
    }

    return soma
} 
console.log(twoSum(number, 6))