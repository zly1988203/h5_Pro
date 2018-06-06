$(function () {
    $("#tabOne").on("click",function () {
        $("#tabTwo").removeClass("active");
        $("#dvEndTime").addClass("undisplay");
        $(this).addClass("active");
    })

    $("#tabTwo").on("click",function () {
        $("#tabOne").removeClass("active");
        $("#dvEndTime").removeClass("undisplay");
        $(this).addClass("active");
    })

    dataUtils.exChangeVal($('.exchange'),$('#startAddr'),$('#endAddr'));

    // ================================= 选择地址相关 ===================================
    adrsUtils.selectAddress({el_trigger:$('.search-station li'),el_popup:$('#search-address')});

    // ================================= 选择城市相关 ===================================
    adrsUtils.openCity({el_trigger: $('#setCityButton'),el_popup:$('#select-Citys') });

    //选择人数
    $('#present_peopleNumber').parent().on('click', function() {
        $.selectPicker({
            title:'选择出行人数',
            data:[
                {'value':1, text: '1人'},
                {'value':2, text: '2人'},
                {'value':3, text: '3人'},
                {'value':4, text: '4人'},
                {'value':5, text: '5人'},
                {'value':6, text: '6人'}
            ],
            current: $('#present_peopleNumber').data('value'),
            onChange: function(v, t) {
                var people = $('#present_peopleNumber');

                if(people.val() != t) {
                    people.data('value', v).val(t).trigger('change');
                }
            }
        });
    });

    $("#resbtn").on('click',function () {
        $(".cover").removeClass("undisplay");
        $("#reservationInfo").removeClass("undisplay");
    })

    $("#submitInfo").on('click',function () {
        // $(".cover").addClass("undisplay");
        $("#reservationInfo").addClass("undisplay");
        $("#msgBox").removeClass("undisplay");
    })
    $("#reservationInfo .icon-close").on('click',function () {
        $(".cover").addClass("undisplay");
        $("#reservationInfo").addClass("undisplay");
    })

    $("#msgBox .btn-konw").on('click',function () {
        $(".cover").addClass("undisplay");
        $("#msgBox").addClass("undisplay");
    })

    //字数统计
    $('#remark').on('input', function() {
        var length = $(this).val().length;
        if(length <= 100) {
            $(this).next('div').attr('class', 'message-length').text(length + '/100');
        } else {
            /*$(this).next('div').attr('class', 'sui-red').text('字数太多了。');*/
        }
    });

})
