function partition (arr, start, end) {
    if (start >= end) return;

    const target = arr[start];
    let left = start, right = end;

    while (left < right) {
        while (left < right && arr[right] >= target) {
            right--;
        }
        arr[left] = arr[right];

        while (left < right && arr[left] <= target) {
            left++;
        }
        arr[right] = arr[left];
    }

    arr[left] = target;
    partition(arr, start, left - 1);
    partition(arr, left + 1, end);
}

const arr = [7, 6, 5, 4, 3, 2, 1];
partition(arr, 0, arr.length - 1);
console.log(arr);