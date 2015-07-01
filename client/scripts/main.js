'use strict';

(function() {

  $(function(){
    $("body").bind("ajaxSend", function(elm, xhr, s){
       if (s.type == "POST") {
          xhr.setRequestHeader('X-CSRF-Token', $("meta[name=csrf-token]").attr("content"));
       }
    });
    $('.button-collapse').sideNav();
  });

})();
