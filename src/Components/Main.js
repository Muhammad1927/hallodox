import Navigation from "./Navbar";
import logo1 from "./../Assets/logo1.png"
import Kartu from "./Kartu";
import kartu1 from "./../Assets/kartu1.png";
import kartu2 from "./../Assets/kartu2.png";
import kartu3 from "./../Assets/kartu3.png";
import kartu4 from "./../Assets/kartu4.png";
import kartu5 from "./../Assets/kartu5.png";
import body from "./../Assets/body.png";
import bawah1 from "./../Assets/text1.png";
import Bawah from "./Text";
import Layanan from "./Layanan";
import layanan1 from "./../Assets/layanan1.png";
import layanan2 from "./../Assets/layanan2.png";
import layanan3 from "./../Assets/layanan3.png";
import layanan4 from "./../Assets/layanan4.png";
import layanan5 from "./../Assets/layanan5.png";
import layanan6 from "./../Assets/layanan6.png";
import layanan7 from "./../Assets/layanan7.png";
import layanan8 from "./../Assets/layanan8.png";
import layanan9 from "./../Assets/layanan9.png";
import layanan10 from "./../Assets/layanan10.png";
import Penunjang from "./Penunjang";
import penunjang1 from "./../Assets/penunjang1.png";
import penunjang2 from "./../Assets/penunjang2.png";
import penunjang3 from "./../Assets/penunjang3.png";
import penunjang4 from "./../Assets/penunjang4.png";
import penunjang5 from "./../Assets/penunjang5.png";
import penunjang6 from "./../Assets/penunjang6.png";
import penunjang7 from "./../Assets/penunjang7.png";
import penunjang8 from "./../Assets/penunjang8.png";
import penunjang9 from "./../Assets/penunjang9.png";
import penunjang10 from "./../Assets/penunjang10.png";
import Penawaran from "./Penawaran";
import penawaran1 from "./../Assets/penawaran1.png";
import penawaran2 from "./../Assets/penawaran2.png";
import penawaran3 from "./../Assets/penawaran3.png";
import NavbarArl from "./Artikel-nav";
import Btn from "./Button-artikel";
import Crd from "./Artikel-card";
import card1 from "./../Assets/artikel1.png"
import card2 from "./../Assets/artikel2.png"
import card3 from "./../Assets/artikel3.png"
import card4 from "./../Assets/artikel4.png"
import Obat from "./Obat";
import obat1 from "./../Assets/obat1.png";
import obat2 from "./../Assets/obat2.png";
import obat3 from "./../Assets/obat3.png";
import obat4 from "./../Assets/obat4.png";
import obat5 from "./../Assets/obat5.png";
import Btno from "./Btn";



const Main = () => {
    return (
        <div>
            <Navigation image={logo1}/>
            
            <div style={{backgroundImage: `url(${body})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover"}}>
                <div className="container p-0">
                    <div>
                        <h2 style={{fontWeight: "620", marginTop: "40px"}}>Solusi Kesehatan Terlengkap</h2>
                        <p style={{width: "650px", fontWeight: "400"}}>Chat dokter, kunjungi rumah sakit, beli obat, cek lab dan update informasi seputar kesehatan, semua bisa di Halodoc!</p>
                    </div>
                    <div className="row gap-1 mb-5">
                        <div className="col-2">
                            <Kartu image={kartu1}  deskripsi="Chat dengan Dokter"/>
                        </div>
                        <div className="col-2">
                            <Kartu image={kartu2}  deskripsi="Toko Kesehatan" />
                        </div>
                        <div className="col-2">
                            <Kartu image={kartu3}  deskripsi="Buat Janji RS" />
                        </div>
                        <div className="col-2">
                            <Kartu image={kartu4}  deskripsi="Janji Medis" />
                        </div>
                        <div className="col-2">
                            <Kartu image={kartu5}  deskripsi="Layanan Home Lab" />
                        </div>
                        <div className="col-2">
                            <Bawah image={bawah1} title="Sambungkan Asuransimu" text="Dapatkan manfaat asuransi secara langsung untuk layanan Halodoc."/>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                <div className="container">
                    <div>
                        <h1 style={{fontSize:"25px"}}>Layanan Khusus</h1>
                    </div>
                    <div className="row mb-5 m-4" style={{gap: "40px"}}>
                        <div className="row col-1">
                            <Layanan layanan={layanan1} layan="Layanan Bidan"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan2} layan="TES COVID-19"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan3} layan="Perawatan Diabetes"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan4} layan="Kesehatan Jantung"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan5} layan="Vaksinasi COVID-19"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan6} layan="Kesehatan Kulit"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan7} layan="Kesehatan Seksual"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan8} layan="Kesehatan Mental"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan9} layan="Kesehatan Hewan"/>
                        </div>
                        <div className="row col-1">
                            <Layanan layanan={layanan10} layan="Parenting"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div>
                        <h1 style={{fontSize:"25px"}}>Penunjang Kesehatan</h1>
                    </div>
                    <div className="row mb-5 m-4" style={{gap: "40px"}}>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang1} tulis="Cek Stres"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang2} tulis="Kalender Menstruasi"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang3} tulis="Kalkulator BMI"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang4} tulis="Kalender Kehamilan"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang5} tulis="Risiko Jantung"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang6} tulis="Risiko Diabetes"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang7} tulis="Pengingat Obat"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang8} tulis="Donasi"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang9} tulis="Tes Depresi"/>
                        </div>
                        <div className="row col-1">
                            <Penunjang penunjang={penunjang10} tulis="Tes Gangguan Kecemasan"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div>
                        <h1 style={{fontSize:"25px"}}>Penawaran Menarik</h1>
                    </div>
                    <div className="row" style={{gap: "30px" }}>
                            <Penawaran penawaran={penawaran1}/>
                            <Penawaran penawaran={penawaran2}/>
                            <Penawaran penawaran={penawaran3}/>
                    </div>
                </div>

                <div className="container">
                    <NavbarArl/>
                    <div>
                        <Btn/>
                    </div>
                    <div className="row my-4 mb-5" style={{gap: "10px", width: "1500px"}}>
                        <Crd crd={card1} cartu="6 Menu Sehat dan Praktis untuk Makan Sahur" btnk="Makanan Sehat" p="Agar puasa tetap lancar, kamu harus memperhatikan asupan makanan saat sah..."/>
                        <Crd crd={card2} cartu="Apakah Makan Banyak saat Sahur Bisa Menahan Lapar Lebih Lama?" btnk="Puasa" p="Beberapa orang yang percaya bahwa makan banyak saat sahur dapat membuat kenyan..."/>
                        <Crd crd={card3} cartu="Uji Vaksin Sinovac Diklaim Efektif Hingga 80 Persen" btnk="Coronavirus" p="Salah satu vaksin yang dapat digunakan untuk mencegah infeksi COVID-19 adalah..."/>
                        <Crd crd={card4} cartu="Benarkah Remaja Bisa Mengidap Kanker Ovarium? Ini Faktanya" btnk="Kanker Ovarium" p="Kanker ovarium merupakan jenis kanker yang lebih sering menyerang wanita lanjut..."/>
                    </div>
                </div>

                <div className="container">
                    <div className="pb-4">
                        <h1 style={{fontSize:"25px"}}>Obat & Vitamin</h1>
                        <p style={{fontSize: ".875rem", fontWeight: "400", color: "#666"}}>Dapatkan informasi seputar kandungan, aturan, petunjuk penggunaan obat dan vitamin di sini</p>
                    </div>
                    <div className="row pb-3 gap-2 gap-lg-0">
                        <div className="col-12 col-lg-4">
                            <Obat obat={obat1} obt="Obat & Perawatan"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Obat obat={obat2} obt="Vitamin & Suplemen"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Obat obat={obat3} obt="Ibu & Anak"/>
                        </div>
                    </div>
                    <div className="row pb-3 gap-2 gap-lg-0">
                    <div className="col-12 col-lg-4">
                            <Obat obat={obat4} obt="Susu"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Obat obat={obat5} obt="Romadhon"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Btno/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;