/**
 * Created by zhaoly on 2017/9/11.
 */
$(function () {
    loadData();
})

var data = [
    {key:"",name:"租赁投入",childs:[
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"}
    ],
        totalMoney:"67676"

    },
    {key:"",name:"店员人工",childs:[
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"}
    ], totalMoney:"67676"
    },
    {key:"",name:"日常办公开支",childs:[
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"},
        {name:"租金",val:"333"}
    ], totalMoney:"67676"
    },
    {key:"",name:"固定投入逐月摊销",totalMoney:"4534534"},
    {key:"",name:"每月费用支出总计",totalMoney:"4534534"},
    {key:"",name:"门店商品销售毛利率",totalMoney:"4534534"},
    {key:"",name:"门店月盈亏平衡点",totalMoney:"4534534"},
]

function loadData() {
    $.each(data,function (i,item) {
        if(typeof(item.childs) != 'undefined' && item.childs.length > 0){
            var tr = $("<tr></tr>");
            tr.appendTo($("#tb"));
            var tdConut = item.childs.length+1;
            var td = $("<td class='header-tr' rowspan='"+tdConut+"'>"+item.name+"</td>");
            td.appendTo(tr);
            $.each(item.childs,function (j,child) {
                var tr_child = $("<tr></tr>");
                tr_child.appendTo($("#tb"));
                var td = $("<td>"+(j+1)+"</td>");
                td.appendTo(tr_child);
                var td = $("<td>"+child.name+"</td>");
                td.appendTo(tr_child);
                var td = $("<td>"+child.val+"</td>");
                td.appendTo(tr_child);
            })
            var tr = $("<tr class='header-tr tr-bg'></tr>");
            tr.appendTo($("#tb"));
            var td = $("<td colspan='3'>合计:</td>");
            td.appendTo(tr);
            var td = $("<td>"+item.totalMoney+"</td>");
            td.appendTo(tr);

        }else {
            var tr = $("<tr class='header-tr tr-bg'></tr>");
            tr.appendTo($("#tb"));
            var td = $("<td colspan='3'>"+item.name+"</td>");
            td.appendTo(tr);
            var td = $("<td>"+item.totalMoney+"</td>");
            td.appendTo(tr);
        }
    })
}