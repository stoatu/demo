'use strict'

$(document).ready(function (){
    var dialog = new Dialog();

    dialog.init();

    $('#focus').on('click',function (){
        dialog.show(2,500,300,'温馨提示','注册成功','确定','取消',function (){console.log('success')},function (){console.log('failure')});

    });





});