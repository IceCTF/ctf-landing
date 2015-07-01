{# Homepage Markup #}
{% extends './layouts/base.swig' %}
{% block header %}
<h1 class="header center green-text">Sponsors</h1>
<div class="row center">
  <h5 class="header col s12 light">This competition would not be possible without the generous support of our sponsors.</h5>
</div>
{% endblock %}
{% block content %}
<div class="container">

  <div class="section">
    <h4 class="col s12 center">Sponsors</h4>
    <div class="row">
      <div class="col m6 s12">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="logos/ptso.png">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Reykjavik University<i class="mdi-navigation-more-vert right"></i></span>
            <p><a href="http://ru.is/" target="_blank">Website</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Reykjavik University<i class="mdi-navigation-close right"></i></span>
            <p>RU</p>
          </div>
        </div>
      </div>

      <div class="col m6 s12">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="logos/foundation.png">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Syndis<i class="mdi-navigation-more-vert right"></i></span>
            <p><a href="http://syndis.is/" target="_blank">Website</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Syndis<i class="mdi-navigation-close right"></i></span>
            <p>Syndis</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <div class="section" id="thanks">
    <div class="row center">
      <h5 class="header col s12 light">IceCTF would also like to specially thank the following people: </h5>
    </div>
    <div class="row center">
      <ul>
        <li>Ýmir Vigfússon, for being generally awesome!</li>
      </ul>
    </div>
  </div>
</div>
{% endblock %}
