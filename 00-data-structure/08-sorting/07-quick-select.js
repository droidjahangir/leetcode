function quickSelect(array, left, right, idxToFind){
    if(left < right) {
        const partitionIdx = partition(array, left, right)
        if (partitionIdx === idxToFind){
            return array[partitionIdx]
        }else if (idxToFind < partitionIdx){
            return quickSelect(array, left, partitionIdx-1, idxToFind)
        } else {
            return quickSelect(array, partitionIdx+1, right, idxToFind)
        }
    }
}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for(let i = left; i < right; i++) {
        if(array[i] < pivotValue){
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}