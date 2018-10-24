/*
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 *  express-react-views(0.10.2)
 */
import path from 'path';
import koaBody from 'koa-body';



function createEngine(app) {
  return koaBody({
    multipart:true, // 支持文件上传
    formidable:{
      uploadDir: path.join(process.cwd(),'public/upload/'), // 设置文件上传目录
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024, // 文件上传大小
      onFileBegin:(name,file) => { // 文件上传前的设置
        console.log(`name: ${name}`);
        console.log(file);

      },
    }
  })
}

module.exports = createEngine;
