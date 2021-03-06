import './app2.css'
import $ from "jquery"
const $tarBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
//事件监听，委托父元素，点击子元素
$tarBar.on('click','li',e =>{
 const $li = $(e.currentTarget);
 $li.addClass('selected')
 .siblings().removeClass('selected');
 const index =$li.index();
 //jquery eq(index)等于第几个index
 $tabContent.children().eq(index)
 .addClass('active')
 .siblings().removeClass('active')
});
// trigger()触发事件
$tarBar.children().eq(0).trigger('click')