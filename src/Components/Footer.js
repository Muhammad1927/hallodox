import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logof from "./../Assets/halodoc-footer-logo.png"
import ps from "./../Assets/google-play-badge-us.png";
import as from "./../Assets/app-store-badge-us-white.png";
import btnf from "./../Assets/download-removebg-preview.png"



const Footer= (props) => {
    return (
      <MDBFooter  className='' style={{backgroundColor:"#46568E", color:"white", paddingTop:"5px"}}>
        <MDBContainer className='text-center text-md-start mt-4 mb-4'>
          <MDBRow className='mt-0 mb-5'  style={{}}>

           
              <img  src={logof} style={{width: '190px'}}></img>

          </MDBRow>
          <MDBRow>
          <MDBCol  lg="0" xl="4"className='d-flex' style={{flexDirection: "column"}}>
              <h6 className='fw-bold'>Site Map</h6>
              <div className='row' style={{}} >
                <div className=' col gap-2 d-flex flex-column' style={{fontWeight: "400", fontSize: ".875rem"}}>
                  <div>
                    <a href="#!" class="text-reset">FAQ</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Blog</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Syarat & Ketentuan</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Kebijakan Privasi</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Promo</a>
                  </div>
                </div>

                <div className=' col gap-2 d-flex flex-column' style={{fontWeight: "400", fontSize: ".875rem"}}>
                  <div>
                    <a href="#!" class="text-reset">Karir</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Security</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Media</a>
                  </div>
                  <div>
                    <a href="#!" class="text-reset">Corporate Partnership</a>
                  </div>
                </div>
               
              </div>
          
            </MDBCol>
           
            <MDBCol  lg="3" xl="4" >
              <p style={{fontWeight: "600", fontSize: "1rem", lineHeight: "115%"}}>
                Layanan Pengaduan Konsumen
              </p>
                

              <p style={{fontSize: ".875rem", lineHeight: "115%"}}>
                <strong>PT Media Dokter Investama</strong>
                <br></br>
                Jl. H.R. Rasuna Said Kav B32-33, Jakarta Selatan
                help@halodoc.com / 021-5095-9900
              </p>
              <p style={{fontSize: ".875rem", lineHeight: "115%"}}>
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                Kementerian Perdagangan Republik Indonesia
                0853 1111 1010 (WhatsApp)
              </p>
            </MDBCol>

           
           

            <MDBCol md="" lg="3" xl="3" className='mx-auto mb-md-0 mb-2'>
              <h6 style={{fontWeight: "600", fontSize: "16px"}}>Download App di</h6>
              <div className='row' style={{marginBottom: "20px"}}>
                <img src={ps} style={{width:"45%"}}></img>
                <img src={as} style={{width:"45%"}}></img>
              </div>

              <h6 style={{fontWeight: "600", fontSize: "16px"}}>Apakah kamu Dokter?</h6>
              <div className="cac"style={{display:"flex", flexDirection:"row", alignItems:"center", borderRadius:"5px", backgroundColor:  "#AC003C", color: "#FFFFFF", width: "120px", height: "40px", justifyContent: "center"}}>
                  <img src={btnf} style={{ width: "20%"}}></img>
                  <h1 className='h1' style={{fontSize: "1rem", fontWeight: "600", marginLeft: "px", marginTop: "6px"}}>DAFTAR</h1>
              </div>
            </MDBCol>
          </MDBRow>
            
        </MDBContainer>


      <div className='text-center p-2' style={{ display: "flex", backgroundColor: 'rgb(53,64,107)', justifyContent: "space-between", color: "#fff", fontWeight: "600", fontSize: "1rem"}}>
        <div style={{marginLeft: "80px"}}>
          © HALODOC, 2023. ALL RIGHTS RESERVED
        </div>

        <div style={{display: "flex", gap: "10px", fontWeight: "600", fontSize: "1rem", marginRight: "80px"}}>
            <p>
                Follow kami di:
            </p>
            <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="youtube" />
          </a>
        </div>
        </div>
        
      </div>
    </MDBFooter>
    )  
}

export default Footer;