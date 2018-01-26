import subscribe from './subscribe';
import unsubscribe from './unsubscribe';
import disconnect from './disconnect';
import message from './message';
import notice from './notice';

export default function (client){
  const url = client.request.headers.referer;
  console.log('init');




  // 客户端的send方法发送的消息
  message(client);
  // 通知指定 userId 的用户
  notice(client);





  // 订阅
  subscribe(client);

  // 退订
  unsubscribe(client);

  // 断开连接
  disconnect(client);
}