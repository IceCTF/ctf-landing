$(document).ready ->
  $('form').submit ->
    form = $(this)
    $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr 'disabled', true
    $.ajax
      type: 'POST'
      url: $(this).attr('action')
      data: $(this).serialize()
      success: (data) ->
        if data.success == 1
          form[0].reset()
          form.find('i, label').removeClass 'active'
          form.find('input').blur()
        Materialize.toast data.message, data.message.length * 500
        setTimeout (->
          $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr 'disabled', false
        ), 500
      error: (xhr, opts, err) ->
        $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr 'disabled', false
        Materialize.toast("An error occured, please try again later.", 1500)

    false
