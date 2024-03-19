
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import {}from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LanguageIcon from '@mui/icons-material/Language';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import userimg from "../../assets/userimg.png";
import './People.css'
const People = () => {
    const { posts } = useSelector((state) => state.post);
    const [filteredDesignation, setFilteredDesignation] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [hasResults, setHasResults] = useState(true);
    const [loading, setLoading] = useState(true);
    const itemsPerPage = 6;
  
    useEffect(() => {
      setLoading(true);
      // Simulate loading delay (replace with your actual data fetching logic)
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, [posts]);
  
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchQuery(query);
      setCurrentPage(1);
      setHasResults(true);
  
      // Check if there are results based on the search criteria
      const results = posts && posts.filter((post) => {
        const lowerCaseNumber = (post && post.number) ? post.number.toString().toLowerCase() : "";
  
        // Null checks for post and its properties
        return (
          (!filteredDesignation || (post && post.designation && post.designation.toLowerCase() === filteredDesignation.toLowerCase())) &&
          (
            (post && post.name && post.name.toLowerCase().includes(query)) ||
            (post && post.designation && post.designation.toLowerCase().includes(query)) ||
            lowerCaseNumber.includes(query) ||
            (post && post.email && post.email.toLowerCase().includes(query)) ||
            (post && post.address && post.address.toLowerCase().includes(query))
          )
        );
      });
  
      setHasResults((results && results.length > 0) || false);
    };
  
    const filteredData = posts && posts.filter((post) => {
      const lowerCaseNumber = post && post.number ? post.number.toString().toLowerCase() : "";
  
      // Null checks for post and its properties
      return (
        (!filteredDesignation || (post && post.designation && post.designation.toLowerCase() === filteredDesignation.toLowerCase())) &&
        ((post && post.name && post.name.toLowerCase().includes(searchQuery)) ||
          (post && post.designation && post.designation.toLowerCase().includes(searchQuery)) ||
          lowerCaseNumber.includes(searchQuery) ||
          (post && post.email && post.email.toLowerCase().includes(searchQuery)) ||
          (post && post.address && post.address.toLowerCase().includes(searchQuery))
        )
      );
    });
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData && filteredData.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  




return (
    <div className="people-section">
      <div className="peoplesection">
        <div className="designation-container-box">
          <div className="designations-container-items">
            <p onClick={() => setFilteredDesignation(null)}>Others</p>
            <p onClick={() => setFilteredDesignation('teacher')}>Teachers</p>
            <p onClick={() => setFilteredDesignation("doctor")}>Doctors</p>
            <p onClick={() => setFilteredDesignation("Programmer")}>Programmers</p>
           <p onClick={() => setFilteredDesignation("advacote")}>advacotes</p>
             <p onClick={() => setFilteredDesignation("police")} >polices</p>
            <p onClick={() => setFilteredDesignation("Chief Executive Officer")}>Chief Executive Officers</p>
            <p onClick={() => setFilteredDesignation("Chief Technology Officer")} >Chief Technology Officers</p>
           <p onClick={() => setFilteredDesignation("Chief sales Officer")}>Chief sales Officers</p>
            <p onClick={() => setFilteredDesignation("Chief Marketing Officer")}>Chief Marketing Officers</p>
           <p onClick={() => setFilteredDesignation("Engineering Director")}>Engineering Directors</p>
           <p onClick={() => setFilteredDesignation("Sales Directorr")}>Sales Directors</p>
           <p onClick={() => setFilteredDesignation("Marketing Director")}>Marketing Directors</p>
             <p onClick={() => setFilteredDesignation("Customer Success Manager")}>Customer Success Managers</p>
            <p onClick={() => setFilteredDesignation("Account Executiver")}>Account Executives</p>
           <p onClick={() => setFilteredDesignation("Account Manager")} >Account Managers</p>
           <p onClick={() => setFilteredDesignation("Customer Support Representative")}>Customer Support Representatives</p>
          <p onClick={() => setFilteredDesignation("Technical Support Engineer")}>Technical Support Engineers</p>
           <p onClick={() => setFilteredDesignation("Network Administrator")}>Network Administrators</p>
            <p onClick={() => setFilteredDesignation("Database Administrator")}>Database Administrators</p>
            {/* ... other designation buttons */}
           
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
            <div className="description-container">
              {filteredData.length === 0 ? (
                <div className="loading">No people with the selected designation found.</div>
              ) : (
                <div className="card-container">
                  {currentItems && currentItems.map((post) => (
                    <div className="card" key={post.id}>
                      <div className="row">
                        <div className="profile">
                          <div className="profile-img">
                            <img src={userimg} className="img" alt="img-profile" />
                            <p>{post.name}</p>
                          </div>
                        </div>
                        <div className="description">
                          <div className="description-details">
                            <ul>
                              <li>
                                <span><ComputerOutlinedIcon /></span>{post.designation}
                              </li>
                              <li>
                                <span><PersonOutlineIcon /></span>{post.specialist}
                              </li>
                              
                              <li>
                              
                              
                             <span><MailOutlineOutlinedIcon /></span> <a href={`mailto:${post.email}`}>{post.email}</a>
                              </li>
                              <li>
                                <span><CallOutlinedIcon /></span> <a href={`tel:${post.number}`}>{post.number ? post.number : "N/A"}</a>
                              </li>
                              <li>
                                <span><FmdGoodOutlinedIcon /></span> {post.address}
                              </li>
                            </ul>
                          </div>
                          <div className="social-media">
                            <ul>
                              {/* ... (other social media links) */}
                              <li><a href={post.facebookUrl} target="_blank" rel="noopener noreferrer">{<FacebookIcon/>}</a></li>
                            <li><a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer">{<LinkedInIcon/>}</a></li>
                            <li><a href={post.whatsappUrl} target="_blank" rel="noopener noreferrer">{<WhatsAppIcon/>}</a></li>
                            <li><a href='https://google.com' target="_blank" rel="noopener noreferrer">{<LanguageIcon/>}</a></li>
                         
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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

export default People