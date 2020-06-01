$(document).ready(function(){
    $('.comment').click(function(){
        _this = $(this);
        _id = _this.parent().parent().parent().prev().text();
        _type = _this.attr('data-title');
        $('#form_entry_id').val(_id);
        $('#form_entry_type').val(_type);
        $('#wf-form-comment_form').submit();

    });
})
