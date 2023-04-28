import { Link } from 'react-router-dom';
import './stalls.css';


export default function Stall () {
    return(
        <div className="stall-display">
        <div className="container">

        <h3><span>Welcome to our market stalls</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-shop-window" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
</svg></h3>
            {/*ill probably have a progress bar for navigating through the store,
            <hr/> To be continued later...*/}

            <h4> Select what you are looking for</h4>
            
             <div className="stalls">
                <ul>
                    <li>
                        <Link to="/wholesale">
                    Farmer's Products (Wholesale Stalls)
                </Link>
                    </li>
                    <li>
                        <Link to="/retail">
                    Grocer's Products (Retail Stalls)
                </Link>
                    </li>
                </ul>

                {/* will definitely revisit this design */}
                

                
             </div>
            

<h4>Looking for something else?</h4>
<Link to="/main-display">
    <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" 
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg><span>Go to main menu</span></p>
</Link>
        
    </div>
    </div>
    );

}