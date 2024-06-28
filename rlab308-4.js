// Part 1: Refactoring Old Code

// Part 2: Expanding Functionality

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'

//Declare a variable that stores the number of columns in each row of data within the CSV.
let rows = csvData.split('\n').map(row => row.split(','));

//Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.
let columnCount = rows[0].length;
console.log("Number of columns:" , columnCount)

//Store your results in a two-dimensional array.
let resultArray = rows.map(row => {
    if (row.length !== columnCount) {
        throw new Error('Row length does not match')
    }
    return row;
});

//Cache this two-dimensional array in a variable for later use.
let cachedArray = resultArray;
console.log('Two-Dimensional Array:', cachedArray);


//Part 3: Transforming Data

let data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor's Assistant", "26"]
];

//For each row of data in the result array produced by your code above, create an object where the 
// key of each value is the heading for that value’s column. Convert these keys to all lowercase letters for consistency.
let headers = data[0].map(header => header.toLowerCase());

//Store these objects in an array, in the order that they were originally listed.
let result = data.slice(1).map(row => {
    //we create empty object
    let obj = {}
    row.forEach((value, index) => {
        obj[headers[index]] = value;
    })
    return obj
});

console.log("Transform Data:", result)

// ------Part 4: Sorting and Manipulating Data-----


//Remove the last element from the sorted array.
result.pop();

//Insert the following object at index 1:
result.splice(1, 0,{id: "48", name: "Barry", occupation: "Runner", age: "25"});

//Add the following object to the end of the array:
result.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})

console.log("manipulated data:" , result)

//use the values of each object within the array and the array’s length property to calculate the average age of the group. 
// This calculation should be accomplished using a loop.
let totalAge = 0

for (let i = 0; i < result.length; i++) {
    totalAge += parseInt(result[i].age, 10)
}

let averageAge = totalAge / result.length;
console.log("Average Age:", averageAge)

// Part 5: Full Circle

//step 1 Extract headers
let csvHeaders = Object.keys(result[0]).map(header => header.charAt(0).toUpperCase() + header.slice(1));

// Step 2 Convert data rows
let csvRows = result.map(obj => csvHeaders.map(header => obj[header.toLowerCase()]));

// Step 3 Join rows
let finalCsvData = [csvHeaders.join(',')].concat(csvRows.map(row => row.join(','))).join('\n');

// step 4 Log the final CSV data
console.log("Final CSV Data:\n" + finalCsvData);