// 1
function print(int, bool) {
    const str = "-".repeat(int);
    if (bool) {
        console.log(str + ">");
    } else {
        console.log("<" + str);
    }
}

// 2


// 3 
function star1(int) {
    for (let i = 1; i <= int; i++) {
        console.log('*'.repeat(i));
    }
}

// 4 
function star2(int) {
    for (let i = int - 1; i >= 0; i--) {
        console.log('*'.repeat(i));
    }
}

// 5
function multi(num) {
    for (let i = 1; i <= num; i++) {
        let str = "";
        for (let j = 1; j <= num; j++) {
            str += (i * j) + "\t";
        }
        console.log(str);
    }
}

// 6
function reverse(num) {
    let reverse = String(num).split('').reverse().join('');
    console.log(reverse);
}

// 7 
function empty(str) {
    if (str === "") {
        return "";
    }
    if (str.trim() === "") {
        return " ";
    }
    return str.trim()
}

// 8
function createList3(list1, list2) {
    const sumList2 = list2.reduce((sum, num) => sum + num, 0);
    const list3 = list1.map(num => num * sumList2);
    return list3;
}

const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];

const list3 = createList3(list1, list2);
console.log(list3);
