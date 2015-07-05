$(document).ready ->
  $('#crypt').click ->
    $('#s_content').html $(this).next("div.solution").html()
    $('#solutions').openModal()
    false
  $('#expl').click ->
    $('#s_content').html $(this).next("div.solution").html()
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
