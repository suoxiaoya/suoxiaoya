/**
 * Created by admin on 2017/3/15.
 */
$(function(){
    $('.c button:eq(0)').click(function(){
        var art=['小雅','丫丫','小鸭','小丫','雅雅','鸭鸭','娅娅','丫子','雅子','哑哑','大雅','大丫'];
        var art_s=art[Math.floor(Math.random()*art.length)];
        //console.log(art_s);
        $('.a ul').append("<li><input type='checkbox'/>"+art_s+"<button>删除该行</button></li>");
        $('.a li:odd').css("background","pink");
        $('.a li:even').css("background","yellow");
        $('.a button').click(function(){

            $(this).parent().remove();
            //console.log($(this));
        })

        $('.c button:eq(1)').click(function () {
                $(':input').attr('checked',true);
        })

        $('.c button:eq(3)').click(function () {
                $(':input').attr('checked',false);
        })

        $('.c button:eq(5)').click(function(){
            $(':checkbox').each(function(){
                if(this.checked){
                    $(this).parent().append($('.b'));
                }
            })
        })
        $('.c button:eq(2)').click(function () {
            $(':input').each(function(){
                if(this.checked){
                    this.checked=false;
                }else{
                    this.checked=true;
                }
            })
        })
    })
})