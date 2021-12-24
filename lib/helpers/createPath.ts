import path from 'path';

const sourceDir = 'lib';
const createPath = (page: any) => path.resolve(sourceDir, 'views', `${page}.ejs`);

export default createPath;
