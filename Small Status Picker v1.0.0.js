// ==UserScript==
// @name Small Status Picker
// @version 1.0.0
// @author JustTheo
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include https://discord.com/*
// @description More Minimal Status Picker
// ==/UserScript==

(function() {
let css = `
/* --------------------------- 🟢 STATUS PICKER --------------------------- */
.full-motion .animatorTop-2Y7x2r.didRender-33z1u8 { transform: unset !important; transition: opacity 0.15s linear 0s;}

#status-picker {
    position: fixed;
    bottom: 8px; left: 77px;
    width: 230px;
    background: var(--background-tertiary);
    border-radius: 5px;
}
.panels-j1Uci_ > .container-3baos1 .title-eS5yk3 { font-size: 18px;}

/* Status grid */
#status-picker .scroller-3BxosC { display: grid; grid-template-columns: auto auto auto auto; margin: 20px 4px 4px 4px;}

/* Status */
.item-1tOPte:not(#status-picker-custom-status) > .statusItem-33LqPf { grid-template-columns: 100% 1fr;}
#status-picker .item-1tOPte { border-radius: 5px; margin: 3px; transition: 0.2s;}
#status-picker .item-1tOPte.focused-3afm-j { transition: 0.2s;}
.mask-1qbNWk.icon-1IxfJ2 { height: 18px; width: 18px; margin: auto;}
.customEmoji-2_2FwB { width: 20px; height: 20px;}
.customText-tY5LJn { font-size: 15px; }
#status-picker-online.colorDefault-2K3EoJ, #status-picker-online.colorDefault-2K3EoJ.focused-3afm-j { color: #43B581;}
#status-picker-online.focused-3afm-j { background-color: #43b58244;}
#status-picker-idle.colorDefault-2K3EoJ, #status-picker-idle.colorDefault-2K3EoJ.focused-3afm-j { color: #FAA61A;}
#status-picker-idle.focused-3afm-j { background-color: #faa81a42;}
#status-picker-dnd.colorDefault-2K3EoJ, #status-picker-dnd.colorDefault-2K3EoJ.focused-3afm-j { color: #F04747;}
#status-picker-dnd.focused-3afm-j { background-color: #b83a3c3d;}
#status-picker-invisible.colorDefault-2K3EoJ, #status-picker-invisible.colorDefault-2K3EoJ.focused-3afm-j { color: #747F8D;}
#status-picker-invisible.focused-3afm-j { background-color: #747f8d3d;}
#status-picker-custom-status.focused-3afm-j { background-color: #ffcd4d3d;}
.customEmojiPlaceholder-37iZ_j { background-image: url("https://nyri4.github.io/Comfy/assets/emoji.png");}

/* Custom status */
#status-picker-custom-status { grid-column: 1/5;}
#status-picker-custom-status .status-1fhblQ { display: block;}

/* Hiding text and separators */
.separator-2I32lJ, .status-1fhblQ, .description-2L932D { display: none;}

/* Game Activity Toggle */
#status-picker [aria-label="Hide Game Activity"]:after,
#status-picker [aria-label="Show Game Activity"]:after { content: "Not supported in this area";}

/* Support plugin CustomStatusPresets */
#status-picker .submenuContainer-2gbm7M .item-1tOPte { border-radius: 5px; margin: 0 3px;}
#status-picker .submenuContainer-2gbm7M { grid-column: 1/5; }

/* Custom status modal */
.select-2fjwPw, .popout-VcNcHB { border: none;}
.select-2fjwPw.open-kZ53_U, .popout-VcNcHB { background-color: var(--background-secondary-alt); transition: 0.15s;}
.theme-dark .footer-2gL1pp { background: var(--background-tertiary);}


.
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();