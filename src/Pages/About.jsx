import stv from '../assets/stephen.webp';
import LT from '../assets/liturgy2.jpeg';
import LT1 from '../assets/liturgy4.jpeg';
import LT2 from '../assets/liturgy3.jpeg';

function About() {
    return ( 
 <>

 <section className="maelezo">
         <div className="text-side">
         <h2 style={{
          color:"black",
          fontSize:"20px",
          margin:"10px"
                   }}>Welcome Message from  <br />Rt Rev. Bishop Stephen Nyodho Ador Majwok</h2>
        <p style={{fontSize:"20px", margin:"10px"}}>Peace be with you. As Bishop of the Catholic Diocese of Malakal,I extend a warm <br />
        welcome to all who visit our diocese,whether in person or through this digital platform. <br />
        Our diocese is situated in one of the most challenging yethope-filled regions of South <br />
        Sudan. For nearly a century,the Catholic faith has taken root here, growing through wars, <br />
        floods, and displacement.Today, we stand as a people of reconciliation, committed to building
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
                <h2 style={{
                    font: "20px",
                    color:"black",
                    
                    
                }}>Brief History of the Catholic Diocese of Malakal</h2>

                <ul
                style={{
                    listStyle:"none",
                    margin:"10px",
                    fontSize:"20px"
                    
                }}>
                    <li>1933: Established as the Mission Sui Iuris of Kodok</li>
                    <li>1938: Promoted to Apostolic Prefecture of Kodok</li>
                    <li>1949: Renamed Apostolic Prefecture of Malaka</li>
                    <li>1974: Elevated to Diocese of Malakal</li>
                    <li>2024: Lost territory to the new Diocese of Bentiu</li>
                </ul>
            </div>
                <div className='BBB'>
                <p>For over 90 years, missionaries and local clergy have served
                 the people of this region.<br />The diocese has survived multiple civil wars,
                forced displacements, and the destruction <br />of church infrastructure. 
                Today, under Bishop Stephen Nyodholeadership, we are rebuilding.</p>
            </div>
           
              

            <div   style={{
                    listStyle:"none",
                    borderRadius:"20px",
                }}
                   className="statistics">
                <h2 style={{fontSize:"30px"}}>Diocesan Statistics at a Glance</h2>
                <ul  style={{
                    listStyle:"none",
                    margin:"10px"
                    
                }}>
              
                
                    <li>Area: 200,164 square kilometers</li>
                    <li>Total Population: 2,972,114</li>
                    <li>Catholic Population: 920,537 (31 percent)</li>
                    <li>Parishes: 14</li>
                    <li>Diocesan Priests: 14</li>
                    <li>Religious Priests: 9</li>
                    <li>Total Priests: 23</li>
                    <li>Religious Sisters: 3</li>
                    <li>Seminarians: 13</li>
                    <li>Cathedral: St. Joseph Cathedral, Malakal</li>
                    <li>Patron Saint: St. Joseph</li>
                </ul>
            </div>
        </section>

        <section className='Recent'>
            <div className='Events'>
                <img style={{width:"420px",
                     height:"300px", 
                     borderRadius:"20px"}} 
                     src={LT} alt="my image" />
            </div>
            <div>
               <img style={{width:"420px", 
                height:"300px",
                borderRadius:"20px"}}
                src={LT1} alt="my image" />   
            </div>
            <div>
             <img style={{width:"420px", 
                height:"300px",
                borderRadius:"20px"}}
                src={LT2} alt="my image" />    
            </div>

        </section>
        </>
    );
}

export default About