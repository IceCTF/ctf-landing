{# Homepage Markup #}
{% extends './layouts/base.swig' %}
{% block header %}
<h1 class="header center">Contact</h1>
<div class="row center">
  <h5 class="header col s12 light">Please feel free to contact us if you have any questions!</h5>
</div>
{% endblock %}
{% block content %}
<div class="container">
  <div class="section">
    <div class="row">
      <form class="col s12" action="http://camsctf.com/contact.php">
        <div class="row">
          <div class="input-field col s12 m6 l6">
            <input id="first_namecontact" name="first" type="text" class="validate">
            <label for="first_namecontact" class="">First Name</label>
          </div>
          <div class="input-field col s12 m6 l6">
            <input id="last_namecontact" name="last" type="text" class="validate">
            <label for="last_namecontact">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea name="message" class="materialize-textarea validate"></textarea>
            <label>Message</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" name="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <button class="btn waves-effect waves-light indigo accent-2" type="submit" name="action">Submit
          <i class="mdi-content-send right"></i>
        </button>
      </form>
    </div>
  </div>
</div>
<br>
{% endblock %}
