/*
Viết một hàm nhận vào một mảng các số nguyên và thực hiện các yêu cầu sau:

Tìm số lớn thứ hai trong mảng.
Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần.
Tính tổng của các số chẵn trong mảng.
*/ 
function findSecondLargest(arr) {
    if (arr.length < 2) {
      return "Không có số lớn thứ hai trong mảng.";
    }

    // Sắp xếp mảng theo thứ tự giảm dần và trả về phần tử lớn thứ hai
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[1];
  }
  
  function sortArray(arr, ascending = true) {
    // Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
    if (ascending) {
      return arr.sort((a, b) => a - b);
    } else {
      return arr.sort((a, b) => b - a);
    }
  }