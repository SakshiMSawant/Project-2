const fs = require('fs');
const path = require('path');

const replaceThis = "renamedFile";
const replaceWith = "sakshi";
const preview = false;
// Target the 'data' folder specifically
const folder = path.join(__dirname, 'data');

fs.readdir(folder, (err, data) => {
    if (err) {
        console.error("Error reading the directory:", err);
        return;
    }
    console.log(data);
    data.forEach((item) => {
        const oldFile = path.join(folder, item);
        const newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
        if (!preview) {
            fs.rename(oldFile, newFile, (err) => {
                if (err) {
                    console.error("Error renaming file:", err);
                    return;
                }
                console.log(`File renamed successfully: ${oldFile} to ${newFile}`);
            });
        } else {
            if (oldFile !== newFile)
                console.log(`${oldFile} will be renamed to ${newFile}`);
        }
    });
});
