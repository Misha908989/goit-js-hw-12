import{a as S,S as q,i as a}from"./assets/vendor-xpOxgMII.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="54476211-a145d35bc2dca18e6906896b1",I="https://pixabay.com/api/";async function p(s,t=1){const o={key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await S.get(I,{params:o})).data}const m=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:l,comments:b,downloads:w})=>`<li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <span class="info-label">Likes</span>
                <span class="info-value">${r}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Views</span>
                <span class="info-value">${l}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Comments</span>
                <span class="info-value">${b}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Downloads</span>
                <span class="info-value">${w}</span>
              </div>
            </div>
          </a>
        </li>`).join("");m.insertAdjacentHTML("beforeend",t),B.refresh()}function M(){m.innerHTML=""}function v(){g.classList.remove("is-hidden")}function c(){g.classList.add("is-hidden")}function R(){h.classList.remove("is-hidden")}function d(){h.classList.add("is-hidden")}const L=document.querySelector(".form"),$=L.querySelector('input[name="searchQuery"]'),E=document.querySelector(".load-more-btn");let u="",i=1,f=0;L.addEventListener("submit",O);E.addEventListener("click",H);async function O(s){s.preventDefault();const t=$.value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}u=t,i=1,M(),d(),v();try{const o=await p(u,i);if(c(),o.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f=o.totalHits,y(o.hits),i*15<f?R():(d(),o.hits.length>0&&a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){c(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}}async function H(){i+=1,v();try{const s=await p(u,i);c(),y(s.hits);const t=document.querySelector(".gallery-item");if(t){const n=t.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}i*15>=f&&(d(),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(s){c(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(s)}}
//# sourceMappingURL=index.js.map
