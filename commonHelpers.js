import{i as p,S as m}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function u(a){return a.hits.map(e=>`<div class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
                  <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              </a>
              <div class="gallery-item-info">
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                      </span>    
                  </p>
                  <p class="gallery-item-info-par">
                      <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                      </span>    
                  </p>
              </div>
          </div>`).join("")}const l=document.querySelector(".loader"),f="43440045-443c1624e1412379947e54b30",d="https://pixabay.com/api/";function y(a){const o=`${d}?${{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}`;return l.style.display="block",fetch(o).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>(l.style.display="none",t.hits.length===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark"}),t)).catch(t=>{console.log(t)})}const g=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),i=document.querySelector(".form"),h=document.querySelector(".gallery");let c="";i.addEventListener("submit",b);function b(a){a.preventDefault(),h.innerHTML="",c=i.elements.searchQuery.value.trim(),y(c).then(e=>{const o=u(e);container.insertAdjacentHTML("beforeend",o),g.refresh()}).catch(e=>{console.error("Error:",e)}),i.reset()}
//# sourceMappingURL=commonHelpers.js.map
