import utils from './utils';
const isProduction = process.env.NODE_ENV === 'production';
export default {
    loaders : utils.cssLoaders({
        sourceMap : !isProduction,
        extract : isProduction
    }),
    transformToRequire : {
        video : 'src',
        source : 'src',
        img : 'src',
        image : 'xlink:href'
    }
};
