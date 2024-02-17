const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word){
    try {
            
      infoTextEl.style.display = "block";  // to again work as below we did disp:none
      meaningContainerEl.style.display = "none";
      infoTextEl.innerHTML = `seaching the meaning of "${word}"`;
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const result = await fetch(url).then((res) => res.json());
      
      if (result.title) {
        titleEl.innerText = word;
        infoTextEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        meaningEl.innerText = "N/A"
        audioEl.style.display = "none"
      }

      else{

      infoTextEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      audioEl.style.display = "inline-flex"
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;

      }
      
    } catch (error) {
    //  console.log(error);    
    infoTextEl.innerText = `an error happend try again later`;
    }
   
}

inputEl.addEventListener('keyup', (e) => {
//    console.log(e.target.value); for all values
//    console.log(e.key); // for every singe value individualy
     
 
     if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
})