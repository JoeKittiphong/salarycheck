
function hideInit() {
    $('#result').hide();
    //set values
    $('#calc_wd').val('');
    $('#calc_o15').val('');
    $('#calc_o2').val('');
    $('#calc_hd').val('');
    $('#calc_diligM').val('');    
    $('#welfareval').hide();
    return false;
}
var tog = 0;
var navtog = 0;
$('#calcBtn').click(function () {

    //check empty textbox
    if ($('#calc_wd').val() == '') {
        alert('คุณไม่ได้ใส่ วันทำงาน')
        return false
    } else if ($('#calc_o15').val() == '') {
        alert('คุณไม่ได้ใส่ วันทำ OT')
        return false
    } else if ($('#calc_o2').val() == '') {
        alert('คุณไม่ได้ใส่ OT วันหยุด')
        return false
    } else if ($('#alc_hd').val() == '') {
        alert('คุณไม่ได้ใส่ วันหยุดนักขัตฤกษ์')
        return false
    } else if ($('#calc_diligM').val() == '') {
        alert('คุณไม่ได้ใส่ เบี้ยขยันรายเดือน')
        return false
    } else

        if (tog == 0) {
            $('#calc').hide();
            $('#result').fadeIn(1000);
            $('#result').show();
            $('#calcBtn').val("กลับ");

            var salary = 325; //ค่าแรง
            var ot = salary / 8;
            var ot15 = (ot * 1.5) * 3 //ot 1.5
            var ot2 = (ot * 2) * 8 //ot 2
            var ot3 = (ot * 3) * 8 // ot 3
            var food = 20; // ค่าอาหาร
            var food15 = 20; // ค่าอาหาร ot 1.5
            var food2 = 20; // ค่าอาหาร ot2
            var food3 = 10; // ค่าอาหาร ot3
            var foodn = 10; // ค่าอาหารกะดึก
            var shiftn = 60; // ค่ากะดึก
            var diligD = 20; //เบี้ยขยันรายวัน
            var diligH = 10; // เบี้ยขยันวันหยุด
            var morning = 100; // ot สว่าง
            var diligM = $('#calc_diligM').val();

            //get from textbox
            var wd = $('#calc_wd').val();
            var o15 = $('#calc_o15').val();
            var o2 = $('#calc_o2').val();

            $('#result #vals #out_salary').html(wd * salary);
            $('#out_shd').html(shd * salary);
            $('#out_diligm').html(diligM);
            $('#out_o15').html(o15 * ot15);
            $('#out_o2').html(o2 * ot2);
            $('#out_o3').html(o2 * ot3);
            $('#out_food').html(wd * food);
            $('#out_f15').html(wd * food15);
            $('#out_f3').html(o2 * food3);
            $('#out_diligD').html(wd * diligD);
            $('#out_diligH').html(o2 * diligH);

            tog = 1;
            return false;
        }
    if (tog == 1) {
        $('#calc').fadeIn(1000);
        $('#calc').show();
        $('#result').hide();
        $('#calcBtn').val('คิดเงิน');

        tog = 0;
        return false;
    }

    // if(navtog == 0){
    //     $('#output').show();
    //     $('#welfare').hide();
    //     navtog = 1
    //     return false;
    // }
    // if(navtog == 1){
    //     $('#output').hide();
    //     $('#welfare').show();
    //     navtog = 0;
    //     return false;
    // }
    })
    $('#money').click(function () {
        $('#output').show(1000);
        $('#welfareval').hide(1000);
    });

    $('#welfare').click(function () {
        $('#output').hide(1000);
        $('#welfareval').show(1000);
    });

var shd = $('#calc_hd').val();
