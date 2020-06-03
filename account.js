$(document).ready(function(){
    
    $('.fb-button').click(function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().children().attr('href');
        var _title = _this.closest('.entry-img-div').prev().find('p').text();
        window.open('https://www.facebook.com/sharer/sharer.php?u='+shareurl+'&t='+_title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;        
    });


    $('.emoji-button').click(function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().children().attr('href');
        $('#copy_clip').val(shareurl);
        $('#copy_clip').select();
        document.execCommand("copy");
        return false;        
    });

    $('.entry-edit-but').click(function(){
        _this = $(this);
        _id = _this.parent().preve().children('.diary-id').text();
        _title =  _this.parent().prev().prev().find('p').text();
        _date =  _this.parent().prev().prev().find('h4').text();
        _content =  _this.parent().prev().prev().find('.entry-content').text();
        _entry_type =  _this.parent().prev().prev().find('.entry-type').text();
        _uid = $('account-page-id').val();
        $('#c_entry_title').val(_title);
        $('#c_entry_content').val(_id);
        $('#c_entry_uid').val(_uid);
        $('#c_entry_itemid').val(_id);
        if(_entry_type == 1 ){
            $('#c_entry_public').click()
        } else {
            $('#c_entry_private').click()
        }
        return false;
         
    });
    
    
    // $('.comment').click(function(){
    //     _this = $(this);
    //     _id = _this.closest('.entry-img-div').find('.diary-id').text()
    //     _name = _this.closest('.entry-img-div').prev().find('.etnry-item-title').text()
    //     _type = _this.attr('data-title');
    //     _class = _type.toLowerCase()
    //     _like = _this.closest('.entry-img-div').next().find(".like").next().children('.comment-num').text();
    //     _love = _this.closest('.entry-img-div').next().find(".love").next().children('.comment-num').text();
    //     _sad = _this.closest('.entry-img-div').next().find(".sad").next().children('.comment-num').text();
	// _angry = _this.closest('.entry-img-div').next().find(".angry").children('.comment-num').text();
    //     _haha = _this.closest('.entry-img-div').next().find(".haha").next().children('.comment-num').text();
    //     _wow = _this.closest('.entry-img-div').next().find(".wow").next().children('.comment-num').text();
         
    //      if(_class == 'love'){
    //          _love = parseInt(_love) +1;
    //     } else if(_class=='sad'){
    //          _sad = parseInt(_sad) +1;
    //     }else if(_class=='angry'){
    //          _angry = parseInt(_angry) +1;
    //     }else if(_class=='haha'){
    //          _haha = parseInt(_haha) +1;
    //     }else if(_class=='wow'){
    //          _wow = parseInt(_wow) +1;
    //     }else if(_class == 'like'){
    //         _like = parseInt(_like) +1;
    //     }
        
    //     $('#form_entry_id').val(_id);
    //     $('#form_entry_name').val(_name);  
    //     $('#entry_like').val(_like);
    //     $('#entry_love').val(_love);
    //     $('#entry_haha').val(_haha);
    //     $('#entry_wow').val(_wow);
    //     $('#entry_angry').val(_angry);
    //     $('#entry_sad').val(_sad);   
	// $('#wf-form-comment_form').submit();  
    // });

    $(".add-repre-btn").on("click",function(){
        if(	$("#wf-form-repre-add").css('display')== 'none'){
        $("#wf-form-repre-add").fadeIn();
        myName = member.name + ' ' + member['last-name']
        myEmail = member.email 
        $('[name=creator-name]').val(myName)
        $('[name=creator-email]').val(myEmail)
        $('[name=creator-page-id]').val(member['account-page-id-webflow'])
    } else {
        $("#wf-form-repre-add").fadeOut();
    }	
    });

    $(".show-product-btn").on("click",function(){
        MemberStack.onReady.then(function(member) {  
            myName = member.name + ' ' + member['last-name']
            myEmail = member.email 
            $('[name=creator-name]').val(myName)
            $('[name=creator-email]').val(myEmail)
            $('[name=creator-page-id]').val(member['account-page-id-webflow'])
        });
    });

    
    $('.account-settings-link').on('click',function(){
        MemberStack.onReady.then(function(member) {    	
            var current_membership = member.membership; 
            var current_membership_id = current_membership.id;
            if(current_membership_id == "5d2f56094268d90017f9b176"){
            $("[name='Company']").parent().remove();
            $("[name='Referral Code']").parent().remove();
            $("[name='Website']").parent().remove();
            $("[name='Service']").parent().remove();
            $("[name='Description']").parent().remove();
            $("[name='Slogan']").parent().remove();   
            }
        })  	
    });


})
