$(document).ready(function() {
  return $('form').submit(function() {
    var form;
    form = $(this);
    $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', true);
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize(),
      success: function(data) {
        if (data.success === 1) {
          form[0].reset();
          form.find('i, label').removeClass('active');
          form.find('input').blur();
        }
        Materialize.toast(data.message, data.message.length * 150);
        return setTimeout((function() {
          return $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', false);
        }), 500);
      },
      error: function(xhr, opts, err) {
        $('button', form).toggleClass('disabled indigo darken-2 waves-effect waves-light').attr('disabled', false);
        return Materialize.toast("An error occured, please try again later.", 150);
      }
    });
    return false;
  });
});

$(function() {
  $('.button-collapse').sideNav();
  return $('.countdown').TimeCircles({
    use_background: false,
    time: {
      Days: {
        color: '#3489ff'
      },
      Hours: {
        color: '#3489ff'
      },
      Minutes: {
        color: '#3489ff'
      },
      Seconds: {
        color: '#3489ff'
      }
    }
  });
});

$(document).ready(function() {
  $('#crypt').click(function() {
    $('#s_content').html('<p>This is a simple ROT13 cipher. Using the decoder found <a href="http://rot13.com"><b>here</b></a>, the message can be deciphered.</p><p><b>Flag: {rot_in_13}</b></p>');
    $('#solutions').openModal();
    return false;
  });
  $('#expl').click(function() {
    $('#s_content').html('<p>A basic web exploitation technique is to look at the <b>source code</b>. Viewing the source code around the word "<b>here</b>" shows the flag commented out.</p><p><b>Flag: {sup3r_s3cr3t_f1ag}</b></p>');
    $('#solutions').openModal();
    return false;
  });
  $('#fore').click(function() {
    $('#s_content').html('<p>Most file types have a <b>header</b> and a <b>trailer</b>. Image displaying software will only read to the trailer. Thus, it is possible to conceal information in the binary content of the file after the trailer. Open up the image in a hex editor such as <b>HxD</b> and look at the end to find the flag.</p><p><b>Flag: {searching_inside}</b></p>');
    $('#solutions').openModal();
    return false;
  });
  $('#prog').click(function() {
    $('#s_content').html('<p>After calling the function, view its source. Notice that the flag is represented as an integer array. The function iterates through each character of the input and compares its <b>JS Char Code</b> to the respective integer in the array. A one-liner solution is shown below.</p><p><pre>console.log(String.fromCharCode.apply(null, flag));</pre></p><p><b>Flag: {char_c0des_eh?}</b></p>');
    $('#solutions').openModal();
    return false;
  });
  $('#recon').click(function() {
    $('#s_content').html('<p>If you perform a Google search for <b>Linux inventor</b>, Entering Linus Torvalds isn&apos;t enough though, the system refuses to believe its him without his email! Searching for <b>Linus Torvalds email</b> gives us the email torvalds@osdl.org, which when submitted into the contact page will give you the flag.</p><p><b>Flag: {i_<3_LiNuX}</b></p>');
    $('#solutions').openModal();
    return false;
  });
  return $('#misc').click(function() {
    $('#s_content').html('<p>Using Wireshark, open the file. You&apos;ll notice a TCP transfer occurring. TCP is a common network protocol used to transfer entities. To extract <b>flag.png</b>, use <b>File -> Export Objects -> HTTP</b>. Open the file to get the flag.</p><p><b>Flag: {p9troA}</b></p>');
    $('#solutions').openModal();
    return false;
  });
});
