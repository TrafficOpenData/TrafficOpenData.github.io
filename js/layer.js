<script>
 var enter =function(){
    var checkSty = $(".checkSty").is(":checked");
    if (checkSty==false){
        layer.msg('Please read the disclaimer!');
        return false;
        }
        else {
            return true;
        }
  }
 </script>