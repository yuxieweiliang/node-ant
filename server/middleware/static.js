/**
 * Created by xueyufei on 2018/10/17.
 */
import serve from 'koa-static';
import method from '../utils'



export default function(app) {
  app.use(serve(method.assemblyPath(process.cwd(), '/dist'), { extensions: ['js']}));
  app.use(serve(method.assemblyPath(process.cwd(), '/public'), { extensions: ['js', 'ico']}));
  // app.use(serve(method.assemblyPath(process.cwd(), '/assets/images'), { extensions: ['ico']}));
  app.use(serve(method.assemblyPath(process.cwd(), '/node_modules'), { extensions: ['js', 'css']}));
}