import fs from 'fs';
import path from 'path';
import os from 'os';
/**
 *  文件、目录遍历器
 *  @param {string} root 要遍历的根路径
 *  @param {string} targetFolder 目标文件夹
 *  @param {regexp} reg 字符串校验正则
 *  @param {string} type 目标的类型  file-文件、dir-路径
 *  @param {function} callback 回调函数
 *  @return {undefined}
 */
export const walkFile = ({ root = '', targetFolder = '', reg = null, type = 'file', callback = null }) => {
    //校验应用服务路径是否存在
    if (!fs.existsSync(root)) throw new Error('app root is not exist');
    //遍历目录、文件
    fs.readdir(root, { withFileTypes : true }, (err, list) => {
        if (err) throw err;
        list.forEach(dirent => {
            if (dirent.isDirectory()) {
                let _root = path.resolve(root, dirent.name);
                walkFile({ root : _root, targetFolder : targetFolder, reg : reg, type : type, callback : callback });
            } else {
                let handleType = Number(!!targetFolder).toString() + Number(!!reg).toString();
                switch (handleType) {
                    case '01':
                        targetfileHandler(dirent, root, reg, callback);
                        break;
                    case '10':
                        targetFolderHandler(dirent, root, targetFolder, callback);
                        break;
                    case '11':
                        mixHandler(dirent, root, targetFolder, reg, callback);
                        break;
                    case '00':
                        defaultHandler(dirent, root);
                }
            }
        });
    });
};
const targetfileHandler = (dirent, root, reg, callback) => {
    let filePath = path.resolve(root, dirent.name);
    if (reg.test(dirent.name)) {
        callback ? callback(filePath) : defaultHandler(dirent, root);
    }
};

const targetFolderHandler = (dirent, root, targetFolder, callback) => {
    let filePath = path.resolve(root, dirent.name);
    let pathSeparator = /win/.test(os.platform()) && !/darwin/.test(os.platform()) ? '\\\\' : '/';
    if (new RegExp(`${targetFolder}${pathSeparator}`, 'i').test(filePath)) {
        callback ? callback(filePath) : defaultHandler(dirent, root);
    }
};

const mixHandler = (dirent, root, targetFolder, reg, callback) => {
    let filePath = path.resolve(root, dirent.name);
    let pathSeparator = /win/.test(os.platform()) && !/darwin/.test(os.platform()) ? '\\\\' : '/';
    if (new RegExp(`${targetFolder}${pathSeparator}`, 'i').test(filePath) && reg.test(dirent.name)) {
        callback ? callback(filePath) : defaultHandler(dirent, root);
    }
};

const defaultHandler = (dirent, root) => {
    let filePath = path.resolve(root, dirent.name);
    console.log(filePath + ' is not be handled');
};
