import React, { useState } from 'react';
import { Form, FloatingLabel, Modal, Button, ButtonGroup } from 'react-bootstrap';
import HomeImage from'../assets/child.png'
import store from'../assets/fileess.png'
import { Link } from 'react-router-dom';

const Landpage = () => {
    const [show, setShow] = useState(false);
    const [signupdetails, setSignUpDetails] = useState({
        email: "", password: "", fullName: "", Username: ""
    });

    const handleShow = (event) => {
        event.preventDefault();
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleSignUp = () => {
        const { email, password, fullName, Username } = signupdetails;
        if (email && password && fullName && Username) {
            alert("Sign up successfully!");
        } else {
            alert("Please fill the form completely!");
        }
        handleClose();
    };

    return (
        <div className="container-fluid " style={{ padding: '0'}}>
            <div className="d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(135deg, #ff7eb3, #ff65a3, #ff4f81, #ff4d6d)', width: '100%', height: '100px', padding: '0 20px' }}>
                <h3 className='mt-4 text-light'>ReadQuest</h3>
                <div className='d-flex align-items-center' style={{ flexGrow: 1, justifyContent: 'center' }}>
                    <input type="text" placeholder='Search title, author or keyword' style={{ width: '250px', height: '30px', marginRight: '5px' }} />
                    <i className='fa-solid fa-magnifying-glass' style={{ marginLeft: '-5px', fontSize: '27px', background: '#a8e6cf' }}></i>
                </div>
                <button onClick={handleShow} className='fs-5 text-light fw-bold btn' type="button">Login</button>
                <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title className="w-100 text-center fw-bolder">ReadQuest</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="border rounded p-3">
                            <Form>
                                <FloatingLabel controlId="floatingEmail" label="">
                                    <input onChange={(e) => setSignUpDetails({ ...signupdetails, email: e.target.value })} style={{ width: '300px', height: '40px', marginLeft: '70px', backgroundColor: '#FAF9F6' }} type="email" placeholder="Email"/>
                                </FloatingLabel>
                                <FloatingLabel className='mt-2' controlId="floatingPassword" label="">
                                    <input onChange={(e) => setSignUpDetails({ ...signupdetails, password: e.target.value })} style={{ width: '300px', height: '40px', marginLeft: '70px', backgroundColor: '#FAF9F6' }} type="password" placeholder="Password"/>
                                </FloatingLabel>
                                <FloatingLabel className='mt-2' controlId="floatingFullName" label="">
                                    <input onChange={(e) => setSignUpDetails({ ...signupdetails, fullName: e.target.value })} style={{ width: '300px', height: '40px', marginLeft: '70px', backgroundColor: '#FAF9F6' }} type="text" placeholder="Full Name"/>
                                </FloatingLabel>
                                <FloatingLabel className='mt-2' controlId="floatingUsername" label="">
                                    <input onChange={(e) => setSignUpDetails({ ...signupdetails, Username: e.target.value })} style={{ width: '300px', height: '40px', marginLeft: '70px', backgroundColor: '#FAF9F6' }}
                                    type="text" placeholder="Username"/>
                                </FloatingLabel>
                                <p style={{ marginLeft: '75px', fontSize: '14px', width: '300px', marginTop: '5px' }}>
                                    People who use our service may have uploaded your contact information to ReadQuest. <a href="#">Learn more</a>
                                </p>
                                <p style={{ marginLeft: '75px', fontSize: '14px', width: '300px', marginTop: '5px' }}>
                                    By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
                                </p>
                                <Modal.Footer>
                                    <Button variant="primary" style={{ width: '300px', marginRight: '55px' }} onClick={handleSignUp}>
                                        Sign up
                                    </Button>
                                    <Button variant="secondary" style={{ width: '300px', marginRight: '55px' }} onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <div className=' row align-items-center bg-dark 'style={{width:"100%",marginLeft:'0px'}} >
                <div className="col-lg-5 text-light " style={{paddingLeft:'150px',paddingTop:'0px'}} >
                    <h3>Welcome to <span style={{color:'#C11C84'}}>ReadQuest</span></h3>
                    <p style={{textAlign:'justify',width:'500px'}}> ReadQuest App, dolor sit amet consectetur adipisicing elit. Eligendi nulla atque iste animi dolores ad, quis aperiam natus, quisquam voluptatum rerum, necessitatibus sequi nobis! Placeat officiis at et soluta cumque.dolor sit amet consectetur adipisicing elit.quisquam voluptatum rerum, necessitatibus sequi nobis! Placeat officiis at et soluta cumque.dolor sit amet consectetur adipisicing elit. !!!</p>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                 <img className='img-fluid ms-5' src={HomeImage} alt="landing Image" />
                    </div>

            </div>
          <div className='row mt-4 justify-content-center' style={{ width: '100%' }}>
            <h2 className='text-center'>BROWSE GENRES</h2>
    <div className='col-3 d-flex justify-content-center mt-4'>
        <div className='position-relative overflow-hidden' style={{ width: '350px', height: 'auto' }}>
            <img className='img-fluid hover-zoom' style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=0guEjINJ"
            alt=""/>
            <div className='position-absolute top-50 start-50 translate-middle text-center text-white' style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                ROMANCE
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center mt-4">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=iYg1o-UB" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                ACTION 
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center mt-4">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=DTx5oPEe" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{
            fontWeight: 'bold',fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                MYSTERY 
            </div>
        </div>
    </div>
</div>
           
            <div className='row mt-4 justify-content-center' style={{ width: '100%' }}>
    <div className='col-3 d-flex justify-content-center'>
        <div className='position-relative overflow-hidden' style={{ width: '350px', height: 'auto' }}>
            <img className='img-fluid hover-zoom' style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-4.png?itok=GnwAOhnC"
            alt=""/>
            <div className='position-absolute top-50 start-50 translate-middle text-center text-white' style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                BIOGRAPHIES 
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-5.png?itok=ZsV-_DoX" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                CHILDREN'S
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-6.png?itok=YeKxttk6" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{
            fontWeight: 'bold',fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                YOUNG ADULT
            </div>
        </div>
    </div>
</div>
            <div className='row mt-4 justify-content-center' style={{ width: '100%' }}>
    <div className='col-3 d-flex justify-content-center'>
        <div className='position-relative overflow-hidden' style={{ width: '350px', height: 'auto' }}>
            <img className='img-fluid hover-zoom' style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-7.png?itok=D-eS0PNM"
            alt=""/>
            <div className='position-absolute top-50 start-50 translate-middle text-center text-white' style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                FANTASY
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-8.png?itok=ac6V9m1y" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{fontWeight: 'bold',
            fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
           HISTORICAL FICTION
            </div>
        </div>
    </div>
    <div className="col-3 d-flex justify-content-center ">
        <div className="position-relative overflow-hidden" style={{ width: '350px', height: 'auto' }}>
            <img className="img-fluid hover-zoom" style={{ width: '100%', transition: 'transform 0.5s ease' }}
            src="https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-9.png?itok=Qde8jfw-" alt=""/>
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{
            fontWeight: 'bold',fontSize: '1.5rem',backgroundColor: 'rgba(0, 0, 0, 0.5)',padding: '10px 20px',borderRadius: '5px',width:'350px'}}>
                HORROR
            </div>
        </div>
    </div>
</div>
            <div className="row mt-4 " style={{width:'100%'}}>
                <h2 className='text-center' >TRENDING BOOKS</h2>
                <div className="col-2 mt-4" style={{marginLeft:'140px'}}>
                 <div className='"image-container'>
                        <img  className='img-fluid shadow-lg zoomed-image' style={{height:'300px'}} src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-07/A1iDsBqbhhL._SL1500_.jpg?itok=_NU9PTXf" alt="" />
                        <h5 className='mt-3'>River Bones</h5>
                 </div>
                </div>
                <div className="col-2 mt-4">
                <div  className='"image-container' >
                        <img className='img-fluid shadow-lg zoomed-image' style={{height:'300px'}} src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-09/81Pn%2B4whIVL._SL1500_.jpg?itok=UMuOt1Nu" alt="" />
                        <h5 className='mt-3' >The Granite Key</h5>
                </div>
                </div>
                <div className="col-2 mt-4">
                    <div className='"image-container' >
                        <img className='img-fluid shadow-lg zoomed-image' style={{height:'300px'}} src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-08/cover_md.jpg?itok=JN2NlrM3" alt="" />
                        <h5 className='mt-3'>Russian Brides</h5>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <div className='"image-container' >
                        <img className='img-fluid shadow-lg zoomed-image' style={{height:'300px'}} src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-07/91JczhKzCrL._SL1500_.jpg?itok=6VNlPSEp" alt="" />
                        <h5 className='mt-3'>Remember</h5>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <div  className='"image-container'>
                        <img className='img-fluid shadow-lg zoomed-image' style={{height:'300px'}} src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2024-10/81vHxrusMQL._SL1500_.jpg?itok=CC7Bs13m" alt="" />
                    <h5 className='mt-3'>Luck and Love in 1902</h5>
                    </div>
                </div>
      
                
            </div>
                       {/* Button */}
                       <div className="row mt-5 justify-content-center mx-0" style={{ width: '100%', height: '250px', backgroundColor: '#DB80A7' }}>
    <div className="col-md-3 col-10 d-flex flex-column align-items-center mt-5">
        <p className="text-light fw-bolder text-center">To view your favourites, click on the button below</p>
       <Link to={'/Favourites'} className='btn rounded text-light w-100 fs-5 fw-bolder' style={{backgroundColor:'#AA336A'}}>My Favourites</Link>

    </div>
    <div className="col-md-3 col-10 d-flex flex-column align-items-center mt-5">
        <p className="text-light fw-bolder text-center">To view your orders, click on the button below</p>
        <Link to={'/Orders'} className='btn rounded text-light w-100 fs-5 fw-bolder' style={{backgroundColor:'#AA336A'}}>My Orders</Link>    
        </div>
    <div className="col-md-3 col-10 d-flex flex-column align-items-center mt-5">
        <p className="text-light fw-bolder text-center">To view your history, click on the button below</p>
        <Link to={'/History'} className='btn rounded text-light w-100 fs-5 fw-bolder' style={{backgroundColor:'#AA336A'}}>My History</Link>    
        </div>
</div>
            <div className='mt-3' style={{background: 'linear-gradient(135deg, #ff7eb3, #ff65a3, #ff4f81, #ff4d6d)',width:'100%',height:'380px'}}>
              <div className='row ' style={{width:'100%'}}>  
               <div className='col-lg-6'> 
                <img style={{width:'700px',marginLeft:'90px',marginTop:'10px'}} src={store} alt="" />
                </div>
                <div className="col-lg-5" style={{marginLeft:'120px'}}>
                    <h1 className='mt-5 text-light'>Introducing our  mobile app!</h1>
                    <p className='text-light fw-bolder' style={{fontSize:'70px' ,marginLeft:'81px'}}>ReadQuest</p>
                    <h4 className='text-light'>Get The Best Reading Experience
                    FREE DOWNLOAD • GENRES.....  </h4>
                    <h1 className='text-light' style={{marginLeft:'100px'}}>NOW AVAILABLE</h1>
                </div>
                </div>
            </div>
            <div className='bg-secondary' style={{width:'100%',height:'100px'}}>
                <div className="row" style={{width:'100%'}}>
                    <div className="col-2 mt-3" style={{marginLeft:'1000px'}}>
                    <img src="https://manybooks.net/themes/custom/mnybks/images/mobile-app-banner/google-play.png" alt="" />
                    <img style={{marginLeft:'200px',marginTop:'-71px'}} src="https://manybooks.net/themes/custom/mnybks/images/mobile-app-banner/app-store.png" alt="" />
                    </div>
                   
                </div>
            </div>
            <div style={{height:'300px',backgroundColor:'#AA336A',width:'100%'}} className='mt-5 container-fluid p-5 text-light '>
      <div className="d-flex justify-content-between" >
        <div style={{width:'400px'}}>
          <h5><i className="fa-solid fa-book"></i> ReadQuest</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
       <div className="d-flex flex-column">
        <h5>Library</h5>
        <p>Genre</p>
        <p>Languages</p>
        <p>Authors</p>
       </div>
        <div className="d-flex flex-column">
          <h5>Company</h5>
          <p>Author Services</p>
          <p>About/Contact</p>
          <p>Accessiblity Statement</p>
        </div>
        <div className="d-flex flex-column">
          <h5>Follow</h5>
          <p>FaceBook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='Enter your Email here!!!' type="text" className="form-control me-2"/>
            <button className="btn btn-info"><i className="fa-solid fa-arrow-right "></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></a>
            <a href="https://x.com/?lang=en" style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className="text-center mt-3">Copyright &copy; July 2024 Batch, ReadQuest  App.Built with React</p>
    </div>
        </div>
    );
};

export default Landpage;
