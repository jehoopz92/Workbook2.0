var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});




function EOD(){
  window.location = ('mailto:mott@uste3.com;dventers@uste3.com;spowell@uste3.com;khazelton@uste3.com;connsrouting@uste3.com;jmoreno@uste3.com?subject=Central/Mountain EOD&body=');
}

function HOU(){
  window.location = ('mailto:mott@uste3.com;spowell@uste3.com;khazelton@uste3.com;connsrouting@uste3.com;mdurphy@uste3.com;lberuashvili@uste3.com;mkrause@uste3.com?subject=Houston EOD&body=');
}

function ashley(){
     window.location = ('mailto:cbyrd@uste3.com;spowell@uste3.com;khazelton@uste3.com;jcomen@uste3.com;mott@uste3.com;ashleyrouting@uste3.com?subject=Ashley EOD&body=');
}
function TheDump(){
     window.location = ('mailto:cbyrd@uste3.com;spowell@uste3.com;khazelton@uste3.com;jcomen@uste3.com;mott@uste3.com;thedumprouting@uste3.com?subject=The Dump EOD&body=');
}
function asi(){
     window.location = ('mailto:jpunch@uste3.com;spowell@uste3.com;khazelton@uste3.com;kdouglas@uste3.com;lchick@uste3.com;npasiut@uste3.com?subject=ASI EOD&body=');
}


