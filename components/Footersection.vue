<template>
  <div class="uk-section-muted uk-section uk-section-large">
    <div class="uk-container uk-container-large">
      <div class="uk-grid-margin" data-uk-grid>
        <div class="uk-grid-item-match uk-flex-auto uk-width-1-2@m uk-width-1-1@s">
          <div class="uk-flex">
            <div class="uk-panel uk-width-1-1">
              <img data-src="images/logo-inverse.svg" alt="Boden Müller München" width="200px" data-uk-img>
              <h1 class="uk-heading-medium uk-text-left@m uk-text-center">Das Beste für <br
                class="uk-visible@l">Ihren Boden.</h1>
            </div>
          </div>
        </div>
        <div class="uk-grid-item-match uk-flex-bottom uk-flex-auto uk-width-1-4@m uk-width-1-2@s">
          <div class="uk-panel uk-width-1-1">
            <div class="uk-margin uk-text-left@m uk-text-center">Wirtstraße 15 (Nähe
              Sechzgerstadion)<br>81539 München</div>
            <div class="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center">
              Telefon + 49 89 295 314 oder +49 179 606 44 00
            </div>
            <div class="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center">
              Fax +49 89 222761
            </div>
            <div class="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center">
              info[at]boden-mueller.de
            </div>
          </div>
        </div>
      </div>
      <div class="uk-section uk-section-small">
        <div class="uk-flex uk-flex-center uk-padding-large">
          <ul class="uk-subnav" data-uk-margin>
            <li><a href="#modal-imprint" data-uk-toggle>Impressum</a></li>
            <li><a href="#modal-privacy" data-uk-toggle>Datenschutz</a></li>
          </ul>
        </div>
        <div class="uk-text-center">
          © {{ new Date().getFullYear() }} Boden Müller. Alle Rechte vorbehalten. Design by <a
          href="https://mate-themes.com">MateThemes</a>.
        </div>
      </div>
    </div>
  </div>
</template>
