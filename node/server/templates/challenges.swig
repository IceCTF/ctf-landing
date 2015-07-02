{# Homepage Markup #}
{% extends './layouts/base.swig' %}
{% block header %}
<h1 class="header center">Sample Challenges</h1>
<div class="row center">
  <h5 class="header col s12 light">Try a few challenges to get acquainted with the style of this competition</h5>
</div>
{% endblock %}
{% block content %}
<div class="container">
  <p>To see a detailed solution, click on the icon above each challenge. Don't cheat...</p>
  <div class="row">
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="crypt" href="#solutions"><i class="mdi-communication-vpn-key"></i></a></h3>
        <h5 class="center">Cryptography</h5>
        <p class="light">Gur nycunorg unf 26 yrggref. 26 qvivqrq ol 2 vf rdhny gb 13. EBG13 vf n fvzcyr flzzrgevp pvcure. Rapbqvat naq qrpbqvat ner qbar va gur fnzr jnl. Fcrnxvat bs juvpu, gur synt vf <b>{ebg_va_13}</b>.</p>
      </div>
    </div>
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="expl" href="#solutions"><i class="mdi-hardware-security"></i></a></h3>
        <h5 class="center">Exploitation</h5>
        <p class="light">I believe the super secret flag is right <b>here<!-- {sup3r_s3cr3t_f1ag} --></b>. What? You don't see it? Well I'm pretty sure I left it back there though. Have you tried looking more closely at the word "here"? It's probably easier if you're on a computer.</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="fore" href="#solutions"><i class="mdi-action-search"></i></a></h3>
        <h5 class="center">Forensics</h5>
        <p class="light">I was told that <b><a href="challenges/search.png" download>search.png</a></b> had something hidden inside of it. What's inside of the image? I've looked at every pixel and I'm pretty sure that nothing is inside of the image. That's 262144 pixels!!!</p>
      </div>
    </div>
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="prog" href="#solutions"><i class="mdi-editor-mode-edit"></i></a></h3>
        <h5 class="center">Programming</h5>
        <p class="light">The JavaScript function <b>is_correct(input)</b> will check whether the string input is the flag. It may be helpful to call the function in your browser's console. When you pass it the flag, it will tell you the flag. What a useful function.</p>

        <script>
          flag = [ 123, 99, 104, 97, 114, 95, 99, 48, 100, 101, 115, 95, 101, 104, 63, 125 ];
          function is_correct(input) {
            for(var i=0; i<flag.length; i++) {
              if(flag[i] !== input.charCodeAt(i)) {
                toast('Incorrect!', 2500);
                return false;
              }
            }
            toast('Flag: ' + input, 5000);
            return true;
          }
        </script>

      </div>
    </div>
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="recon" href="#solutions"><i class="mdi-action-explore"></i></a></h3>
        <h5 class="center">Reconnaissance</h5>
        <p class="light">Our Linux system loves its inventor! If you <a href="/contact"><b>contact</b></a> IceCTF and pretend to be its inventor, I'm sure the system would love to give you the flag. Also, you don't need a message, but you can send 'GIVE ME FLAG :D' if you want.</p>
      </div>
    </div>
    <div class="col s12 l6">
      <div class="icon-block">
        <h3 class="center icon"><a id="misc" href="#solutions"><i class="mdi-social-share"></i></a></h3>
        <h5 class="center">Miscellaneous</h5>
        <p class="light">I caught someone trying to steal something from the server! Take this <a href="challenges/capture.pcapng" download><b>capture.pcacpng</b></a> and see if you can make sense of it. You'll need Wireshark to find out what was unjustly taken from me. My precious file.</p>
      </div>
    </div>
  </div>
</div>

{% endblock %}

{% block modals %}
<div id="solutions" class="modal">
  <div class="modal-content">
    <h4>Solution</h4>
    <div id="s_content"></div>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn waves-effect waves-light indigo accent-2 modal-action modal-close">Got it</a>
  </div>
</div>
{% endblock %}
