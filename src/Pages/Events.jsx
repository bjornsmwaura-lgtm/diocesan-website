function Events(){
    return(
        <>
        <h2 style={{textAlign:"center"}}>The Upcoming Events</h2>
        <section className="First">
            <div className="jan">
                <h2>January</h2>
            </div>
            <div className="jan">
                <h2>Febuaury</h2>
            </div>
            <div className="jan">
                <h2>March</h2>
            </div>
            <div className="jan">
                <h2>April</h2>
            </div>
        
        
        </section>
            

        <section className="second">
            <div className="May">
                <h2>May</h2>
            </div>
            <div className="May">
                <h2>June</h2>
                <ul style={{
                    listStyle:"none",
                    margin:"10px",
                    fontSize:"20px",
                   
                   
                    
                }}>
                    <li>24th June: The birth of John the Baptist <br/><br/></li>
                    <li>29th June: The Feast of Sts. Peter and Paul</li>
                </ul>
            </div>
            <div className="May">
                <h2>July</h2>
            </div>
            <div className="May">
                <h2>August</h2>   
            </div>
        </section>


        <section className="Third">
            <div className="sept">
                <h2>September</h2>
            </div>
            <div className="sept">
                <h2>October</h2>
            </div>
            <div className="sept">
                <h2>November</h2>
               </div>
            <div className="sept">
                <h2>December</h2>
            </div>
        </section>
        </>
    )
}
export default Events