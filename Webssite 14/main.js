// import path from "path";
// let a ="C:\\Users\\s kiran babu\\OneDrive\\Documents\\GitHub\\FirstWebsites\\Webssite 14> "
// console.log(path.extname(a));

const fs = require('fs');
const path = require('path');

// Define folder structure for file types
const typeFolders = {
    pdf: 'pdfs',
    txt: 'text_files',
    jpg: 'images',
    png: 'images',
    docx: 'documents',
    // Add more types if needed
};

// Function to move a file to the appropriate folder
function moveFileToTypeFolder(filePath, destinationRoot) {
    const extension = path.extname(filePath).toLowerCase().slice(1); // Get the file extension
    const typeFolder = typeFolders[extension] || 'others'; // Default folder for unknown types
    const destinationFolder = path.join(destinationRoot, typeFolder);

    // Ensure the destination folder exists
    if (!fs.existsSync(destinationFolder)) {
        fs.mkdirSync(destinationFolder, { recursive: true });
    }

    const destinationPath = path.join(destinationFolder, path.basename(filePath));

    // Move the file
    fs.rename(filePath, destinationPath, (err) => {
        if (err) {
            console.error(`Error moving file ${filePath}:`, err);
        } else {
            console.log(`Moved ${filePath} to ${destinationPath}`);
        }
    });
}

// Main function to organize files
function organizeFiles(sourceFolder, destinationRoot) {
    fs.readdir(sourceFolder, (err, files) => {
        if (err) {
            console.error('Error reading source folder:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(sourceFolder, file);
            if (fs.statSync(filePath).isFile()) {
                moveFileToTypeFolder(filePath, destinationRoot);
            }
        });
    });
}

// Example usage
const sourceFolder = './files'; // Source folder containing files
const destinationRoot = './organized'; // Root folder for organized files

organizeFiles(sourceFolder, destinationRoot);
