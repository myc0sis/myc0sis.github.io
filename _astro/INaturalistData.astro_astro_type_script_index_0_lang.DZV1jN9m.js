const e=document.getElementById("inaturalist-data"),s=document.getElementById("search-input"),l=document.getElementById("search-button");if(e&&s&&l){const u=e.dataset.perPage||"5",c=e.dataset.taxonId,p=e.dataset.searchType||"general";async function r(a=""){try{let t=`https://api.inaturalist.org/v1/observations?per_page=${u}`;c&&(t+=`&taxon_id=${c}`),a&&(p==="species"?t+=`&taxon_name=${encodeURIComponent(a)}`:t+=`&q=${encodeURIComponent(a)}`);const d=await(await fetch(t)).json();if(e.innerHTML="",d.results.length===0){e.innerHTML="No results found.";return}const o=document.createElement("div");o.className="observation-grid",d.results.forEach(n=>{const i=document.createElement("div");i.className="observation-item",i.innerHTML=`
            <a href="${n.photos[0]?.large_url||"#"}" target="_blank">
              <img src="${n.photos[0]?.url||""}" alt="${n.species_guess}" loading="lazy">
            </a>
            <div class="observation-info">
              <h3>${n.species_guess}</h3>
              <p>Observed on: ${new Date(n.observed_on).toLocaleDateString()}</p>
            </div>
          `,o.appendChild(i)}),e.appendChild(o)}catch(t){console.error("Error fetching iNaturalist data:",t),e.innerHTML="Error loading iNaturalist data."}}l.addEventListener("click",()=>{r(s.value)}),s.addEventListener("keypress",a=>{a.key==="Enter"&&r(s.value)}),r()}else console.error("Could not find necessary elements for iNaturalist data");
