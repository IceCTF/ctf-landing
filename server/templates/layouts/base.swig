{#
  Base template
  All other templates should extend from this
#}

{# [injector:swig] #}
{# [endinjector] #}

<!DOCTYPE html>
<!--[if lte IE 8]><html class="lt-ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="ie9 no-js"><!--<![endif]-->
  <head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <title>{{ title }} - IceCTF</title>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="csrf-token" content="{{_csrf}}" />

    {% if env == 'development' %}
    <!-- build:css(client) styles/global.css -->
      <!-- bower:css -->
      <link rel="stylesheet" href="/bower_components/normalize.css/normalize.css" />
      <link rel="stylesheet" href="/bower_components/materialize/bin/materialize.css" />
      <!-- endbower -->
    <!-- endbuild -->
    {% else %}
    <link rel="stylesheet" href="/styles/global.css" />
    {% endif %}

    <link rel="stylesheet" href="/styles/main.css">

    {% if env == 'development' %}
    <!-- build:js(client) scripts/modernizr.js -->
    <script src="/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->
    {% else %}
    <script src="/scripts/modernizr.js"></script>
    {% endif %}

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- build:js(client) scripts/shims.js -->
    <!--[if lt IE 9]>
    <script src="/bower_components/consolelog/consolelog.js"></script>
    <script src="/bower_components/html5shiv/dist/html5shiv-printshiv.js"></script>
    <![endif]-->
    <!-- endbuild -->
  </head>
  <body>
    <!--[if lte IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <header class="blue-grey">
      <div class="container"><a href="#" data-activates="nav-mobile" class="button-collapse top-nav hide-on-large-only"><i class="medium mdi-navigation-menu indigo-text text-accent-2"></i></a></div>
      <ul id="nav-mobile" class="side-nav fixed blue-grey lighten-5">
        <li class="logo"><a id="logo-container" href="/" class="brand-logo">
          <img id="front-page-logo" src="images/logos/logo.png" alt="" /></a></li>
        <li {{active('Home', title)}}><a href="/">Home</a></li>
        <li><a href="#">Play</a></li>
        <li {{active('About', title)}}><a href="/about">About</a></li>
        <li {{active('FAQ', title)}}><a href="/faq">FAQ</a></li>
        <li {{active('Contact', title)}}><a href="/contact">Contact</a></li>
        <li {{active('Sponsors', title)}}><a href="/sponsors">Sponsors</a></li>
        <li {{active('Sample Challenges', title)}}><a href="/challenges">Sample Challenges</a></li>
      </ul>
    </header>
    {% block layout %}
    <main>

      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          {% block header %}{% endblock %}
        </div>
      </div>

      <br>
      {% block content %}{% endblock %}
    </main>
    {% endblock %}

    {% block modals %}{% endblock %}

    <footer class="deep-orange page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">IceCTF</h5>
            <p class="grey-text text-lighten-4">A Capture the Flag competition.</p>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Pages</h5>
            <ul>
              <li><a class="white-text" href="contact.html">Contact</a>
              </li>
              <li><a class="white-text" href="faq.html">FAQ</a>
              </li>
              <li><a class="white-text" href="about.html">About</a>
              </li>
              <li><a class="white-text" href="sponsors.html">Sponsors</a>
              </li>
            </ul>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">Connect</h5>
            <ul>
              <li><a class="white-text" href="https://github.com/jamiees2">Github</a>
              </li>
              <li><a class="white-text" href="https://www.facebook.com/groups/1418538045055499/">Facebook</a>
              </li>
              <li><a class="white-text" href="mailto:contact@icec.tf">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          &copy; IceCTF 2015 | Made with <a class="grey-text text-lighten-2" href="http://materializecss.com/">MaterializeCSS</a>
          <a class="grey-text text-lighten-2 right" href="https://tldrlegal.com/license/mit-license">MIT License</a>
        </div>
      </div>
    </footer>

    {% if env == 'development' %}
    <!-- build:js(client) scripts/global.js -->
      <!-- bower:js -->
      <script src="/bower_components/jquery/dist/jquery.js"></script>
      <script src="/bower_components/materialize/bin/materialize.js"></script>
      <!-- endbower -->
    <!-- endbuild -->
    {% else %}
    <script src="/scripts/global.js"></script>
    {% endif %}

    <!-- build:js(client) scripts/main.js -->
      <!-- [injector:js] -->
      <script src="/scripts/contact.js"></script>
      <script src="/scripts/materialize.min.js"></script>
      <script src="/scripts/solutions.js"></script>
      <!-- [endinjector] -->
    <script src="/scripts/main.js"></script>
    <!-- endbuild -->
  </body>
</html>
