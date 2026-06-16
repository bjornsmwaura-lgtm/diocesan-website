  import { Link } from "react-router-dom";
  import './Header.css';
  import "bootstrap-icons/font/bootstrap-icons";

function Header(){
    return(
         <>
        <section className="bor">
            
           <div className="contact">
             <i className="bi bi-envelope-at-fill"></i>
                <h4 style={{alignItems:'center', font:'10px', display: 'flex', justifyContent: 'center' }}>malakal@gmail.com</h4>
             
             <i className="bi bi-telephone"><h6></h6></i>
                 <h4 style={{alignItems:'center', font:'10px', display: 'flex', justifyContent: 'center' }}>+211568456987</h4>
             </div>
             <div className="icn">
             <i className="bi bi-whatsapp"></i>
             <i className="bi bi-facebook"></i>
             <i className="bi bi-twitter"></i>
             <i className="bi bi-instagram"></i> 
             <i className="bi bi-youtube"></i> 
                            
          </div>


        </section>
        <section className="picha">
        
            <div>
                    <img style={{height:"120px", width:"120px", borderRadius:"100%"}} src="logo.png" alt="image logo"/>
                </div>
                <div className="h1">
                     <h1>CATHOLIC DIOCESE OF MALAKAL</h1>
                </div>
                    <nav style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"50px",}}>
                    <Link style={{textDecoration:"none"}} to={"/"}>Home</Link>
                    <Link style={{textDecoration:"none"}} to={"/About"}>About</Link>
                    <Link style={{textDecoration:"none"}} to={"/"}>Curia</Link>
                    <Link style={{textDecoration:"none"}} to={"/"}>Deaneries</Link>
                    <Link style={{textDecoration:"none"}} to={"/"}>Events</Link>
                    <Link style={{textDecoration:"none"}} to={"/"}>Contact</Link>
                   
                </nav>
                </section>
            
          
        

            </>
        
    );
}

       

    

export default Header