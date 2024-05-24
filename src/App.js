import React from "react";
import Header from "./componants/shared/Header";
import AllRoutes from './AllRoutes/AllRoutes'
import Footer from "./componants/shared/Footer";


function App() {
  return (
    <> 
  <Header/>
   <div className="container" style={{ minHeight : "700px"}}>
  <AllRoutes/>
     </div>  
  
  <Footer/>

    
    </>
  );
}

export default App;
