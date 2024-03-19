import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdsApi } from "../redux/PostApi";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Ads.css"

const Ads = () => {
    const dispatch = useDispatch();   
    const { Adsposts } = useSelector((state) => state.post);
    console.log("adsDuplicatedataadpage",Adsposts)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAdsApi(dispatch);
          console.log("dataapiADS", data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, [dispatch]);
  
    const [filteredClassified, setFilteredClassified] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [hasResults, setHasResults] = useState(true);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 6;
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [Adsposts]);
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      setCurrentPage(1);
      setHasResults(true);
  
      const results = Adsposts && Adsposts.filter((post) => {
        const lowerCaseNumber = (post && post.number) ? post.number.toString().toLowerCase() : "";
  
        return (
          (!filteredClassified || (post && post.classifieds && post.classifieds.toLowerCase() === filteredClassified.toLowerCase())) &&
          ((post && post.name && post.name.toLowerCase().includes(query)) ||
            (post && post.classifieds && post.classifieds.toLowerCase().includes(query)) ||
            lowerCaseNumber.includes(query) ||
            (post && post.email && post.email.toLowerCase().includes(query)) ||
            (post && post.address && post.address.toLowerCase().includes(query)) ||
            (post && post.shope && post.shope.toLowerCase().includes(query))||
            (post && post.Categories && post.Categories.toLowerCase().includes(searchQuery))||
          (post && post.postedby && post.postedby.toLowerCase().includes(searchQuery))||
          (post && post.dateofPosted && post.dateofPosted.toLowerCase().includes(searchQuery))
  
          )
        );
      });
        
      setHasResults((results && results.length > 0) || false);
    };
  
    const filteredData = Adsposts && Adsposts.filter((post) => {
      const lowerCaseNumber = post && post.number ? post.number.toString().toLowerCase() : "";
  
      return (
        (!filteredClassified || (post && post.classifieds && post.classifieds.toLowerCase() === filteredClassified.toLowerCase())) &&
        ((post && post.name && post.name.toLowerCase().includes(searchQuery)) ||
          (post && post.classifieds && post.classifieds.toLowerCase().includes(searchQuery)) ||
          lowerCaseNumber.includes(searchQuery) ||
          (post && post.email && post.email.toLowerCase().includes(searchQuery)) ||
          (post && post.address && post.address.toLowerCase().includes(searchQuery)) ||
          (post && post.Categories && post.Categories.toLowerCase().includes(searchQuery))||
          (post && post.postedby && post.postedby.toLowerCase().includes(searchQuery))||
          (post && post.dateofPosted && post.dateofPosted.toLowerCase().includes(searchQuery))
  
          
  
  
        )
      );
    });
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData && filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, 
      prevArrow: null, // Remove the previous arrow
      nextArrow: null,
    };
   
  
    const slideStyle = {
      width: '280px', // Set the width of each slide
      height: '180px', // Set the height of each slide
    };
  
  return (
    <div className="people-section">
    <div className="peoplesection">
      <div className="designation-container-box">
        <div className="designations-container-items">
          <p onClick={() => setFilteredClassified(null)}> OTHERS</p>
          <p onClick={() => setFilteredClassified('job')}>Job</p>
          <p onClick={() => setFilteredClassified('FURNITURE')}>FURNITURE</p>
          <p onClick={() => setFilteredClassified('AUTOMOBILES')}>AUTOMOBILES</p>
          <p onClick={() => setFilteredClassified('MATRIMONAL')}>MATRIMONAL</p>

          <p onClick={() => setFilteredClassified('PROPERTY')}>PROPERTY</p>
          <p onClick={() => setFilteredClassified('SERVICES')}>SERVICES</p>
          <p onClick={() => setFilteredClassified('FASHION')}>FASHION</p>
          <p onClick={() => setFilteredClassified('AGRO')}>AGRO</p>

          <p onClick={() => setFilteredClassified('BOOKS')}>BOOKS</p>

          <p onClick={() => setFilteredClassified('GROCERIES')}>GROCERIES</p>

          {/* ... (other code) */}

 
        </div>
      </div>

      <div className="data-display-container">
        <div className="search-box">
          <input
            type="text"
            className="search-controls"
            placeholder="Search anything"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : hasResults ? (
          <div className="description-containerb">
            <div className="card-containerb">
              {currentItems && currentItems.map((post) => (
            
                

<div className='ads-container-box' key={post.id}>
<div className='ads-container-box-items'>
<div className="ads-infomarmation">
<h3>{post.Categories}</h3>
<hr />
<div className='ads-Slider-section'>

<Slider {...settings}>
<div style={slideStyle}>
 
  <img src="http://usa.pingpongx.com/us/blog/content/images/wordpress/2020/06/Thumbnail-01.jpg" alt="Slide 1" style={slideStyle}  className='Slider-img'/>
</div>
<div style={slideStyle}>
 
  <img  src="https://image.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?1" alt="Slide 2" style={slideStyle}  className='Slider-img'/>
</div>
<div style={slideStyle}>
 
  <img src="https://tse4.mm.bing.net/th?id=OIP.LrUNVCzacD_ezCko__VSPwAAAA&pid=Api&P=0&h=180" alt="Slide 3" style={slideStyle}  className='Slider-img'/>
</div>
</Slider>


</div>
<div className='ads-info-box'>
<p>Categories: <span>{post.classifieds}</span></p>
<p> posted By: <span>{post.postedby}</span></p>
<p>PostDate: <span>{post.dateofPosted}</span></p>
<p> Address: <span>{post.address}</span></p>

</div>
<div className="ads-contant-box">
<p>NOTE: <span>{post.content}</span>  Set the inset Parameter A  element with a blurred, </p>
</div>
<div className='ads-social-media-box'>

                <ul>
                  <li><a href={`tel:${post.number}` }><CallOutlinedIcon /></a></li> 
                   <li><a  href={`whatsapp://send?phone=${post.number}&text=${encodeURIComponent("Hello")}`} target="_blank" rel="noopener noreferrer">{<WhatsAppIcon/>}</a></li>
                   <li><a href={`mailto:${post.email}` }><MailOutlineOutlinedIcon /></a></li> 
                 </ul>
                   
</div>

</div>
</div> 
                </div>
              ))}
            </div>
            <div className="pagination">
              {filteredData && (
                <ul>
                  {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, index) => (
                    <li key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                      {index + 1}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="loading">No data available</div>
        )}
      </div>
    </div>
  </div>
  )
}

export default Ads