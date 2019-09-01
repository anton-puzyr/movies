const multer = require('multer');

const decapitalize = str => str.charAt(0).toLowerCase() + str.slice(1);

const sanitizeKey = key =>
  decapitalize(key.trim())
    .split(' ')
    .join('');

const windowed = (arr, size) => {
  const result = [];
  for (let i = 0; i <= arr.length - size; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const hasNumber = myString => /\d/.test(myString);

const calculateInvalidYears = (lines, string) => {
  const invalidYears = [];

  lines
    .filter(value => value.includes(string))
    .map(v => v.split(':'))
    .forEach(item =>
      item.map(currentValue => {
        if (hasNumber(currentValue)) {
          const num = Number.parseInt(currentValue);

          if (num < 1850 || num > 2020) {
            invalidYears.push(num);
          }
        }
      }),
    );

  return invalidYears;
};

/** Configure file upload **/
const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, './api/uploads'),
  filename: (req, file, callback) => callback(null, file.fieldname),
});

const upload = multer({ storage }).single('file');

module.exports = { decapitalize, sanitizeKey, windowed, upload, calculateInvalidYears };
