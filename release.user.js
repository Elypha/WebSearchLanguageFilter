// ==UserScript==
// @name         Web Search Language Filter
// @namespace    https://github.com/Elypha/WebSearchLanguageFilter
// @version      2024-05-07
// @description  Add a few buttons to your search engine to filter results by language
// @author       Elypha
// @match        https://www.google.com/search?q=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function update_url_param(value) {
        var url = new URL(window.location.href);
        url.searchParams.delete('lr');
        url.searchParams.append('lr', value);
        window.location.href = url.href;
    }

    function add_lang_filter() {
        let tools = document.querySelector('#tools_1');

        // set style
        let tools_bar = tools.parentNode;
        tools_bar.style.width = '800px';

        // add language filter
        const button_div = document.createElement("div");
        button_div.style.height = "45px";
        button_div.style.display = "flex";
        button_div.style.flexDirection = "row";
        button_div.style.alignItems = "center";
        button_div.style.marginLeft = "0.33em";

        // zh-cn
        const zhcn_btn = document.createElement("button");
        zhcn_btn.id = "filter_zhcn";
        zhcn_btn.textContent = "文";
        zhcn_btn.style.backgroundColor = "hsl(0deg 100% 80%)";
        zhcn_btn.style.color = "#fff";
        zhcn_btn.style.border = "solid 1px #eee";
        zhcn_btn.style.borderRadius = "12px";
        zhcn_btn.style.padding = "0 9px";
        zhcn_btn.style.height = "30px";
        zhcn_btn.addEventListener("click", async () => {
            update_url_param("lang_zh-CN");
        });
        button_div.appendChild(zhcn_btn);
        // zh-tw
        const zhtw_btn = document.createElement("button");
        zhtw_btn.id = "filter_zhtw";
        zhtw_btn.textContent = "書";
        zhtw_btn.style.backgroundColor = "hsl(0deg 100% 80%)";
        zhtw_btn.style.color = "#fff";
        zhtw_btn.style.border = "solid 1px #eee";
        zhtw_btn.style.borderRadius = "12px";
        zhtw_btn.style.padding = "0 9px";
        zhtw_btn.style.height = "30px";
        zhtw_btn.addEventListener("click", async () => {
            update_url_param("lang_zh-TW");
        });
        button_div.appendChild(zhtw_btn);
        // ja-jp
        const jajp_btn = document.createElement("button");
        jajp_btn.id = "filter_jajp";
        jajp_btn.textContent = "あ";
        jajp_btn.style.backgroundColor = "hsl(220deg 100% 80%)";
        jajp_btn.style.color = "#fff";
        jajp_btn.style.border = "solid 1px #eee";
        jajp_btn.style.borderRadius = "12px";
        jajp_btn.style.padding = "0 9px";
        jajp_btn.style.height = "30px";
        jajp_btn.addEventListener("click", async () => {
            update_url_param("lang_ja")
        });
        button_div.appendChild(jajp_btn);
        // en-gb
        const engb_btn = document.createElement("button");
        engb_btn.id = "filter_engb";
        engb_btn.textContent = "A";
        engb_btn.style.backgroundColor = "hsl(240deg 100% 80%)";
        engb_btn.style.color = "#fff";
        engb_btn.style.border = "solid 1px #eee";
        engb_btn.style.borderRadius = "12px";
        engb_btn.style.padding = "0 9px";
        engb_btn.style.height = "30px";
        engb_btn.addEventListener("click", async () => {
            update_url_param("lang_en")
        });
        button_div.appendChild(engb_btn);

        const container_div = document.createElement("div");
        container_div.style.display = "flex";
        container_div.style.flexDirection = "row";
        container_div.appendChild(tools);
        container_div.appendChild(button_div);
        tools_bar.appendChild(container_div);
    }

    const observer = new MutationObserver(() => {
        const element = document.querySelector('#tools_1 div');
        if (element) {
            // Stop observing
            observer.disconnect();
            add_lang_filter();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
