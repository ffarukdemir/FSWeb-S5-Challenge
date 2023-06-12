import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardDiv=document.createElement("div");
  cardDiv.classList.add("card");

  const headDiv=document.createElement("div");
  headDiv.classList.add("headline");
  headDiv.textContent=makale.anabaslik;
  cardDiv.appendChild(headDiv);

  const authorDiv=document.createElement("div");
  authorDiv.classList.add("author");
  cardDiv.appendChild(authorDiv);

  const imgDiv=document.createElement("div");
  imgDiv.classList.add("img-container");
  authorDiv.appendChild(imgDiv);

  const imgitself=document.createElement("img");
  imgitself.setAttribute("src", makale.yazarFoto );
  imgDiv.appendChild(imgitself);

  const authorSpan=document.createElement("span");
  authorSpan.textContent=makale.yazarAdi + " tarafından";
  authorDiv.appendChild(authorSpan);
  
  cardDiv.addEventListener("click", ()=>{
    console.log(makale.anabaslik);
  });

return cardDiv;

}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardEkleyici1 = document.querySelector(secici);

  axios.get("http://localhost:5001/api/makaleler")
    .then((response) => {
      const makaleler = response.data.makaleler;

      for (let category in makaleler) {
        makaleler[category].forEach((makale) => {
          const card = Card(makale);
          cardEkleyici1.appendChild(card);
        });
      }
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
};

export { Card, cardEkleyici };

