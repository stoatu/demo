'use strict'

function Dialog(){
    this.box_id = 'page_box';

    //初始化dom
    this.init = function (){
        var page_dom = '<div id="pop_page" class="pop_page">' +
                          '<div class="page_opacity"></div>' +
                          '<div id="' + this.box_id + '" class="page_box"></div>' +
                       '</div>';

        $('body').append(page_dom);
    };

    //显示
    this.show = function (state,width,height,title,content,button1,button2,success,failure){
        var button = state === 1 ? '<button type="button" id="sure">' + button1 + '</button>' : '<button type="button" id="sure">' + button1 + '</button><button type="button" id="cancel">' + button2 + '</button>';
        var box_dom = '<h3>' + title + '</h3>' +
                      '<p>' + content + '</p>' +
                      button;
        var this_obj = this;
        var box = $('#' + this.box_id);

        box.empty().append(box_dom).css({
            width: width,
            height: height,
            marginLeft: -width / 2,
            marginTop: -height / 2
        });
        $('#pop_page').show();
        document.body.style.overflow = 'hidden';

        //成功
        $('#sure').on('click',function (){
            setTimeout(function (){
                success();
            },3000);
            $('#pop_page').hide();
            document.body.overflow = 'auto';
        });

        //取消
        $('#cancel').on('click',function (){
            failure();
            $('#pop_page').hide();
            document.body.overflow = 'auto';
        })


    };



}