function About() {
    return ( 
 <>
 <section className="About">
            <div className="history">
                <h1 style={{
                    font: "20px",
                    color:"black"
                }}>Brief History of the Catholic Diocese of Malakal</h1>

                <ul>
                    <li>1933: Established as the Mission Sui Iuris of Kodok<br/></li>
                    <li>1938: Promoted to Apostolic Prefecture of Kodok<br/></li>
                    <li>1949: Renamed Apostolic Prefecture of Malaka<br/></li>
                    <li>1974: Elevated to Diocese of Malakal<br/></li>
                    <li>2024: Lost territory to the new Diocese of Bentiu<br/></li>
                </ul>
                <p>For over 90 years, missionaries and local clergy have served
                 the people of this region.The diocese has survived multiple civil wars,
                forced displacements, and the destruction of church infrastructure. 
                Today, under Bishop Stephen Nyodholeadership, we are rebuilding.</p>
            </div>

            <div className="statistics">
                <ul style={{
                    backgroundColor:"whitesmoke",
                    color:"black",
                    font:"15px"
                }}>
                    <li>Area: 200,164 square kilometers</li>
                    <li>Total Population: 2,972,114<br/></li>
                    <li>Catholic Population: 920,537 (31 percent)<br/></li>
                    <li>Parishes: 14<br/></li>
                    <li>Diocesan Priests: 14<br/></li>
                    <li>Religious Priests: 9<br/></li>
                    <li>Total Priests: 23<br/></li>
                    <li>Religious Sisters: 3<br/></li>
                    <li>Seminarians: 13<br/></li>
                    <li>Cathedral: St. Joseph Cathedral, Malakal<br/></li>
                    <li>Patron Saint: St. Joseph<br/></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default About