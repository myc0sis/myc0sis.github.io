const t=document.getElementById("inaturalist-data");if(t){const s=t.dataset.perPage||"5",n=t.dataset.taxonId;async function o(){try{let e=`https://api.inaturalist.org/v1/observations?per_page=${s}`;n&&(e+=`&taxon_id=${n}`);const i=await(await fetch(e)).json();t.innerHTML="",i.results.forEach(a=>{const r=document.createElement("div");r.innerHTML=`
            <h3>${a.species_guess}</h3>
            <p>Observed on: ${new Date(a.observed_on).toLocaleDateString()}</p>
            <img src="${a.photos[0]?.url||""}" alt="${a.species_guess}" width="200">
          `,t.appendChild(r)})}catch(e){console.error("Error fetching iNaturalist data:",e),t.innerHTML="Error loading iNaturalist data."}}o()}else console.error("Could not find container element for iNaturalist data");
