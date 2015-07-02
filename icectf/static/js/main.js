'use strict'
do ->
  $ ->
    $('body').bind 'ajaxSend', (elm, xhr, s) ->
      if s.type == 'POST'
        xhr.setRequestHeader 'X-CSRF-Token', $('meta[name=csrf-token]').attr('content')
      return
    $('.button-collapse').sideNav()
    $('.countdown').TimeCircles
      use_background: false
      time:
        Days: color: '#3489ff'
        Hours: color: '#3489ff'
        Minutes: color: '#3489ff'
        Seconds: color: '#3489ff'
    # $(window).on("resize", function(){$(".countdown").TimeCircles({use_background: false});})
    return
  return
