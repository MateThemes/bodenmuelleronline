<template>
  <div>
    <div class="uk-position-top">
        <!-- mobile header -->
        <div class="uk-navbar-container uk-navbar-transparent uk-light uk-hidden@m"
            data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 250;">
            <nav data-uk-navbar>
                <div class="uk-navbar-left">
                    <a class="uk-navbar-toggle" href="#tm-mobile-menu" aria-label="Mobiles Menü" data-uk-toggle>
                        <div data-uk-navbar-toggle-icon></div>
                    </a>
                </div>
                <div class="uk-navbar-center">
                    <a href="#top" class="uk-navbar-item uk-logo" aria-label="Zum Start">
                        <img src="/images/logo-inverse.svg" alt="Bodenbeläge Müller - München" width="250">
                        <img class="uk-logo-inverse" src="/images/logo.svg" alt="Bodenbeläge Müller - München" width="250">
                    </a>
                </div>
            </nav>
            <div id="tm-mobile-menu" data-uk-offcanvas="mode: push; overlay: true">
                <div class="uk-offcanvas-bar">
                    <button class="uk-offcanvas-close" type="button" data-uk-close></button>
                    <div class="uk-text-center uk-margin-large-top uk-margin-large-bottom">
                        <img src="/images/logo.svg" width="250" alt="Bodenbeläge Müller - München">
                    </div>
                    <div class="uk-child-width-1-1" data-uk-grid>
                        <div>
                            <div class="uk-panel">
                                <ul class="uk-nav uk-nav-default" data-uk-nav data-uk-scrollspy-nav="closest: li;scroll: true; offset-top: 100; esc-close: true;">
                                    <li>
                                      <a href="#top" data-uk-scroll>Home</a>
                                    </li>
                                    <li>
                                        <a href="#services" @click="closeMenu" data-uk-scroll>Services</a>
                                    </li>
                                    <li>
                                        <a href="#about" @click="closeMenu" data-uk-scroll>Über uns</a>
                                    </li>
                                    <li>
                                        <a href="#products" @click="closeMenu" data-uk-scroll>Produkte</a>
                                    </li>
                                    <li>
                                        <a href="#examples" @click="closeMenu" data-uk-scroll>Beispiele</a>
                                    </li>
                                    <li>
                                        <a href="#partner" @click="closeMenu" data-uk-scroll>Partner</a>
                                    </li>
                                    <li>
                                        <a href="#contact" @click="closeMenu" data-uk-scroll>Kontakt</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-navbar-container uk-navbar-transparent uk-light uk-visible@m"
            data-uk-sticky="media: 960; show-on-up: true; animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 250;">
            <div class="uk-container uk-container-large">
                <nav class="uk-navbar" data-uk-navbar>
                    <div class="uk-navbar-left">
                        <a href="#top" class="uk-navbar-item uk-logo" aria-label="Zum Start" data-uk-scroll>
                            <img src="/images/logo-inverse.svg" alt="Bodenbeläge Müller - München" width="250">
                            <img class="uk-logo-inverse" src="/images/logo.svg" alt="Bodenbeläge Müller - München" width="250">
                        </a>
                    </div>
                    <div class="uk-navbar-right">
                        <ul class="uk-navbar-nav" data-uk-scrollspy-nav="closest: li; scroll: true">
                            <li>
                                <a href="#top" data-uk-scroll>Home</a>
                            </li>
                            <li>
                                <a href="#services" data-uk-scroll>Services</a>
                            </li>
                            <li>
                                <a href="#about" data-uk-scroll>Über uns</a>
                            </li>
                            <li>
                                <a href="#products" data-uk-scroll>Produkte</a>
                            </li>
                            <li>
                                <a href="#examples" data-uk-scroll>Beispiele</a>
                            </li>
                            <li>
                                <a href="#partner" data-uk-scroll>Partner</a>
                            </li>
                            <li>
                                <a href="#contact" data-uk-scroll>Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu (event) {
      UIkit.offcanvas('#tm-mobile-menu').hide();
    }
  }
}
</script>
