import React,{Component} from 'react'
import booksdetails from '../books.json'
class Bookcards extends Component {
    render(){
        return (
            <>
           <section className ="bg-gradient-secondary">
            <div className="pt-3 pb-4  card-body blur   mt-n8" id="count-stats">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 mx-auto py-3">
        <div className="row">
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              {/* <h1 className="text-gradient text-primary"><span id="state1" countto="70">700</span>+</h1>
              <h5 className="mt-3">Books</h5> */}
              <p className="text-sm font-weight-normal"></p>
            </div>
            <hr className="vertical dark"/>
          </div>
          <div className="col md-3 position-center">
            <div className=" text-relative">
              <h1 > Featured Mentors</h1>
              {/* <h5 className="mt-3">Authors</h5> */}
              <p className="text-sm font-weight-normal"></p>
            </div>
            <hr className="vertical dark"/>
          </div>
          {/* <div className="col-md-4">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-primary" id="state3" countto="4">15+</h1>
              <h5 className="mt-3">Genres</h5>
              <p className="text-sm font-weight-normal"></p>
            </div>
          </div> */}
          
        </div>
        
      </div>
      
    </div>
    {/* <button href =" " className="btn btn-sm  bg-gradient-secondary  mb-0 me-1 mt-2 mt-md-0">Show Random</button> */}
  </div>
         <div class="container">
                <div class="row align-items-center">
            {booksdetails.map((books, index) =>{
                var x = books.imageLink
                return   <div className="col-sm-4  p-4 md-8 ">
                <div className="rotating-card-container">
                <div className="card card-rotate card-background card-background-mask-primary shadow-primary mt-md-0 mt-5">
                 
                    <div className= "front front-background" style={{backgroundImage: 'url("'+ x  +'")', backgroundSize: 'cover'}}>
                    <div className="card-body py-7 text-center">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <i className="material-icons text-white text-4xl my-3"></i>
                        <h3 className="text-white"><br/> </h3>
                    </div>
                    </div>
                    {/* <div className="back back-background" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1616628188725-0a474c982b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlkZWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")', backgroundSize: 'cover'}}> */}
                    <div className="back back-background" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1616628188725-0a474c982b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlkZWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")', backgroundSize: 'cover'}}>
                    <br/><br/><br/>
                    <div className=" text-center">
                        <h3 className="text-black">Discover More</h3>
                        <h5 className="text-black "> You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</h5>
                        <br/><br/><br/><br/>
                        <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Know your Mentor</a>
                    </div>
                    </div>
                </div>
                </div>
                </div>



            }
            )
    }
   </div>
                </div>
                </div></section>
                <br></br> <br></br>
               </>   
        
    )
}}
export default Bookcards