// Viết một hàm nhận vào một mảng và xóa tất cả các phần tử xuất hiện nhiều hơn một lần trong mảng ?
function removeDuplicates(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      count[element] = (count[element] || 0) + 1;
    }
      const result = arr.filter((element) => count[element] === 1);
    return result;
  }
    