function sticker(){
    html2canvas(document.getElementById('sticker'), {useCORS: true, scale: 2, backgroundColor: null, letterRendering: 1/*, dpi: 144*, backgroundColor: "rgba(0,0,0,0)", removeContainer: true, x: 0, y: 0, width: 374, height: 722*/}).then(function(canvas) {
      //var canvasImg = canvas.toDataURL("image/jpg");
      //$('#canvasImg').html('<img src="'+canvasImg+'" alt="">');
      //document.body.appendChild(canvas);
      //document.getElementById("image").src= canvas.toDataURL();
      // Get base64URL
      var base64URL = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
      // AJAX request
      jQuery.support.cors = true;
      $.ajax({
        url: 'https://codehouse.pk/sticker.php',
        type: 'POST',
        crossDomain: true,
        data: {image: base64URL},
        //dataType: 'json',
        //contentType: 'application/json; charset=utf-8',
        success: function(data) {
          console.log('Upload successfully');console.log(data);
          $("#customizer-sticker").val(data);
          //$(".customizer-form").prepend('<img id="tem-preview" src="'+data+'" />');
        },
        error: function (error) {
          alert('POST failed.');
        }
      });
    }); 
}
$(document).ready(function(){
    $("#customizer-firstname").on("input", function(){
      $("#firstname").text($(this).val());
    });
    $("#customizer-lastname").on("input", function(){
      $("#lastname").text($(this).val());
    });
    $("#customizer-flagname").on("change", function(){
      var flagimg = $(this).val().toLowerCase().replace(/ /g,'_').replace(/\(|\)|'|,/g, '').replace(/莽/g, 'c').replace(/么/g, 'o');
      $("#flagname").attr('src', 'https://cdn.shopify.com/s/files/1/0357/1433/4779/files/'+flagimg+'_100x100.png');
      setTimeout(function(){ sticker(); }, 500);
    });
    $("#makesticker").click(function(event) {
      event.preventDefault();
      sticker();
    });
});
