// html колекція результатів
let methodsRes = document.querySelectorAll(".method-res")

// метод length
let arr = [1,2,3,4,5]
methodsRes[0].textContent = arr.length

// метод push
arr = [1,2,3,4,5]
arr.push(13)
console.log(arr)
methodsRes[1].textContent = arr

// метод map
arr = [1,3,4,5]
arr = arr.map(num => num * num)
console.log(arr)
methodsRes[2].textContent = arr

// метод filter
arr = [1, -10, 100, 3, -1, 0]
arr = arr.filter(function(elem) {
    if (elem >= 0) {
        return true;
    } else {
        return false;
    }
});
console.log(arr)
methodsRes[3].textContent = arr

// метод forEach
arr = [1, -10, 100, 3, -1, 0]
arr.forEach((item, index, array) => arr[index] += 1)
console.log(arr)
methodsRes[4].textContent = arr

// метод every
arr = [1, -10, 100, 3, -1, 0]
let res = arr.every((item, index, array) => item % 2 == 0)
console.log(res)
methodsRes[5].textContent = res

// метод some
arr = [5, -3, -4, 0, 1]
arr = arr.some(item => item > 0)
console.log(arr)
methodsRes[6].textContent = arr

//метод fill
arr = [3, 2, 10, -3, 0, 7, 'k', 4]
arr = arr.fill('rep', 2, 6)
console.log(arr)
methodsRes[7].textContent = arr

//indexOf
arr = [3, 2, 10, 5, 0, 7, 5, 4]
arr = arr.indexOf(5, 4)
console.log(arr)
methodsRes[8].textContent = arr

//unshift
arr = [3, 2, 10]
arr.unshift(4, 5)
console.log(arr)
methodsRes[9].textContent = arr

//pop
arr = [3, 2, 10, 'good']
arr.pop()
console.log(arr)
methodsRes[10].textContent = arr

//pop
arr = [3, 2, 10, 'bet']
arr.shift()
console.log(arr)
methodsRes[11].textContent = arr