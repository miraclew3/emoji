$(document).ready(function(){
    
    $('.fb-button').on('click',function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().next().children('.view-diary-btn').attr('href');
        var _title = _this.closest('.entry-img-div').prev().find('.entry-item-title').text();
        window.open('https://www.facebook.com/sharer/sharer.php?u='+shareurl+'&t='+_title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;        
    });


    $('.emoji-button').on('click',function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().next().children('.view-diary-btn').attr('href');
        $('#copy_clip').val(shareurl);
        $('#copy_clip').select();
        document.execCommand("copy");
        return false;        
    });
})
