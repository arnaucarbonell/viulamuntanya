# Viu la Muntanya — web

Redisseny complet de la web de **Viu la Muntanya**, fet amb HTML, CSS i JavaScript sense frameworks ni build step, llest per publicar-se amb **GitHub Pages**.

## Estructura

```
viu-la-muntanya/
├── index.html          Inici
├── projecte.html       El projecte (origen, filosofia, com treballem)
├── escoles.html        Orientació en centres escolars
├── casals.html         Orientació en casals d'estiu
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
    └── topo-dark.svg   Textura de corbes de nivell (fons fosc)
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

## Contingut a revisar abans de publicar
- Les fotos de productes (`productes.html`, secció d'inici) encara apunten a les imatges originals allotjades a Google (`lh3.googleusercontent.com`). Funcionen, però no són fiables a llarg termini: és recomanable baixar-les i desar-les dins `assets/` amb rutes locals.
- Els dos formularis (Contacte i Treballa amb nosaltres) són els mateixos Google Forms que ja s'utilitzaven abans — no cal tornar-los a crear.
- Textos i xifres (any de naixement, nombre de participants, preus) provenen del contingut original; revisa'ls si han canviat.

## Personalització ràpida
Tots els colors, tipografies i mides clau estan centralitzats a `:root` a `css/styles.css`. Canviant aquestes variables es pot ajustar tota la paleta sense tocar la resta del CSS.
