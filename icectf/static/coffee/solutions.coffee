$(document).ready ->
  $('#crypt').click ->
    $('#s_content').html '<p>This is a simple ROT13 cipher. Using the decoder found <a href="http://rot13.com"><b>here</b></a>, the message can be deciphered.</p><p><b>Flag: {rot_in_13}</b></p>'
    $('#solutions').openModal()
    false
  $('#expl').click ->
    $('#s_content').html 
    $('#solutions').openModal()
    false
  $('#fore').click ->
    $('#s_content').html $(this).next("div.solution").html()
    $('#solutions').openModal()
    false
  $('#prog').click ->
    $('#s_content').html $(this).next("div.solution").html()
    $('#solutions').openModal()
    false
  $('#recon').click ->
    $('#s_content').html $(this).next("div.solution").html()
    $('#solutions').openModal()
    false
  $('#misc').click ->
    $('#s_content').html $(this).next("div.solution").html()
    $('#solutions').openModal()
    false
