import { injectGlobal } from 'styled-components';
import svg from 'fonts/dkan-topics.svg';
import eot from 'fonts/dkan-topics.eot';
import woff from 'fonts/dkan-topics.woff';
import ttf from 'fonts/dkan-topics.ttf';
import flatttf from 'fonts/dkan-flaticon.ttf';

const fonts = interraConfig.fontConfig;

const backColor = fonts && fonts.backColor ? fonts.backColor : "#fafafa";
const link = fonts && fonts.link ? fonts.link : "#337ab7";
const linkHover = fonts && fonts.linkHover ? fonts.linkHover : "#23527c";
const linkFocus = fonts && fonts.linkFocus ? fonts.linkFocus : "#23527c";


/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${backColor};
    min-height: 100%;
    min-width: 100%;
  }

  a:hover {
    color: ${linkFocus};
  }
  a:focus {
      color: ${linkHover};
      text-decoration: underline;
  }
  a {
      color: ${link};
      text-decoration: none;
  }
  p,
  label {
    line-height: 1.5em;
  }
  .search-list-item .label {
      border-color: #888;
      color: #888;
  }
  .label {
    margin-right: 5px;
    border: 1px solid;
  }
  .label[data-format=HTML],.label[data-format=html],.label[data-format*=html]{border-color:#55a1ce;color:#55a1ce;}.label[data-format=jpeg],.label[data-format=jpg]{border-color:blue;color:blue;}.label[data-format=json],.label[data-format*=json]{border-color:#ef7100;color:#ef7100;}.label[data-format=xml],.label[data-format*=xml]{border-color:#ef7100;color:#ef7100;}.label[data-format=text],.label[data-format*=text]{border-color:#74cbec;color:#74cbec;}.label[data-format=csv],.label[data-format*=csv]{border-color:#dfb100;color:#dfb100;}.label[data-format=xls],.label[data-format*=xls]{border-color:#2db55d;color:#2db55d;}.label[data-format=zip],.label[data-format*=zip]{border-color:#686868;color:#686868;}.label[data-format=api],.label[data-format*=api]{border-color:#ec96be;color:#ec96be;}.label[data-format=pdf],.label[data-format*=pdf]{border-color:#e0051e;color:#e0051e;}.label[data-format=rdf],.label[data-format*=rdf],.label[data-format*=nquad],.label[data-format*=ntriples],.label[data-format*=turtle]{border-color:#0b4498;color:#0b4498;}.label[data-format=data],.label[data-format*=data]{border-color:olive;color:olive;}.label[data-format=txt],.label[data-format*=txt]{border-color:#70c6e5;color:#70c6e5;}.label[data-format=tsv],.label[data-format*=tsv]{border-color:#6f5191;color:#6f5191;}.format-label{color:transparent;font-weight:normal;height:50px;left:0;position:absolute;text-decoration:none;top:0;width:35px;z-index:0;}.format-label:before{content:"\\e626";color:olive;font-family:"dkan-flaticon";font-size:50px;font-style:normal;font-weight:normal;font-variant:normal;left:-10px;line-height:1;position:absolute;speak:none;text-transform:none;text-decoration:none;text-indent:none;top:-2px;vertical-align:middle;z-index:2;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-shadow:1px 1px 1px rgba(0,0,0,0.004);}.format-label[data-format=data]:before{content:"\\e626";color:olive;}.format-label[data-format=api]:before{content:"\\e608";color:#ec96be;}.format-label[data-format=csv]:before{content:"\\e622";color:#dfb100;}.format-label[data-format=html]:before{content:"\\e645";color:#55a1ce;}.format-label[data-format=jpg]:before,.format-label[data-format=jpeg]:before{content:"\\e64f";color:blue;}.format-label[data-format=json]:before{content:"\\e651";color:#ef7100;}.format-label[data-format=pdf]:before{content:"\\e67b";color:#e0051e;}.format-label[data-format=png]:before{content:"\\e67f";color:purple;}.format-label[data-format=rdf]:before{content:"\\e68a";color:#0b4498;}.format-label[data-format=txt]:before{content:"\\e6a1";color:#70c6e5;}.format-label[data-format=xls]:before{content:"\\e6af";color:#2db55d;}.format-label[data-format=xlsx]:before{content:"\\e6b0";color:#70c6e5;}.format-label[data-format=xml]:before{content:"\\e6b1";color:#ef7100;}.format-label[data-format=zip]:before{content:"\\e6b3";color:#686868;}.format-label[data-format=tsv]:before{content:"\\e900";color:#6f5191;}
  @font-face {
    font-family:'font_icon_select_1';
    src: url(${eot});
       src: url(${eot}?#iefix) format('embedded-opentype'),
           url(${woff}) format('woff'),
           url(${ttf}) format('truetype'),
           url(${svg}) format('svg');
    font-weight:normal;
    font-style:normal;
  }
  @font-face {
    font-family:'dkan-flaticon';
     src: url(${flatttf}) format('truetype');
    font-weight:normal;
    font-style:normal;
  }

  .font-icon-select-1{font-family:'font_icon_select_1'; font-size: 6em}.font-icon-select-1-20:before{content:"\\20"}.font-icon-select-1-computer-disk-drive-1:before{content:"\\e900"}.font-icon-select-1-computer-imac-1:before{content:"\\e901"}.font-icon-select-1-computer-notebook-2:before{content:"\\e902"}.font-icon-select-1-sd-card-download:before{content:"\\e903"}.font-icon-select-1-phone-2:before{content:"\\e904"}.font-icon-select-1-phone-signal-full:before{content:"\\e905"}.font-icon-select-1-mobile-phone-portrait:before{content:"\\e906"}.font-icon-select-1-headphone:before{content:"\\e907"}.font-icon-select-1-cursor-double-click-2:before{content:"\\e908"}.font-icon-select-1-book-2:before{content:"\\e909"}.font-icon-select-1-books-library:before{content:"\\e90a"}.font-icon-select-1-drawer-2:before{content:"\\e90b"}.font-icon-select-1-newspaper:before{content:"\\e90c"}.font-icon-select-1-crown-3:before{content:"\\e90d"}.font-icon-select-1-google-plus:before{content:"\\e90e"}.font-icon-select-1-trophy-3:before{content:"\\e90f"}.font-icon-select-1-lock-close-6:before{content:"\\e910"}.font-icon-select-1-megaphone-1:before{content:"\\e911"}.font-icon-select-1-download-3:before{content:"\\e912"}.font-icon-select-1-cloud:before{content:"\\e913"}.font-icon-select-1-graph:before{content:"\\e914"}.font-icon-select-1-network:before{content:"\\e915"}.font-icon-select-1-design-mug:before{content:"\\e916"}.font-icon-select-1-picture-2:before{content:"\\e917"}.font-icon-select-1-television:before{content:"\\e918"}.font-icon-select-1-day-snow-thunder:before{content:"\\e919"}.font-icon-select-1-umbrella-open:before{content:"\\e91a"}.font-icon-select-1business-bag-cash:before{content:"\\e91b"}.font-icon-select-1-graph-bar-2:before{content:"\\e91c"}.font-icon-select-1-graph-bar-3d:before{content:"\\e91d"}.font-icon-select-1-graph-bar-increase:before{content:"\\e91e"}.font-icon-select-1-graph-line-2:before{content:"\\e91f"}.font-icon-select-1-graph-pie-2:before{content:"\\e920"}.font-icon-select-1-bank-notes-3:before{content:"\\e921"}.font-icon-select-1-coin-receive:before{content:"\\e922"}.font-icon-select-1-piggy-bank:before{content:"\\e923"}.font-icon-select-1-wallet-1:before{content:"\\e924"}.font-icon-select-1-network-world:before{content:"\\e925"}.font-icon-select-1-location-pin-8:before{content:"\\e926"}.font-icon-select-1-location-pin-target-2:before{content:"\\e927"}.font-icon-select-1-map-1:before{content:"\\e928"}.font-icon-select-1-map-pin-2:before{content:"\\e929"}.font-icon-select-1-bank-2:before{content:"\\e92a"}.font-icon-select-1-building-6:before{content:"\\e92b"}.font-icon-select-1-building-12:before{content:"\\e92c"}.font-icon-select-1-home-3:before{content:"\\e92d"}.font-icon-select-1-home-4:before{content:"\\e92e"}.font-icon-select-1-water-fountain:before{content:"\\e92f"}.font-icon-select-1-airplane-departure:before{content:"\\e930"}.font-icon-select-1-cactus:before{content:"\\e931"}.font-icon-select-1-eco-globe-1:before{content:"\\e932"}.font-icon-select-1-eco-lightbulb:before{content:"\\e933"}.font-icon-select-1-honeycomb:before{content:"\\e934"}.font-icon-select-1-plant:before{content:"\\e935"}.font-icon-select-1-sign-recycle:before{content:"\\e936"}.font-icon-select-1-tree-small-2:before{content:"\\e937"}.font-icon-select-1-water-drop:before{content:"\\e938"}.font-icon-select-1-water-faucet:before{content:"\\e939"}.font-icon-select-1-windmill-paper:before{content:"\\e93a"}.font-icon-select-1-ball-basketball:before{content:"\\e93b"}.font-icon-select-1-dumbbell-2:before{content:"\\e93c"}.font-icon-select-1-weight-lifting:before{content:"\\e93d"}.font-icon-select-1-bus-2:before{content:"\\e93e"}.font-icon-select-1-car-4:before{content:"\\e93f"}.font-icon-select-1-car-battery:before{content:"\\e940"}.font-icon-select-1-speed-gauge:before{content:"\\e941"}.font-icon-select-1-traffic-light-1:before{content:"\\e942"}.font-icon-select-1-truck-2:before{content:"\\e943"}.font-icon-select-1-planet-ring:before{content:"\\e944"}.font-icon-select-1-religion-bible:before{content:"\\e945"}.font-icon-select-1-chair-4:before{content:"\\e946"}.font-icon-select-1-tools-boox:before{content:"\\e947"}.font-icon-select-1-tools-wrench-screwdriver:before{content:"\\e948"}.font-icon-select-1-traffic-cone:before{content:"\\e949"}.font-icon-select-1-shield-5:before{content:"\\e94a"}.font-icon-select-1-thread-roll:before{content:"\\e94b"}.font-icon-select-1-tissue:before{content:"\\e94c"}.font-icon-select-1-ambulance:before{content:"\\e94d"}.font-icon-select-1-dentis:before{content:"\\e94e"}.font-icon-select-1-heart-beat:before{content:"\\e94f"}.font-icon-select-1-hospital-1:before{content:"\\e950"}.font-icon-select-1-medical-box:before{content:"\\e951"}.font-icon-select-1-pulse-signal-2:before{content:"\\e952"}.font-icon-select-1-coffee-cup-3:before{content:"\\e953"}.font-icon-select-1-water-mug:before{content:"\\e954"}.font-icon-select-1-apple-1:before{content:"\\e955"}.font-icon-select-1-cheeseburger:before{content:"\\e956"}.font-icon-select-1-balloon:before{content:"\\e957"}.font-icon-select-1-game-controller-3:before{content:"\\e958"}.font-icon-select-1-heart-care:before{content:"\\e959"}.font-icon-select-1-rocking-horse:before{content:"\\e95a"}.font-icon-select-1-copy-1:before{content:"\\e95b"}.font-icon-select-1-file-download-1:before{content:"\\e95c"}.font-icon-select-1-file-share-1:before{content:"\\e95d"}.font-icon-select-1-compress:before{content:"\\e95e"}.font-icon-select-1-at-sign-stamp:before{content:"\\e95f"}.font-icon-select-1-envelope-3:before{content:"\\e960"}.font-icon-select-1-account-code:before{content:"\\e961"}.font-icon-select-1-account-favorite:before{content:"\\e962"}.font-icon-select-1-account-group-1:before{content:"\\e963"}.font-icon-select-1-account-group-2:before{content:"\\e964"}.font-icon-select-1-account-group-4:before{content:"\\e965"}.font-icon-select-1-business-increase:before{content:"\\e966"}.font-icon-select-1-group-global:before{content:"\\e967"}.font-icon-select-1-group-wifi:before{content:"\\e968"}.font-icon-select-1-bubble-chat-2:before{content:"\\e969"}.font-icon-select-1-bubble-chat-text-2:before{content:"\\e96a"}.font-icon-select-1-user-chat-4:before{content:"\\e96b"}.font-icon-select-1-cog-double-1:before{content:"\\e96c"}.font-icon-select-1-cog-double-2:before{content:"\\e96d"}.font-icon-select-1-cog-lightbulb:before{content:"\\e96e"}.font-icon-select-1-cog:before{content:"\\e96f"}.font-icon-select-1-gauge:before{content:"\\e970"}.font-icon-select-1-settings-1:before{content:"\\e971"}.font-icon-select-1-settings-2:before{content:"\\e972"}.font-icon-select-1-timer-full-2:before{content:"\\e973"}.font-icon-select-1-watch-2:before{content:"\\e974"}.font-icon-select-1-flash-1:before{content:"\\e975"}.font-icon-select-1-typewriter-1:before{content:"\\e976"}.font-icon-select-1-transport:before{content:"\\e977"}.font-icon-select-1-safety:before{content:"\\e978"}.font-icon-select-1-planning:before{content:"\\e979"}.font-icon-select-1-healthcare:before{content:"\\e97a"}.font-icon-select-1-education:before{content:"\\e97b"}.font-icon-select-1-budget:before{content:"\\e97c"}.font-icon-select-1-data_dashboard:before{content:"\\e97d"}.font-icon-select-1-dataset:before{content:"\\e97e"}.font-icon-select-1-dkan_data_story:before{content:"\\e97f"}.font-icon-select-1-feedback:before{content:"\\e980"}.font-icon-select-1-group:before{content:"\\e981"}.font-icon-select-1-resource:before{content:"\\e982"}.font-icon-select-1-visualization:before{content:"\\e983"}.font-icon-select-1-page:before{content:"\\e984"}
`;
