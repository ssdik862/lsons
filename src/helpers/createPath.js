import path from 'path';
const sourceDir = 'lib';
const createPath = (page) => path.resolve(sourceDir, 'views', `${page}.ejs`);
export default createPath;
