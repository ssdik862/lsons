import path from 'path';

const createPath = (page: any) => path.resolve('views', `${page}.ejs`);

export default createPath;
