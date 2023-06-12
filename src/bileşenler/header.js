const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>

const divEl=document.createElement("div");
divEl.classList.add("header");


const spanEl=document.createElement("span");
spanEl.classList.add("date");
spanEl.textContent=tarih;
divEl.appendChild(spanEl);

const  h1El= document.createElement("h1");
h1El.textContent=baslik;
divEl.appendChild(h1El);

const span2El=document.createElement("span");
span2El.classList.add("temp");
span2El.textContent=yazi;
divEl.appendChild(span2El);

return divEl;


  
}


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
 
    const seciliElement = document.querySelector(secici);
    
    const header = Header("Teknoloji Zamanı", "10 Haziran 2023", "Güncel Teknoloji Haberleri");
    seciliElement.appendChild(header);

    

}

export { Header, headerEkleyici }
