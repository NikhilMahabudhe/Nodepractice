 const modulePath = require('path');
 console.log(modulePath.basename('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'));//;last file name
 console.log(modulePath.dirname('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'));//;returns the path
 console.log(modulePath.extname('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'))// return extension name
// console.log(modulePath.format('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'))//reurn format like string and all
console.log(modulePath.isAbsolute('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'));//whethere the path is coreect or not
console.log(modulePath.isAbsolute('/abc/abs/abbh/ascdcnjdf\qdbjsdjuux.css'))///true
console.log(modulePath.isAbsolute(''))///false
console.log(modulePath.join('abc','jdsd','jvbhd'))// it joins thhe path by using predifined delimeter by windows
console.log(modulePath.delimiter)// it gives delimetter
console.log(modulePath.normalize('/abc/abs/abbh/ascdcnjdf\qdbjsdjuux.css'))// it resolves path by their own
console.log(modulePath.parse('/abc/abs/abbh/ascdcnjdf/qdbjsdjuux.css'))//gives all information like base dirname it return object
console.log(modulePath.relative('/abs/cna/dhvb/bchjdv', '/abs/cna/dhvb/bchjdv/123/789'))// it reurns whats diffrent from the first path
console.log(modulePath.win32);// it gives all informationn if all the methods that you have used in your path module