console.info('6568');
function dowenloadurl(URL,filename){
    chrome.runtime.sendMessage({
        dowenload_url: URL,
        filename:filename
    })
}
document.addEventListener("keydown", function(event) {
    // چک کردن اینکه کاربر دکمه "q" را فشرده است
    if (event.key.toLowerCase() === "q") {
        // نمایش پیام لاگ در کنسول مرورگر
        console.log("سلام چام!");



        $(document).ready(function(){
            $("a").each(function(){
                // console.log("info: " + $(this).attr("href"));



                var hrefValue = $(this).attr("href");
                if (hrefValue && hrefValue.startsWith('https://jobinja.ir/user')){
                    console.info('ok');

                    // dowenloadurl(hrefValue,'r.html');



                    //اینرست در دیتابیس
                    // اطلاعاتی که می‌خواهید ارسال کنید
                    var postData = {
                        link: hrefValue,
                        key2: 'value2'
                    };

                    // ارسال درخواست POST با استفاده از jQuery
                    $.post('http://127.0.0.1/A.php', postData, function(response) {
                        console.log('Response:', response);
                    }, 'json');



                }



            });
        });

    }
});




