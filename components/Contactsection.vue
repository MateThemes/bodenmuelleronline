<template>
    <div class="uk-background-norepeat uk-background-contain uk-background-center uk-section uk-section-large"
        data-src="/images/bg/bottom-bg4.svg" data-uk-parallax="bgx: -120,-120; bgy: 420,120; easing: 0.5" data-uk-img>
        <div id="contact" class="uk-container uk-container-small">
            <div class="uk-container uk-container-small" data-uk-parallax="y: 20,0; opacity: 0.2,1; viewport: 0.3;">
                <div class="uk-width-1-1">
                    <h2 class="uk-h3 uk-heading-bullet uk-margin-medium uk-text-center"
                        data-uk-parallax="y: 20,0; opacity: 0.2,1; viewport: 0.3;">Hier finden Sie uns</h2>
                </div>
            </div>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170489.5700934476!2d11.438000314542462!3d48.11217376090865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf0d7daf322b%3A0x20703df85bf0d624!2sWirtstra%C3%9Fe%2015%2C%2081539%20M%C3%BCnchen%2C%20Deutschland!5e0!3m2!1sde!2sat!4v1599453383376!5m2!1sde!2sat"
                    width="100%" height="650" style="border:0;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
            <div class="uk-margin-large-top" data-uk-margin>
                <div class="uk-width-1-1">
                    <h2 class="uk-h3 uk-heading-bullet uk-margin-medium uk-text-center"
                        data-uk-parallax="y: 20,0; opacity: 0.2,1; viewport: 0.3;">Schreiben Sie uns eine Nachricht</h2>
                </div>
                <form class="uk-grid-small" action="https://formspree.io/f/xbjpyeea" method="POST" data-uk-grid>
                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="firstname" placeholder="Vorname" />
                      </label>
                    </div>

                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="lastname" placeholder="Nachname (*)">
                      </label>
                    </div>

                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="phone" placeholder="Telefon">
                      </label>
                    </div>

                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="email" placeholder="E-Mail (*)">
                      </label>
                    </div>

                    <div class="uk-width-1-1@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="street" placeholder="Straße">
                      </label>
                    </div>

                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="plz" placeholder="PLZ">
                      </label>
                    </div>

                    <div class="uk-width-1-2@s">
                      <label>
                        <input class="uk-input uk-form-large" type="text" name="place" placeholder="Ort">
                      </label>
                    </div>

                    <div class="uk-width-1-1@s">
                      <label>
                        <textarea class="uk-textarea uk-form-large" name="message" rows="8" placeholder="Ihre Nachricht (*)"></textarea>
                      </label>
                    </div>

                    <div class="uk-width-1-1@s">
                        <label>
                            <input class="uk-checkbox" type="checkbox" name="privacy_check" required> Bitte bestätigen Sie unsere Datenschutzrichtlinien.
                        </label>
                    </div>

                    <div class="uk-margin-large-top">
                        <p>
                            <button class="uk-button uk-button-danger uk-button-large" type="reset">Reset</button>
                            <button id="simpleContactSubmitButton" type="submit" class="uk-button uk-button-default uk-button-large uk-margin-small-left">Absenden
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
