<template>
  <div>
    <div class="uk-navbar-container uk-hidden@m" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; top: 250;">
      <nav data-uk-navbar>
        <div class="uk-navbar-left">
          <NuxtLink to="/" class="uk-navbar-toggle" aria-label="Zurück zur Startseite">
            <span data-uk-icon="chevron-left"></span> <span class="uk-margin-small-left">Zurück</span>
          </NuxtLink>
        </div>
        <div class="uk-navbar-center">
          <img alt="Bodenbeläge Müller - München" src="/images/logo-inverse.svg" width="180" />
        </div>
      </nav>
    </div>
    <div class="uk-navbar-container uk-visible@m" data-uk-sticky="media: 960; show-on-up: true; animation: uk-animation-slide-top; top: 250;">
      <div class="uk-container uk-container-large">
        <nav class="uk-navbar" data-uk-navbar>
          <div class="uk-navbar-left">
            <NuxtLink to="/" class="uk-navbar-toggle" aria-label="Zurück zur Startseite">
              <span data-uk-icon="chevron-left"></span> <span class="uk-margin-small-left">Zurück</span>
            </NuxtLink>
          </div>
          <div class="uk-navbar-center">
            <img alt="Bodenbeläge Müller - München" src="/images/logo-inverse.svg" width="250" />
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
