use("crudDB")
db.createCollection("course")

// db.course.insertOne({
//     name: "Kiran",
//     age: "22",
//     Project:"DataBase"

// })
db.course.insertMany([
    { "name": "Kiran", "age": "22", "Project": "DataBase" },
    { "name": "Arjun", "age": "24", "Project": "Machine Learning" },
    { "name": "Meera", "age": "21", "Project": "Web Development" },
    { "name": "Ananya", "age": "23", "Project": "Data Analysis" },
    { "name": "Ravi", "age": "25", "Project": "Cloud Computing" },
    { "name": "Sneha", "age": "22", "Project": "Cybersecurity" },
    { "name": "Vikram", "age": "26", "Project": "Mobile App Development" },
    { "name": "Priya", "age": "20", "Project": "Artificial Intelligence" },
    { "name": "Amit", "age": "23", "Project": "Blockchain" },
    { "name": "Nidhi", "age": "22", "Project": "Game Development" }
]
)