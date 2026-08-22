const books = [
  {id:1,title:"Əli və Nino",author:"Qurban Səid",genre:"Azərbaycan ədəbiyyatı",price:12.9,oldPrice:15.9,isbn:"9780099283225",badge:"Çox satılan"},
  {id:2,title:"Balaca Şahzadə",author:"Antuan de Sent-Ekzüperi",genre:"Klassika",price:8.5,isbn:"9780156013987",badge:"Seçilmiş"},
  {id:3,title:"Kimyagər",author:"Paulo Koelyo",genre:"Roman",price:11.9,oldPrice:14.5,isbn:"9780061122415",badge:"Endirim"},
  {id:4,title:"1984",author:"Corc Oruell",genre:"Klassika",price:10.9,isbn:"9780451524935"},
  {id:5,title:"Cinayət və Cəza",author:"Fyodor Dostoyevski",genre:"Klassika",price:16.9,isbn:"9780143058144",badge:"Çox satılan"},
  {id:6,title:"Heyvanıstan",author:"Corc Oruell",genre:"Klassika",price:9.5,isbn:"9780451526342"},
  {id:7,title:"Qürur və Qərəz",author:"Ceyn Ostin",genre:"Roman",price:14.9,isbn:"9780141439518"},
  {id:8,title:"Dune",author:"Frenk Herbert",genre:"Fantastika",price:19.9,oldPrice:23.9,isbn:"9780441172719",badge:"Endirim"},
  {id:9,title:"Harri Potter və Fəlsəfə Daşı",author:"C. K. Roulinq",genre:"Fantastika",price:18.5,isbn:"9780439708180",badge:"Seçilmiş"},
  {id:10,title:"Şerlok Holms",author:"Artur Konan Doyl",genre:"Detektiv",price:13.9,isbn:"9780141034355"},
  {id:11,title:"Atomik Vərdişlər",author:"Ceyms Klir",genre:"Şəxsi inkişaf",price:17.9,isbn:"9780735211292",badge:"Çox satılan"},
  {id:12,title:"Sapiens",author:"Yuval Noah Harari",genre:"Tarix",price:21.9,isbn:"9780062316097"},
  {id:13,title:"Hobbit",author:"C. R. R. Tolkien",genre:"Fantastika",price:17.5,isbn:"9780547928227"},
  {id:14,title:"Farenheyt 451",author:"Rey Bredberi",genre:"Fantastika",price:12.5,isbn:"9781451673319"},
  {id:15,title:"Balaca Qadınlar",author:"Luiza Mey Olkott",genre:"Klassika",price:14.2,isbn:"9780147514011"},
  {id:16,title:"Möhtəşəm Getsbi",author:"F. Skott Fitscerald",genre:"Klassika",price:11.5,oldPrice:13.9,isbn:"9780743273565",badge:"Endirim"},
  {id:17,title:"Bülbülü Öldürmək",author:"Harper Li",genre:"Roman",price:15.9,isbn:"9780061120084"},
  {id:18,title:"Çovdarlıqda Uçurumdan Qoruyan",author:"Cerom Selincer",genre:"Roman",price:13.8,isbn:"9780316769488"},
  {id:19,title:"Yad",author:"Alber Kamü",genre:"Klassika",price:10.5,isbn:"9780679720201"},
  {id:20,title:"Çevrilmə",author:"Frans Kafka",genre:"Klassika",price:8.9,isbn:"9780553213690"},
  {id:21,title:"Düşüncələr",author:"Mark Avreli",genre:"Fəlsəfə",price:13.5,isbn:"9780140449334",badge:"Seçilmiş"},
  {id:22,title:"İnsanın Məna Axtarışı",author:"Viktor Frankl",genre:"Psixologiya",price:14.9,isbn:"9780807014295"},
  {id:23,title:"Sürətli və Yavaş Düşünmə",author:"Daniel Kaneman",genre:"Psixologiya",price:22.5,isbn:"9780374533557"},
  {id:24,title:"Dərin İş",author:"Kal Nyuport",genre:"Şəxsi inkişaf",price:16.5,isbn:"9781455586691"},
  {id:25,title:"Təhsilli",author:"Tara Vestover",genre:"Bioqrafiya",price:18.9,isbn:"9780399590504"},
  {id:26,title:"Stiv Cobs",author:"Volter Ayzekson",genre:"Bioqrafiya",price:24.9,oldPrice:28.9,isbn:"9781451648539",badge:"Endirim"},
  {id:27,title:"Zamanın Qısa Tarixi",author:"Stiven Hokinq",genre:"Elm",price:16.9,isbn:"9780553380163"},
  {id:28,title:"Homo Deus",author:"Yuval Noah Harari",genre:"Tarix",price:22.9,isbn:"9780062464316"},
  {id:29,title:"Səssiz Pasiyent",author:"Aleks Mixaelides",genre:"Detektiv",price:15.5,isbn:"9781250301697",badge:"Çox satılan"},
  {id:30,title:"Şərq Ekspresində Qətl",author:"Aqata Kristi",genre:"Detektiv",price:12.9,isbn:"9780062693662"},
  {id:31,title:"Çərpələng Uçuran",author:"Xalid Hüseyni",genre:"Roman",price:16.5,isbn:"9781594631931"},
  {id:32,title:"Min Möhtəşəm Günəş",author:"Xalid Hüseyni",genre:"Roman",price:17.2,isbn:"9781594483851"},
  {id:33,title:"Norveç Meşəsi",author:"Haruki Murakami",genre:"Roman",price:16.9,isbn:"9780375704024"},
  {id:34,title:"Kitab Oğrusu",author:"Markus Zusak",genre:"Roman",price:18.4,isbn:"9780375842207"},
  {id:35,title:"Gecəyarısı Kitabxanası",author:"Mett Heyq",genre:"Roman",price:15.8,isbn:"9780525559474",badge:"Yeni"},
  {id:36,title:"Gülün Adı",author:"Umberto Eko",genre:"Detektiv",price:20.5,isbn:"9780544176560"}
];

let savedCart = {};
try { savedCart = JSON.parse(localStorage.getItem("mesud-kitab-sebet") || "{}"); } catch { savedCart = {}; }

const state = {
  query: "",
  genre: "Hamısı",
  sort: "popular",
  cart: savedCart
};

const grid = document.querySelector("#book-grid");
const empty = document.querySelector("#empty");
const resultCount = document.querySelector("#result-count");
const cartRoot = document.querySelector("#cart-root");

function money(value) { return `${value.toFixed(2)} ₼`; }

function saveCart() {
  localStorage.setItem("mesud-kitab-sebet", JSON.stringify(state.cart));
  document.querySelector("#cart-count").textContent = Object.values(state.cart).reduce((sum, quantity) => sum + quantity, 0);
}

function changeQuantity(id, amount) {
  state.cart[id] = (state.cart[id] || 0) + amount;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart();
  renderBooks();
  if (document.querySelector(".cart-overlay")) openCart();
}

function filteredBooks() {
  const query = state.query.trim().toLocaleLowerCase("az");
  const result = books.filter(book => (state.genre === "Hamısı" || book.genre === state.genre) && (!query || `${book.title} ${book.author}`.toLocaleLowerCase("az").includes(query)));
  if (state.sort === "price-low") return result.sort((a,b) => a.price - b.price);
  if (state.sort === "price-high") return result.sort((a,b) => b.price - a.price);
  if (state.sort === "name") return result.sort((a,b) => a.title.localeCompare(b.title,"az"));
  return result;
}

function renderBooks() {
  const result = filteredBooks();
  resultCount.textContent = `${result.length} kitab göstərilir`;
  empty.hidden = result.length > 0;
  grid.hidden = result.length === 0;
  grid.innerHTML = result.map(book => `
    <article class="book-card">
      <div class="cover-wrap">
        ${book.badge ? `<span class="badge">${book.badge}</span>` : ""}
        <span class="cover-fallback"><b>${book.title}</b><small>${book.author}</small></span>
        <img src="https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg" alt="${book.title} kitabının üz qabığı" loading="lazy" onerror="this.style.display='none'">
        <button class="quick-add" type="button" data-add="${book.id}">${state.cart[book.id] ? `Səbətdə: ${state.cart[book.id]}` : "Səbətə əlavə et"}</button>
      </div>
      <p>${book.genre}</p><h3>${book.title}</h3><span class="author">${book.author}</span>
      <div class="price"><strong>${money(book.price)}</strong>${book.oldPrice ? `<del>${money(book.oldPrice)}</del>` : ""}</div>
    </article>`).join("");
  grid.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => changeQuantity(Number(button.dataset.add), 1)));
}

function renderGenres() {
  const genres = ["Hamısı", ...new Set(books.map(book => book.genre))];
  const root = document.querySelector("#genres");
  root.innerHTML = genres.map(genre => `<button class="${genre === state.genre ? "active" : ""}" data-genre="${genre}">${genre}</button>`).join("");
  root.querySelectorAll("[data-genre]").forEach(button => button.addEventListener("click", () => { state.genre = button.dataset.genre; renderGenres(); renderBooks(); }));
}

function openCart() {
  const items = books.filter(book => state.cart[book.id]).map(book => ({...book, quantity: state.cart[book.id]}));
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.body.style.overflow = "hidden";
  cartRoot.innerHTML = `<div class="cart-overlay"><aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
    <div class="cart-head"><div><p>SİZİN SEÇİMİNİZ</p><h2 id="cart-title">Səbət</h2></div><button class="close-button" aria-label="Səbəti bağla">×</button></div>
    ${items.length ? `<div class="cart-list">${items.map(item => `<div class="cart-item"><img src="https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg" alt=""><div><h3>${item.title}</h3><p>${item.author}</p><div class="quantity"><button data-minus="${item.id}" aria-label="Bir ədəd azalt">−</button><span>${item.quantity}</span><button data-plus="${item.id}" aria-label="Bir ədəd artır">+</button></div></div><strong>${money(item.price * item.quantity)}</strong></div>`).join("")}</div><div class="cart-summary"><div><span>Cəmi</span><strong>${money(total)}</strong></div><p>Çatdırılma zamanı dəqiqləşdiriləcək.</p><button class="checkout-button">Sifarişi tamamla <span>→</span></button></div>` : `<div class="cart-empty"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg><h3>Səbətiniz boşdur</h3><p>Bəyəndiyiniz kitabları səbətə əlavə edin.</p><button class="continue-button">Kitablara bax</button></div>`}
  </aside></div>`;
  const close = () => { cartRoot.innerHTML = ""; document.body.style.overflow = ""; };
  cartRoot.querySelector(".close-button").addEventListener("click", close);
  cartRoot.querySelector(".cart-overlay").addEventListener("click", event => { if (event.target === event.currentTarget) close(); });
  cartRoot.querySelectorAll("[data-minus]").forEach(button => button.addEventListener("click", () => changeQuantity(Number(button.dataset.minus), -1)));
  cartRoot.querySelectorAll("[data-plus]").forEach(button => button.addEventListener("click", () => changeQuantity(Number(button.dataset.plus), 1)));
  cartRoot.querySelector(".continue-button")?.addEventListener("click", close);
  cartRoot.querySelector(".checkout-button")?.addEventListener("click", () => {
    cartRoot.querySelector(".cart-drawer").innerHTML = `<div class="order-success"><span>✓</span><h3>Sifarişiniz qəbul edildi!</h3><p>Tezliklə sizinlə əlaqə saxlanılacaq.</p><button id="finish-order">Bağla</button></div>`;
    document.querySelector("#finish-order").addEventListener("click", () => { state.cart = {}; saveCart(); renderBooks(); close(); });
  });
}

document.querySelector("#search").addEventListener("input", event => { state.query = event.target.value; renderBooks(); });
document.querySelector("#sort").addEventListener("change", event => { state.sort = event.target.value; renderBooks(); });
document.querySelector("#clear-filter").addEventListener("click", () => { state.query = ""; state.genre = "Hamısı"; document.querySelector("#search").value = ""; renderGenres(); renderBooks(); });
document.querySelector("#open-cart").addEventListener("click", openCart);

saveCart();
renderGenres();
renderBooks();
