function sticker(){
    html2canvas(document.getElementById('sticker')).then(function(canvas) {
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
        success: function(data) {
          console.log('Upload successfully');console.log(data);
          $("#customizer-sticker").val(data);
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
      $("#flagname").attr('src', 'https://cdn.shopify.com/s/files/1/0357/1433/4779/files/'+flagimg+'.png');
      setTimeout(function(){ sticker(); }, 500);
    });
});
