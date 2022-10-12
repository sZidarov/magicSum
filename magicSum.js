function magicSum (inputArray, inputNum){
    let inputArrayLength = inputArray.length;

    for (let i = 0; i < inputArrayLength; i++){
        for (let j = i+1 ; j < inputArrayLength; j++){
            let pairSum = inputArray[i] + inputArray[j];
            if (pairSum==inputNum){
                console.log(`${inputArray[i]} ${inputArray[j]}`);
            }

        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27    
    );

