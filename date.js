const now = new Date();
const anyDate = new Date("2023-01-01");
console.log(now);

function compareDate(date) {
    if (date.getDate() !== 1) {
        console.log(false);
    } else {
        console.log(true);
    }
};

compareDate(now);
compareDate(anyDate);
