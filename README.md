# Viu la Muntanya — web

Redisseny complet de la web de **Viu la Muntanya**, fet amb HTML, CSS i JavaScript sense frameworks ni build step, llest per publicar-se amb **GitHub Pages**.

## Estructura

```
viu-la-muntanya/
├── index.html          Inici
├── projecte.html       El projecte (origen, filosofia, com treballem)
├── escoles.html        Orientació en centres escolars
├── casals.html         Orientació en casals d'estiu
├── verticals.html      Lliga de Verticals (enllaços a Wikiloc i Suunto)
├── productes.html      Botiga / productes propis
├── treballa.html       Treballa amb nosaltres (formulari)
├── contacte.html       Contacte (formulari)
├── css/
│   └── styles.css      Sistema de disseny (colors, tipografia, components)
├── js/
│   └── main.js         Menú mòbil, revelat en scroll
└── assets/
    ├── favicon.svg
    ├── topo-light.svg  Textura de corbes de nivell (fons clar)
    ├── topo-dark.svg   Textura de corbes de nivell (fons fosc)
    └── img/
        ├── logo/       Logo oficial (blanc, negre, negre sobre blanc, icona)
        └── productes/  Fotos dels productes propis
```

No hi ha cap pas de compilació: és HTML/CSS/JS pla. Es pot obrir `index.html` directament al navegador o servir-lo amb qualsevol servidor estàtic.

## Publicar-ho a GitHub Pages

1. Crea un repositori nou a GitHub (per exemple `viu-la-muntanya`).
2. Puja tot el contingut d'aquesta carpeta a l'arrel del repositori:
   ```bash
   cd viu-la-muntanya
   git init
   git add .
   git commit -m "Redisseny de la web"
   git branch -M main
   git remote add origin https://github.com/EL_TEU_USUARI/viu-la-muntanya.git
   git push -u origin main
   ```
3. Al repositori de GitHub: **Settings → Pages**.
4. A "Build and deployment", tria **Deploy from a branch**, branca `main` i carpeta `/ (root)`.
5. Desa. Al cap d'un o dos minuts, la web serà disponible a:
   `https://EL_TEU_USUARI.github.io/viu-la-muntanya/`

### Domini propi (opcional)
Si vols mantenir `viulamuntanya.org`, a **Settings → Pages → Custom domain** hi pots afegir el domini, i des del teu proveïdor de DNS apuntar-lo amb un registre `CNAME` cap a `EL_TEU_USUARI.github.io`.

## Què s'ha actualitzat en aquesta versió
- **Logo oficial** a la capçalera i al peu de totes les pàgines, substituint la marca dibuixada en SVG. També s'ha afegit una icona per a mòbil (`apple-touch-icon`).
- **Nova pàgina `verticals.html`** amb el calendari de la temporada 2027 i la fitxa de les cinc verticals (data, punt de sortida i d'arribada, horari de briefing i sortida, distància, desnivell i temps màxim). Cada targeta porta l'enllaç a **Wikiloc** i al **planificador de rutes de Suunto**.
- **Nova entrada "Verticals"** al menú principal i al peu de totes les pàgines, i un bloc de presentació de la lliga a la portada.
- **Fotos reals dels productes** desades en local a `assets/img/productes/`: samarreta de cotó (verd, negre, vermell), dessuadora (verd, negre, blau, mostassa) i bossa tote bag.

El full d'estil (`css/styles.css`) no s'ha modificat: només s'hi han **afegit** regles noves al final del fitxer, dins de blocs comentats, per al logo, les galeries de producte i els botons d'enllaç de recorregut.

## Contingut pendent de revisar
- **Preu de la bossa tote bag**: a `productes.html` hi ha un `price-tag` que diu «Consulta'ns». Substitueix-lo pel preu real (hi ha un comentari HTML al costat).
- **Data de la vertical d'Òrrius**: al calendari hi consta dijous 22 d'abril del 2027, que és el quart dijous del mes i no pas l'últim (l'últim seria el 29). Si és un error, canvia-ho a `verticals.html` (apareix a la fitxa i a la fila del calendari).
- **Samarreta tècnica de córrer**: és l'únic producte que encara fa servir les fotos allotjades a Google (`lh3.googleusercontent.com`), perquè no se n'ha proporcionat cap imatge nova. Quan en tinguis una, desa-la a `assets/img/productes/` i canvia les rutes.
- Els dos formularis (Contacte i Treballa amb nosaltres) són els mateixos Google Forms que ja s'utilitzaven abans — no cal tornar-los a crear.
- Textos i xifres (any de naixement, nombre de participants, preus) provenen del contingut original; revisa'ls si han canviat.

## Personalització ràpida
Tots els colors, tipografies i mides clau estan centralitzats a `:root` a `css/styles.css`. Canviant aquestes variables es pot ajustar tota la paleta sense tocar la resta del CSS.
