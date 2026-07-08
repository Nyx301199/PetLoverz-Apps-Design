// --- ELEMEN GLOBAL ---
const mainContent = document.getElementById('main-content');
const header = document.getElementById('dynamic-header');
const navBar = document.getElementById('main-nav');
const loginScreen = document.getElementById('login-screen');
const mainApp = document.getElementById('main-app');

// --- STATE MANAGEMENT ---
let selectedService = { name: "", price: 0 };
let cart = []; // Keranjang belanja untuk Toko Obat
let hotelCart = []; // Keranjang belanja untuk Pet Hotel

// --- LOGIKA LOGIN ---
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('login-error');
    
    if (user === "admin" && pass === "1234") {
        error.innerText = "";
        loginScreen.classList.remove('active');
        mainApp.classList.add('active');
        switchPage('home', document.querySelector('.nav-btn')); 
    } else {
        error.innerText = "Username atau Password salah!";
    }
}

// --- SISTEM NAVIGASI UTAMA ---
function switchPage(page, element) {
    if (element) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }
    header.style.display = 'flex';
    navBar.style.display = 'flex';

    // Reset state keranjang saat pindah halaman utama
    if (['home', 'medis', 'booking', 'komunitas', 'profil'].includes(page)) {
        cart = [];
        hotelCart = [];
        selectedService = { name: "", price: 0 };
    }

    switch(page) {
        case 'home': renderHome(); break;
        case 'medis': renderMedis(); break;
        case 'booking': renderBooking(); break;
        case 'komunitas': renderKomunitas(); break;
        case 'profil': renderProfil(); break;
        case 'checkout': renderCheckout(); break;
        case 'toko': renderToko(); break;
        case 'hotel': renderHotel(); break;
        case 'adopsi': renderAdopsi(); break;
    }
}

// --- RENDER FUNGSI UNTUK HALAMAN DASAR ---

function renderHome() {
    mainContent.innerHTML = `
        <div style="padding:0 20px">
            <div class="section-header" style="padding:0"><span>Profil Hewan</span> <i class="ri-add-box-fill" style="color:#7B61FF; font-size:1.5rem"></i></div>
            <div style="display:flex; gap:15px; overflow-x:auto; padding-bottom:10px;">
                <div style="text-align:center"><img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200" style="width:65px; height:65px; border-radius:20px; border:3px solid #7B61FF"><p>Milo</p></div>
                <div style="text-align:center"><img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200" style="width:65px; height:65px; border-radius:20px;"><p>Luna</p></div>
            </div>
        </div>
        <div class="features-grid">
            <div class="feature-card" onclick="switchPage('medis')"><i class="ri-heart-pulse-fill" style="color:#7B61FF"></i><span>Medis</span></div>
            <div class="feature-card" onclick="switchPage('booking')"><i class="ri-scissors-fill" style="color:#FF9F43"></i><span>Grooming</span></div>
            <div class="feature-card" onclick="switchPage('komunitas')"><i class="ri-group-fill" style="color:#2EC4B6"></i><span>Komunitas</span></div>
            <div class="feature-card" onclick="switchPage('toko')"><i class="ri-capsule-fill" style="color:#FF6B6B"></i><span>Obat</span></div>
            <div class="feature-card" onclick="switchPage('hotel')"><i class="ri-hotel-bed-fill" style="color:#4D96FF"></i><span>Hotel</span></div>
            <div class="feature-card" onclick="switchPage('adopsi')"><i class="ri-mickey-fill" style="color:#6BCB77"></i><span>Adopsi</span></div>
        </div>
        <div class="section-header"><span>Jadwal Mendatang</span></div>
        <div style="background:white; margin:0 20px; padding:15px; border-radius:22px; display:flex; align-items:center; gap:15px;">
            <div style="background:#F0EDFF; color:#7B61FF; padding:10px; border-radius:12px; text-align:center; min-width:50px"><b>25</b><br><small>Mei</small></div>
            <div style="flex:1"><b>Grooming Milo</b><br><small style="color:gray">Klinik Sehat • 10:00 WIB</small></div>
            <button onclick="switchPage('medis')" style="border:none; background:#7B61FF; color:white; padding:8px 15px; border-radius:10px; cursor:pointer; font-weight:700">LIHAT</button>
        </div>
    `;
}

function renderMedis() {
    header.style.display = 'none';
    mainContent.innerHTML = `
        <div style="background:#7B61FF; color:white; padding:40px 20px; border-radius:0 0 40px 40px">
            <div style="display:flex; align-items:center; gap:20px;">
                 <i class="ri-arrow-left-line" onclick="switchPage('home')" style="font-size:1.5rem; cursor:pointer"></i>
                 <h2 style="flex:1; text-align:center; margin-right:30px">Rekam Medis</h2>
            </div>
            <div style="display:flex; align-items:center; gap:15px; margin-top:30px">
                <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200" style="width:70px; height:70px; border-radius:20px; border:3px solid white">
                <div><h3>Milo (Golden)</h3><p>Anjing • 2 Thn 4 Bln</p></div>
            </div>
        </div>
        <div style="padding:20px">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:20px">
                <div style="background:white; padding:20px; border-radius:20px; text-align:center"><small style="color:gray">Berat</small><br><b style="font-size:1.2rem">24.5 kg</b></div>
                <div style="background:white; padding:20px; border-radius:20px; text-align:center"><small style="color:gray">Suhu</small><br><b style="font-size:1.2rem">38.2 °C</b></div>
            </div>
            <h4>Riwayat Vaksinasi</h4>
            <div style="background:white; padding:15px; border-radius:20px; margin-top:10px; display:flex; justify-content:space-between; align-items:center">
                <div><b>Vaksin Rabies</b><br><small>12 Jan 2024 • Klinik Utama</small></div>
                <i class="ri-checkbox-circle-fill" style="color:#2EC4B6; font-size:1.5rem"></i>
            </div>
        </div>
    `;
}

function renderBooking() {
    mainContent.innerHTML = `
        <div style="padding:20px"><h2>Grooming Booking</h2></div>
        <div class="booking-item" onclick="selectSvc(this, 'Basic Grooming', 150000)">
            <div style="background:#F0EDFF; padding:12px; border-radius:12px; margin-right:15px"><i class="ri-water-flash-line" style="color:#7B61FF"></i></div>
            <div><b>Basic Grooming</b><br><small>Mandi & Wangi</small></div>
            <div class="price-tag">Rp150k</div>
        </div>
        <div class="booking-item" onclick="selectSvc(this, 'Full Grooming', 250000)">
            <div style="background:#FFF3E0; padding:12px; border-radius:12px; margin-right:15px"><i class="ri-scissors-cut-line" style="color:#FF9F43"></i></div>
            <div><b>Full Grooming</b><br><small>Cukur & Mandi</small></div>
            <div class="price-tag">Rp250k</div>
        </div>
        <div class="booking-footer">
            <div style="display:flex; justify-content:space-between;"><span>Total:</span><b id="total-price" style="color:#FF9F43">Rp 0</b></div>
            <button id="next-btn" onclick="switchPage('checkout')" style="width:100%; padding:15px; border-radius:15px; border:none; background:#eee; color:#aaa; font-weight:800; cursor:not-allowed;" disabled>LANJUT KE JADWAL</button>
        </div>
    `;
}

function selectSvc(el, name, price) {
    document.querySelectorAll('.booking-item').forEach(i => i.classList.remove('selected'));
    el.classList.add('selected');
    selectedService = { name, price };
    document.getElementById('total-price').innerText = "Rp " + price.toLocaleString('id-ID');
    const btn = document.getElementById('next-btn');
    btn.disabled = false; btn.style.background = "#FF9F43"; btn.style.color = "white"; btn.style.cursor = "pointer";
}

function renderCheckout() {
    header.style.display = 'none';
    navBar.style.display = 'none';
    mainContent.innerHTML = `
        <div style="padding:40px 20px">
            <i class="ri-arrow-left-line" onclick="switchPage('booking')" style="font-size:1.5rem; cursor:pointer"></i>
            <h2 style="margin: 20px 0">Konfirmasi Pesanan</h2>
            <div style="background:white; padding:20px; border-radius:25px">
                <p style="color:gray">Layanan:</p><h3>${selectedService.name}</h3>
                <hr style="margin:15px 0; border:0; border-top:1px solid #eee;">
                <div style="display:flex; justify-content:space-between; font-size:1.2rem"><b>Total Bayar</b><b style="color:#FF9F43">Rp ${selectedService.price.toLocaleString('id-ID')}</b></div>
            </div>
            <button onclick="alert('Pembayaran Berhasil!'); switchPage('home')" style="width:100%; padding:18px; background:#7B61FF; color:white; border:none; border-radius:20px; font-weight:800; margin-top:30px; cursor:pointer">BAYAR SEKARANG</button>
        </div>
    `;
}

// --- LOGIKA KERANJANG TOKO OBAT ---
function addToCart(btn, name, price) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        btn.innerText = 'Pilih';
        btn.classList.remove('selected');
    } else {
        cart.push({ name, price });
        btn.innerText = 'Terpilih';
        btn.classList.add('selected');
    }
    updateCartView();
}

function updateCartView() {
    const footer = document.getElementById('toko-footer');
    if (cart.length === 0) {
        footer.innerHTML = ''; return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    footer.innerHTML = `
        <div style="display:flex; justify-content:space-between;"><span>Total (${cart.length} item):</span><b style="color:var(--purple)">Rp ${total.toLocaleString('id-ID')}</b></div>
        <button onclick="alert('Checkout untuk ${cart.length} item dengan total Rp ${total.toLocaleString('id-ID')} berhasil!')" style="width:100%; padding:15px; border-radius:15px; border:none; background:var(--purple); color:white; font-weight:800; cursor:pointer">CHECKOUT</button>
    `;
}

function renderToko() {
    header.style.display = 'none';
    mainContent.innerHTML = `
        <div style="padding:40px 20px 20px;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <i class="ri-arrow-left-line" onclick="switchPage('home')" style="font-size:1.5rem; cursor:pointer"></i>
                <h2 style="flex:1; text-align:center; margin-right:30px;">Toko Obat & Vitamin</h2>
            </div>
        </div>
        <div class="product-item">
            <div>
                <b>Vitamin Bulu Anjing</b><small style="color:gray; display:block;">Meningkatkan kilau & kesehatan bulu</small>
                <b style="color:var(--purple);">Rp 75.000</b>
            </div>
            <button class="action-btn" onclick="addToCart(this, 'Vitamin Bulu Anjing', 75000)">Pilih</button>
        </div>
        <div class="product-item">
            <div>
                <b>Obat Cacing Kucing</b><small style="color:gray; display:block;">Untuk semua jenis cacing</small>
                <b style="color:var(--purple);">Rp 35.000</b>
            </div>
            <button class="action-btn" onclick="addToCart(this, 'Obat Cacing Kucing', 35000)">Pilih</button>
        </div>
        <div class="product-item">
            <div>
                <b>Mainan Gigit Anjing</b><small style="color:gray; display:block;">Tahan lama dan aman</small>
                <b style="color:var(--purple);">Rp 55.000</b>
            </div>
            <button class="action-btn" onclick="addToCart(this, 'Mainan Gigit Anjing', 55000)">Pilih</button>
        </div>
        <div id="toko-footer" class="booking-footer"></div>
    `;
    updateCartView(); // Panggil untuk memastikan state keranjang tergambar
}

// --- LOGIKA KERANJANG PET HOTEL ---
function addHotelToCart(btn, name, price) {
    const itemIndex = hotelCart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        hotelCart.splice(itemIndex, 1);
        btn.innerText = 'Pilih';
        btn.classList.remove('selected');
    } else {
        hotelCart.push({ name, price });
        btn.innerText = 'Terpilih';
        btn.classList.add('selected');
    }
    updateHotelCartView();
}

function updateHotelCartView() {
    const footer = document.getElementById('hotel-footer');
    if (hotelCart.length === 0) {
        footer.innerHTML = '<div style="text-align:center; color:gray; width:100%;">Pilih satu atau lebih kamar untuk melanjutkan</div>';
        return;
    }
    const total = hotelCart.reduce((sum, item) => sum + item.price, 0);
    const itemsBooked = hotelCart.map(item => item.name).join(', ');
    footer.innerHTML = `
        <div style="display:flex; justify-content:space-between;"><span>Total (${hotelCart.length} malam):</span><b style="color:var(--purple)">Rp ${total.toLocaleString('id-ID')}</b></div>
        <button onclick="alert('Booking untuk: ${itemsBooked} berhasil!')" style="width:100%; padding:15px; border-radius:15px; border:none; background:var(--purple); color:white; font-weight:800; cursor:pointer">BOOKING SEKARANG</button>
    `;
}

// --- RENDER HALAMAN HOTEL ---
function renderHotel() {
    header.style.display = 'none';
    mainContent.innerHTML = `
        <div style="padding:40px 20px 20px;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <i class="ri-arrow-left-line" onclick="switchPage('home')" style="font-size:1.5rem; cursor:pointer"></i>
                <h2 style="flex:1; text-align:center; margin-right:30px;">Pet Hotel</h2>
            </div>
        </div>
        <div class="product-item">
            <div>
                <b>Kamar Standard</b><small style="color:gray; display:block;">Kipas angin, kandang luas</small>
                <b style="color:var(--purple);">Rp 100.000/malam</b>
            </div>
            <button class="action-btn" onclick="addHotelToCart(this, 'Kamar Standard', 100000)">Pilih</button>
        </div>
        <div class="product-item">
            <div>
                <b>Kamar Deluxe</b><small style="color:gray; display:block;">AC, CCTV, area bermain</small>
                <b style="color:var(--purple);">Rp 180.000/malam</b>
            </div>
            <button class="action-btn" onclick="addHotelToCart(this, 'Kamar Deluxe', 180000)">Pilih</button>
        </div>
        <div id="hotel-footer" class="booking-footer"></div>
    `;
    updateHotelCartView(); // Panggil untuk memastikan state keranjang tergambar
}

function renderKomunitas() {
    mainContent.innerHTML = `
        <div style="padding:20px"><h2>Komunitas Anabul</h2></div>
        <div class="post-card">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px">
                <img src="https://i.pravatar.cc/100?img=12" style="width:35px; border-radius:50%">
                <div><b>Budi & Kiki</b><br><small>Baru saja</small></div>
            </div>
            <p>Milo senang sekali setelah grooming!</p>
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500" class="post-img">
        </div>
        <div class="post-card">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px">
                <img src="https://i.pravatar.cc/100?img=33" style="width:35px; border-radius:50%">
                <div><b>Siti & Oyen</b><br><small>2 jam yang lalu</small></div>
            </div>
            <p>Ada yang tahu cara mengatasi kucing yang suka pilih-pilih makanan? Oyen lagi mogok makan nih 😿</p>
            <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500" class="post-img">
        </div>
    `;
}

function renderAdopsi() {
    mainContent.innerHTML = `
        <div style="padding:20px"><h2>Adopsi Sahabat Baru</h2></div>
        <div class="post-card">
            <img src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=500" class="post-img">
            <div style="padding: 0 10px;">
                <h3 style="margin-bottom:5px;">Oyen</h3>
                <p style="font-size:0.9rem; color:gray;">Kucing domestik, 8 bulan, sangat aktif dan suka bermain. Sudah vaksin dan steril.</p>
                <button class="action-btn" style="width:100%; margin-top:15px;">Hubungi Pemilik</button>
            </div>
        </div>
        <div class="post-card">
            <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=500" class="post-img">
            <div style="padding: 0 10px;">
                <h3 style="margin-bottom:5px;">Choco</h3>
                <p style="font-size:0.9rem; color:gray;">Anjing Labrador, 1.5 tahun, ramah dengan anak-anak dan anjing lain. Perlu halaman luas.</p>
                <button class="action-btn" style="width:100%; margin-top:15px;">Hubungi Pemilik</button>
            </div>
        </div>
    `;
}

function renderProfil() {
    header.style.display = 'none';
    mainContent.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:white; border-radius:0 0 40px 40px">
            <img src="https://i.pravatar.cc/100?img=10" style="width:100px; border-radius:50%; border:4px solid #7B61FF">
            <h2 style="margin-top:15px">Nadin Amizah</h2>
            <p style="color:gray">nadin.amizah@petmail.com</p>
        </div>
        <div class="p-item" style="margin-top:20px"><i class="ri-user-settings-line"></i> Pengaturan Akun</div>
        <div class="p-item" style="color:#FF6B6B" onclick="location.reload()"><i class="ri-logout-box-r-line"></i> Keluar</div>
    `;
}