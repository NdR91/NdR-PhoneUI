# NDR PHoneUI

## README NON COMPLETO

#### Screenshots

<p align="center">
<img src="/www/screenshots/home_9.png" width="220" /> <img src="/www/screenshots/power.png" width="220" /> <img src="/www/screenshots/room.png" width="220" />
</p>

Credits:
- Questa Dashboard è ispirata al lavoro di [TBens](https://github.com/TBens): [lovelace-ui-minimalist](https://github.com/TBens/lovelace-ui-minimalist)
- Molte delle icone utilizzate provengono dall'ottima repo di [elax46](https://github.com/elax46): [custom-brand-icons](https://github.com/elax46/custom-brand-icons)

#### Se ti piace il mio lavoro...

<p align="center">
<a href="https://www.buymeacoffee.com/Ndr91" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</p>

# Indice

- [Preparazione](#preparazione)
  - [File configuration.yaml](#file-configuration.yaml)
  - [Card](#card)
  - [Split della configurazione](#split-della-configurazione)
  - [File button-card-template.yaml](#file-button-card-template.yaml)  
- [Esempi](#esempi)
  - [Localizzazione](#localizzazione)
  - [Avviso entità non disponibile](#avviso-entità-non-disponibile)  

# Preparazione

Per installare ed adattare la Dashboard, è prima necessario eseguire una serie di passi.

## File configuration.yaml

Il metodo migliore per lavorare su una UI così complessa, è quello di utilizzare un file `.yaml` al posto degli strumenti messi a disposizione sul Frontend di Home Assistant.
Per conservare la possibilità di utilizzare entrambi i metodi (ovvero la creazione di "Plance" sia da frontend che da file `yaml`), sarà necessario inserire questo paragrafo al `configuration.yaml`:

```yaml
lovelace:
  # MODE
  mode: storage
  # ------------------------------------------------------
  # Dashoards
  dashboards:
    # NdR Phone UI
    ndr-phoneui: #<-- Nome a piacimento
      mode: yaml
      title: NdR Phone UI #<-- Titolo a piacimento
      icon: mdi:home-assistant #<-- Icona a piacimento
      show_in_sidebar: true
      filename: ndr_phoneui.yaml  #<-- Nome a piacimento
    # ----------------------------------------------------
```
> *Nota: molto importante la parte **mode: storage**. Questo significa che potrete utilizzare sia Dashboard create da Frontend che in modalità yaml*

## Card ed Integrazioni

Il numero ed il tipo di Card ed Integrazioni da utilizzare è totalmente soggettivo. 
Quelle che però risultano necessarie per ottenere il risultato mostrato negli screenshots, sono le seguenti:

- [x] [Layout Card](https://github.com/thomasloven/lovelace-layout-card)
- [x] [Card Mod](https://github.com/thomasloven/lovelace-card-mod)
- [x] [Button Card](https://github.com/custom-cards/button-card)
- [x] [Browser Mod](https://github.com/thomasloven/hass-browser_mod)

Le istruzioni per l'installazione di ogni componente aggiuntivo sono disponibili nelle repo GitHub linkate.

## Split della configurazione

Come avviene per il `configuration.yaml`, anche il file relativo alla Dashboard può essere "spezzettato" in più file.
Questa pratica non è obbligatoria, serve solo a creare ordine.

Nell'esempio di questa Repo, troverete questa configurazione all'interno del file `ndr_phoneui.yaml`:

> *Ricordo che il nome del file può essere cambiato a piacimento. L'importante è che il nome combaci con il campo `filename:` presente nel `configuration.yaml`*

```yaml
# Titolo
title: Home
# --------------------------------------------------------
# Button Card Templates
button_card_templates: !include lovelace/NdR-PhoneUI/button_card_templates.yaml
# --------------------------------------------------------
# Viste
views: !include_dir_merge_list lovelace/NdR-PhoneUI/views/ 
# --------------------------------------------------------
```
Come intuibile, queste poche righe non fanno altro che indicare dove Home Assistant dovrà andare a trovare i file contenenti gli elementi che compongono la Dashboard.

Oltre a quanto sopra, si aggiungono i "Popup", realizzati grazie all'integrazione Browser Mod. Per ridurre ulteriormente la dimensione di ogni file, ho deciso di spostare le card relative ai Popup in una cartella dedicata.

Per fare questo, è bastato richiamare il percorso in questo modo:

```yaml
tap_action:
  action: fire-dom-event
  browser_mod:
    command: popup
    title: []
    style:
    card: !include /config/lovelace/NdR-PhoneUI/popup/person.yaml
```
In sostanza, questa è la rappresentazione dell'organizzazione ho ho voluto dare:

```bash
ndr_phoneui.yaml
├── lovelace/NdR-PhoneUI
│   ├── button_card_templates.yaml
│   ├── views
│   │   ├── 01_home.yaml
│   │   ├── 02_power.yaml
│   │   ├── 03_system.yaml
│   │   ├── 04_rooms.yaml
│   ├── popup
│   │   ├── alarm.yaml
│   │   ├── person.yaml
│   │   ├── tvremote.yaml
```

All'atto pratico, cosa significa tutto questo?
E' molto semplice:

Se, come descritto sopra, nel file di lovelace (`ndr_phoneui.yaml` nell'esempio in questa repo) è presente:

```yaml
views: !include_dir_merge_list lovelace/NdR-PhoneUI/views/ 
```
E dentro la cartella `views` abbiamo il file `01_home.yaml`, con al suo interno qualcosa tipo:

```yaml
  - title: Home
    path: home
    icon: 'mdi:home-roof'
    panel: false
    type: custom:grid-layout
    badges: []
    cards:
```

Il risultato, per Home Assistant, è come se avessimo __un unico file `ndr_phoneui.yaml`__ contenente tutto:

```yaml
# Titolo
title: Home
# --------------------------------------------------------
# Button Card Templates
button_card_templates: !include lovelace/NdR-PhoneUI/button_card_templates.yaml
# --------------------------------------------------------
# Viste
views: 
  - title: Home
    path: home
    icon: 'mdi:home-roof'
    panel: false
    type: custom:grid-layout
    badges: []
    cards:
```

## File button-card-templates.yaml

Il file `button-card-templates.yaml` funziona in modo molto simile ai popup di browser-mod. 
In sostanza esso contiene una serie di "frazioni di button card standard", che possono essere richiamate dalle "viste" 

# Esempi
## Localizzazione

<img src="/www/screenshots/location.png" width="600" />

## Icona Batteria

<img src="/www/screenshots/battery_icon.jpg" width="600" />

## Avviso entità non disponibile

<img src="/www/screenshots/state_warning.png" width="700" />

## Stato Entità

<img src="/www/screenshots/climate_state.jpg" width="600" />