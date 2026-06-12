import john from '../assets/chruch2.jpeg';
import stev from '../assets/bpstephen.webp';
import stv from '../assets/stephen.webp';
import jm from '../assets/map2.webp';
import bor from '../assets/liturgy3.jpeg';
import nm from '../assets/health.jpeg';
function Home(){
   return(
      <>
        
        <div style={{
         width: "100%",
         height: "70vh",
         backgroundImage: `url(${john})`,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         color: "white",
        backgroundSize:"cover",
        backgroundPosition:"center"
        }}>
         <h1>WELCOME TO CATHOLIC DIOCESE OF MALAKAL</h1>
         </div>

           <h1 style={{
            width:"100%",
            textAlign:"center",
            marginTop:"20px"
           }}>About Malakal</h1>
         
<section className="maelezo">
         <div className="text-side">
         <h2 style={{
          color:"black",
          fontSize:"30px",

         }}>Welcome Message from  <br />Rt Rev. Bishop Stephen Nyodho Ador Majwok</h2>
        <p>Peace be with you. As Bishop of the Catholic Diocese of Malakal,I extend a warm <br />
        welcome to all who visit our diocese,whether in person or through this digital platform. <br />
        Our diocese is situated in one of the most challenging yethope-filled regions of South <br />
        Sudan. For nearly a century,the Catholic faith has taken root here, growing through wars, <br />
        floods, and displacement.Today, we stand as a people of reconciliation, committed to building<br />
         a future of peace,education, healthcare, and spiritual renewal. May God bless you.</p>
  
   <a style={{marginTop: 30, display: 'flex', }} href="https://www.facebook.com/profile.php?id=61566109917876" >Learn More About our Diocese</a>
  </div>
      <div className="split-left">
      <img src={stv} alt="my image" />
        <h2>Rt Rev. Bishop Stephen Nyodho</h2>
        <p>Bishop Catholic Diocese of Malakal</p>
      </div>
</section>


<section className="latest">

  <div className="jm">
<img src={jm} alt="my image" />
<h3>Who we are </h3>
<p style={{
  width:"300px",
  display:"block"
}}>
The Catholic Diocese of Malakal is a Latin Rite diocese within the Metropolitan Archdiocese of Juba.We serve the Catholic faithful 
across an expansive territory of 200,164 square kilometers
in northeastern South Sudan,including the former Upper Nile State and surrounding areas.
Our diocese is home to approximately 920,537 Catholics—nearly one-third of the
total population of 2.97 million people in our territory.
</p>
</div>

<div class="jm">
<img src={bor} alt="my image" />
<h3>OUR MISSION</h3>
<p style={{
  width:"300px",
  display:"block"
}}>
To proclaim the Gospel of Jesus Christ, administer the sacraments,
promote integral human development,and work tirelessly for peace,
justice, and reconciliation in a region marked by conflict and natural disaster.

</p>
</div>

<div class="jm">
<img src={nm} alt="my image" />
<h3>OUR VISION</h3>
<p style={{
  width:"300px",
  display:"block"
}}>
A thriving Catholic community where every person has access to quality education,
healthcare, and the opportunity to live in dignity and peace.

</p>
</div>

</section>

    </>
  )
}
   


  
export default Home