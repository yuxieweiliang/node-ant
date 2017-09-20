function getEvent(e){
  return window.event || e;
}
function getTarget(e) {
  return e.target || e.srcElement;
}
// offsetWidht 获取的是 width + padding + border

function getStyle(obj,attr){
  return getComputedStyle ? getComputedStyle(obj,false)[attr] : obj.currentStyle[attr];
}
function getScroll() {
  return {
    top: document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
    left: document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft,
  }
}

var option = {
  target: {},
  pack: {}
};

var $id = function(id) {
  return document.getElementById(id);
};

var drag = $id('drag');
var inner = $id('inner');
var div = $id('div');

function getPosition(target) {
  var doc = getScroll();
  return {
    top: target.clientHeight + doc.top,
    left: target.clientWidth + doc.left,
    offsetHeight: target.offsetHeight,
    offsetWidth: target.offsetWidth,
    scrollLeft: target.scrollLeft,
    scrollTop: target.scrollTop,
    height: target.clientHeight,
    width: target.clientWidth,
  }
}

drag.addEventListener('click', function(e) {
  var ev = getEvent(e);
  var position = getPosition(drag);
  console.log(ev);
  console.log(position.top);
  console.log(div);
  div.style.top = drag.offsetTop + 'px';
});



// 源对象
drag.addEventListener('dragstart', function(e) {
  var ev = getEvent(e);
  option.target.height = this.clientHeight;
  option.target.width = this.clientWidth;
  ev.dataTransfer.setData("Text",ev.target.id);
});



drag.addEventListener('drag', function(ev) {
  throttle2(function(){
    // console.log(ev)
  },1000);
});

drag.addEventListener('dragend', function(ev) {
  option.target.top = ev.target.offsetTop;
  option.target.left = ev.target.offsetLeft;
  console.log('dragend');
});



// 目标对象
// 进入
inner.addEventListener('dragenter', function(ev) {
  var div = document.createElement('div');
  div.style.width = option.target.clientWidth + 'px';
  div.style.height = option.target.clientHeight + 'px';
  div.style.backgroundColor = '#ddd';
  div.style.borderWidth = '1px';
  div.style.borderColor = 'red';
  div.style.borderStyle = 'dashed';
  console.log('dragenter', ev);
  inner.append(div)
});

// 释放
inner.addEventListener('drop', function(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  option.pack.width = ev.target.clientWidth;
  option.pack.height = ev.target.clientHeight;
  option.pack.left = ev.target.offsetLeft;
  option.pack.top = ev.target.offsetTop;
  console.log(option);
  ev.target.appendChild(document.getElementById(data));
});
// 离开
inner.addEventListener('dragleave', function(ev) {
  console.log('dragleave');
});

// 结束
inner.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});
function throttle2(method, delay, time) {
  var timeout,startTime = new Date();
  return function() {
    var context = this,
      args = arguments,
      curTime = new Date();
    clearTimeout(timeout);
    console.log(curTime);
    console.log(startTime);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= time) {
      method.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(method, delay);
      console.log(timeout);
    }
  };
};
