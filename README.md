# NDR PHoneUI

## README NON COMPLETO

#### Screenshots

<p align="center">
<img src="/www/screenshots/home_9.png" width="220" /> <img src="/www/screenshots/power.png" width="220" /> <img src="/www/screenshots/room.png" width="220" />
</p>

Questa Dashboard è ispirata al lavoro di [TBens](https://github.com/TBens): [lovelace-ui-minimalist](https://github.com/TBens/lovelace-ui-minimalist#cards)

#### Se ti piace il mio lavoro...

<p align="center">
<a href="https://www.buymeacoffee.com/Ndr91" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
</p>

# Indice

- [Preparazione](#preparazione)
  - [File configuration.yaml](#file-configuration.yaml)
  - [Card](#card)
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

## Card


## File button-card-template.yaml


# Esempi
## Localizzazione

<img src="/www/screenshots/location.png" width="600" />

## Icona Batteria

<img src="/www/screenshots/battery_icon.jpg" width="600" />

## Avviso entità non disponibile

<img src="/www/screenshots/state_warning.png" width="700" />

## Stato Entità

<img src="/www/screenshots/climate_state.jpg" width="600" />