
$(document).ready(function () {

var public_memberid;
  $('.s-icon').hover(function(){
    var _this= $(this);
    var comment_num = _this.next().text();
    _this.attr('data-title',comment_num);
	});
  
  $('#user_id').val('{{wf {&quot;path&quot;:&quot;item-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}');
  $('#ef_life_title').text("The Life of "+'{{wf {&quot;path&quot;:&quot;name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}');
  
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


$('.first-name').text('{{wf {&quot;path&quot;:&quot;first-name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}')
if ('{{wf {&quot;path&quot;:&quot;avatar-url&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}'.length > 0) $('.account-avatar').attr('src', '{{wf {&quot;path&quot;:&quot;avatar-url&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}')


$('#member_id').val('{{wf {&quot;path&quot;:&quot;memberstack-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}')

MemberStack.onReady.then(function(member) {  
    if ('{{wf {&quot;path&quot;:&quot;item-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}' === member['account-page-id-webflow']) {
    	$('#private-content').removeClass('hidden')
      $('#public-content').remove()
    } else {
    	$('#public-content').removeClass('hidden')
      $('#private-content').remove()
    }    
    var current_membership = member.membership; 
    var current_membership_id = current_membership.id;
    public_memberid = current_membership_id;
    var company_name = member.company;
    var full_name = member.name + ' ' + member['last-name']+' - Admin';
    if(current_membership_id == '5d31ebdf55ccd00017c4b351'){
    	$('#partner-level').text('Root');       
      $("#memorials-empty-state").remove();
      $('#memorials-block').remove();
      $("#movies-block").remove();
      $("#movies-empty-state").remove();
      $("#memento-empty-state").remove();
      $("#memonto_pad").remove();
      $("#marketplace_section").remove();
      $("#financial_section").remove();
      $("#memonto_pad").remove();
      $(".account-sidebar-numbers").remove();      
      //partner name block
      $("#user_name_block").remove();
      $("#partner_code_div").remove();
      $('#account_name').text(full_name);
      $('#first_name').text(company_name);
    } else if(current_membership_id == '5eaa246ff635d600040cd94c'){
    	$('#partner-level').text('Branch');      
        $("#memorials-empty-state").remove();
        $('#memorials-block').remove();
        $("#movies-block").remove();
        $("#movies-empty-state").remove();
        $("#memento-empty-state").remove();
        $("#memonto_pad").remove();
        $(".account-sidebar-numbers").remove();               
        $("#user_name_block").remove();
        $("#partner_code_div").remove();
        $('#account_name').text(full_name);
        $('#first_name').text(company_name);   
 
    } else if(current_membership_id == '5eaa24d7f635d600040cd954'){    
    		$('#partner-level').text('Beacon');
        $('#memorials-block').remove();
        $('memorials-empty-state').remove()
        $(".partner-profile").css("display","block");
        $("#partner_code_div").css("display","block");        
       	$("#memorials-empty-state").remove();
        $("#movies-block").remove();
        $("#movies-empty-state").remove();
        $("#memento-empty-state").remove();
        $("#memonto_pad").remove();        
        $(".partner-code-for-repre").val('{{wf {&quot;path&quot;:&quot;memberstack-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}');
        $("#representatives").css("display","block");
        var partner_code = member['id'];
        $(".repre-partner-code").each(function(){    	 
            if($(this).text() != partner_code)          
                $(this).parent().parent().remove();                
        });        
        $("#user_name_block").remove();
        $('#account_name').text(full_name);
        $('#first_name').text(company_name);      
    } else {    	
    	$('#partner-level').text('');
      $('memorials-empty-state').remove()
      $("#on-site-interview").css('display','block');
      $("#marketplace_section").remove();
      $("#financial_section").remove();
      $("#listing_detail_section").remove();
      $("#listing_page_section").remove();
      $("[name='Phone Number']").parent().remove();     
      $("#partner_name_block").remove();        
    }  
  if (member["active-memorial-builder"] !== 'True') $('[data-permission=memorial-builder]').remove()
  if (member["active-movie-builder"] !== 'True') $('[data-permission=movie-builder-service]').remove()
  if (member["active-movie-builder-bronze"] !== 'True') $('[data-permission=movie-builder-bronze]').remove()
  if (member["active-movie-builder-silver"] !== 'True') $('[data-permission=movie-builder-silver]').remove()
  if (member["active-movie-builder-gold"] !== 'True') $('[data-permission=movie-builder-gold]').remove()
  if (member["active-on-site-interview"] !== 'True') $('[data-permission=on-site-interview]').remove()
  if ($('.buttons-note-block').find('a').length > 0) $('.buttons-note-block').show()

//Memorials
if ($('.memorials-list').find('.account-item').length < 1) {
  $('.memorials-block').remove()
} else {
	$('#memorials-empty-state').remove()
}

//Movies
if ($('.account-video-list').find('.w-dyn-item').length < 1) {
  $('.movies-block').remove()
} else {
	$('#movies-empty-state').remove()
}
//Numbers
$('.movies-number').text($('.account-video-list').find('.w-dyn-item').length)
$('.memorials-number').text($('.memorials-list').find('.account-item').length)
//Slider arrows
if ($(window).width() > 479) {
  if (Number($('.movies-number').text()) < 4) $('.movies-block').find('.linear-arrows').hide()
  if (Number($('.memorials-number').text()) < 4) $('.memorials-block').find('.linear-arrows').hide()
}
//Mementos
$('.mementopod').find('iframe').each(function() {
  if ($(this).attr('data-user-id') !== '{{wf {&quot;path&quot;:&quot;memberstack-id&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}') $(this).parents('.w-dyn-item').remove()
})
if ($('.mementopod').find('iframe').length < 1) {
	$('.mementopod').remove()
} else {
  $('#memento-empty-state').remove()
  let slides = $('.memento-item').length,
      slide = 1
  $('.mementos-arrow-left').hide()
  if (slides < 2) $('.mementos-arrow-right').hide()  
  $('.mementos-arrow-right').click(function() {
    if (slide < slides) {
    	$('.mementos-list').css('left', '-' + (slide) * 100 +'%')
      $('.mementos-arrow-left').show()
      slide++
      if (slide === slides) {
        $('.mementos-arrow-right').hide()
      }
    }
  })
  $('.mementos-arrow-left').click(function() {
    if (slide > 1) {
    	$('.mementos-list').css('left', '-' + (slide-2) * 100 +'%')
      $('.mementos-arrow-right').show()
      slide--
      if (slide === 1) {
        $('.mementos-arrow-left').hide()
      }
    } 
  })
}

// Sliders
function slide(node, slide) {
let slides = slide.length - 3
if ($(window).width() < 480) {
  slides = slide.length - 1
}
let slideWidth = slide.width()
let rightArrow = $(node).find('.linear-arrow-right'),
    leftArrow = $(node).find('.linear-arrow-left'),
    sliderMove = 0
rightArrow.click(function() {
  leftArrow.removeClass('disabled')
  $(this).removeClass('disabled');
  if (sliderMove >= slideWidth * slides - slideWidth) {
    $(this).addClass('disabled');
  } 
  if (sliderMove < slideWidth * slides) {
    sliderMove += slideWidth;
    slide.parent().attr('style', 'transform:translateX(-'+sliderMove+'px)');
  }   
})

leftArrow.click(function() {
  rightArrow.removeClass('disabled')
  $(this).removeClass('disabled')
  if (sliderMove <= slideWidth) {
    $(this).addClass('disabled')
  }
  if (sliderMove > 0) {
    sliderMove -= slideWidth;
    slide.parent().attr('style', 'transform:translateX(-'+sliderMove+'px)');
  }   
})
}
slide($('.memorials-block'), $('.account-item')) //memorials
slide($('.movies-block'), $('.account-video-list-item')) //movies

}) //memberstack end

const closeForm = () => {
  $('.add-memory-form-popup').css('opacity', '0')
  $('.add-memory-popup-window').css('transform', 'translate(0px,100px)')
  $('.add-memory-form-popup').hide()
}
$('.close-popup-button').click(function() { closeForm() })
$('#close-popup').click(function() { closeForm() })
$("#main-loading").fadeOut();
})
