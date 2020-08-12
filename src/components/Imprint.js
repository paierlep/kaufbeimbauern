import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default class Imprint extends React.Component {
    render() {
      return (
      <Dialog onClose={this.props.handleClose}
              aria-labelledby="customized-dialog-title"
              open={this.props.open}>
        <DialogTitle id="customized-dialog-title" onClose={this.props.handleClose}>
          Kontakt
        </DialogTitle>
        <DialogContent dividers>
          <p>
            Christian Paier hallo@cpaier.com
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
          Die Inhalte dieser Seite wurde mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
          kann jedoch keine Gewähr übernommen werden - speziell für Inhalte
          die seitens Dritter bereitgestellt werden.
          Sollten Sie inkorrekte, problematische oder rechtswidrige Inhalte
          bemerken, bitte ich Sie sich unter obiger Mailadresse zu melden.
          </p>

          <h2>Haftung für Links</h2>
          <p>
          Diese Webseite enthält Links zu anderen Webseiten für deren Inhalt
          wir nicht verantwortlich sind. Wenn Ihnen rechtswidrige Links
          auffallen, bitte ich Sie sich unter obiger Mailadresse zu melden.
          </p>

          <h2>Bildernachweis</h2>
          <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind
          urheberrechtlich geschützt.
          </p>
          <p>
          Die Bilderechte liegen - so nicht anders angegeben - bei Christian Paier
          </p>

          <h2>Information zur Datenverarbeitung</h2>

          <h3>Cookies</h3>
          <p>
          Diese Website oder eingebundene Dienste nutzen so genannte Cookies.
          Dabei handelt es sich um kleine Textdateien, die mit Hilfe des
          Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.
          </p>

          <p>
          Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
          Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.
          Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>

          <p>
          Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten,
          dass er Sie über das Setzen von Cookies informiert und Sie dies nur im
          Einzelfall erlauben.
          Bei der Deaktivierung von Cookies kann die Funktionalität dieser
          Website eingeschränkt sein.
          </p>

          <h3>Datenspeicherung</h3>
          <p>
          Für die Erstellung von Nutzungsstatistiken setzen wir mit Ihrer
          Einwilligung die datenschutzfreundliche Analyse-Software Matomo
          (https://matomo.org/) ein. Zu diesem Zweck werden auf Ihrem Rechner
          Cookies gespeichert, die zur Identifikation Ihrer Browsersitzung und
          der Zuordnung wiederkehrender Zugriffe auf unsere Webseite dienen.
          Diese Cookies bleiben so lange gespeichert, bis Sie Ihre Einwilligung
          widerrufen oder sie manuell löschen.
          </p>

          <p>
          Bei Ihren Webseitenbesuchen werden folgende Daten erhoben und ausgewertet:
          </p>

          <ul>
          <li>Seitenaufruf (z.B. www.beispiel.de/index.html)</li>
          <li>Browsertyp und Version (z.B.: Internet Explorer 6.0)</li>
          <li>Browsersprache</li>
          <li>Verwendetes Betriebssystem (z.B.: Windows 10)</li>
          <li>Innere Auflösung des Browserfensters</li>
          <li>Bildschirmauflösung</li>
          <li>JavaScript-Aktivierung</li>
          <li>Plugins (Java, Flash, Real, QuickTime …)</li>
          <li>Cookies an/aus</li>
          <li>Farbtiefe</li>
          <li>die zuvor besuchte Seite inkl. Parameter (z.B.: Suchmaschine mit Suchbegriffen)</li>
          <li>IP-Adresse zur Ermittlung des Herkunftslandes sowie des Providers</li>
          <li>Zeitstempel</li>
          <li>Getätigte Klicks</li>
          </ul>

          <p>
          allerdings werden die folgenden Dienste eingebunden:
          </p>
          <ul>
          <li>OpenStreetMap</li>
          <li>Leaflet</li>
          <li>FontAwesome</li>
          </ul>

          <h4>OpenStreetMap</h4>
          <p>
          Auf dieser Website befinden sich eine Karte, die von der
          OpenStreetMap Foundation, 132 Maney Hill Road, Sutton Coldfield,
          West Midlands, B72 1JU, Großbritannien, bereit gestellt wird.
          OpenStreetMap ist ein quelloffenes Mapping-Werkzeug. Die Einbindung
          der Karte auf unserer Website erfolgt mittels eines iframes bzw.
          durch Abruf der sog. Kacheln (Kartenbilder) vom Server des Anbieters.
          Dadurch wird Ihre IP-Adresse an den Openstreetmap-Server übertragen.
          Desweiteren wird ein Sitzungscookie gesetzt (Informationen zu Cookies
          siehe weiter oben in dieser Datenschutzerklärung).
          </p>

          <p>
          Informationen zum Datenschutz und rechtlichen Rahmenbedingungen bei Openstreetmap sind unter den folgenden Links abrufbar:
          </p>
              <ul>
              <li>
          <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy#Map_Data">
              https://wiki.osmfoundation.org/wiki/Privacy_Policy#Map_Data
          </a>
              </li>
              <li>

          <a href="https://wiki.osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ">
          https://wiki.osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ
          </a>
              </li>
              </ul>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.props.handleClose} color="primary">
            Schließen
          </Button>
        </DialogActions>
      </Dialog>
      )
    }
}
