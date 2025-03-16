import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pic1 from "../assets/lipstick.png";
import Pic2 from "../assets/perfume.png";
import Pic3 from "../assets/foundation.png";


const renderStars = (rating) => {
    const fullStar = "★";
    const emptyStar = "☆";
    return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
  }; 

const Skincarecont = [
    {
      id: 1,
      title: "VELVET TEDDY",
      subtitle: "M·A·C XIMAL SILKY MATTE LIPSTICK",
      description: "Silky Matte Finish, 12HR Comfortable Wear",
      image: Pic1,
      shades: "1 shade",
      rating: 2 , 
      perprice: '728.57/g' , 
      price : '5,100.25'
    },
    {
      id: 2,
      title: "BODACIOUS",
      subtitle: "M·A·C LOCKED KISS INK™ 24HR LIPCOLOUR",
      description: "24HR Weightless Colour",
      image: Pic2,
      shades: "3 shades",
      rating: 5 , 
      perprice: '728.57/g' ,
      price : '5,100.25'
    },
    {
      id: 3,
      title: "GLIDE OR DIE",
      subtitle: "M·A·C COLOUR EXCESS GEL PENCIL EYE LINER",
      description: "Gel Liner, Long-Wearing, Waterproof",
      image: Pic3,
      shades: "2 shades",
      rating: 3 , 
      perprice: '728.57/g' ,
      price : '5,100.25'
    },
  ];


const Skincare = () => {
    return (
        <>
            <Navbar />

            <div className="container my-5">
                <h1 className="text-center fw-bold">SKIN CARE</h1>
                <div className="row mt-4">
                    {Skincarecont.map((item) => (
                    <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card border-0 shadow-sm text-center rounded-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="card-img-top p-3"
                        />
                        <div className="card-body">
                            <h5 className="fw-bold">{item.title}</h5>
                            <p className="text-muted small">{item.subtitle}</p>
                            <p className="small">{item.description}</p>
                            <p className="fw-semibold">{item.shades}</p>
                            <p className="card-text stars">{renderStars(item.rating)}</p>
                            <p className="card-text"><strong>₹{item.price}</strong> | ₹{item.perprice}</p>
                            <p className="card-text">MRP Inclusive of all taxes</p>
                            <button
                            className="btn btn-dark w-50 rounded-pill"
                            // onClick={() => addToWishlist(item)}
                            >
                            Add to Bag
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

            <Footer />

        
        
        </>



    );
};

export default Skincare;