$(document).ready(function(){
    
    $('.fb-button').on('click',function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().children('.view-diary-btn').attr('href');
        var _title = _this.closest('.entry-img-div').prev().find('.entry-item-title').text();
        window.open('https://www.facebook.com/sharer/sharer.php?u='+shareurl+'&t='+_title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;        
    });


    $('.emoji-button').on('click',function(){
        _this = $(this);
        var shareurl = window.location.hostname  + _this.closest('.entry-img-div').next().children('.view-diary-btn').attr('href');
        $('#copy_clip').text(shareurl);
        $('#copy_clip').select();
        document.execCommand("copy");
        return false;        
    });

    $('#c_entry_public').on('click', function(){
        $('.entry-memorial-select').css('display','block');
    });

    $('#c_entry_private').on('click', function(){
        $('.entry-memorial-select').css('display','none');

    });

    $('.entry-edit-btn').on('click',function(){
        _this = $(this);
        _id = _this.parent().prev().children('.diary-id').text();
        _title =  _this.parent().prev().prev().find('.entry-item-title').text();
        _date =  _this.parent().prev().prev().find('h4').text();
        _content =  _this.parent().prev().prev().find('.entry-content').text();
        _entry_type =  _this.parent().prev().prev().find('.entry-type').text();
        _uid = $('account-page-id').val();
        $('#c_entry_title').val(_title);
        $('#c_entry_content').val(_content);
        $('#c_entry_uid').val(_uid);
        $('#c_entry_itemid').val(_id);
        $('#c_entry_date').val(_date);
        if(_entry_type == 1 ){
            $('#c_entry_public').click()
        } else {
            $('#c_entry_private').click()
        }         
    });
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
