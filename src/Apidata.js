import React,{useState} from 'react'
import './ApiData.css';

const itemsperpage= 10;


function Apidata({apilist}) {
  const [selectedCategory, setSelectedCategory] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);

  const categories = [...new Set(apilist.map((emoji) => emoji.category))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
   // setCurrentPage(1);
  };

  const filteredEmojis = apilist.filter(
    (emoji) => (!selectedCategory || emoji.category === selectedCategory) 
    // && apilist.indexOf(emoji) < currentPage * itemsperpage &&
    // apilist.indexOf(emoji) >= (currentPage - 1) * itemsperpage
  );

  const totalPages = Math.ceil(filteredEmojis.length / itemsperpage);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  return (
    <>
    <div className='filter-container'>
    <label htmlFor="category">Filter by Category:</label>
    <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
    </select>
    </div>
   
    <div className='emoji-container'>
    {
      filteredEmojis.length===0 ? (
        <div>No emojis found for the selected category.</div>
      ) :
     
      filteredEmojis.map((emoji)=>(
      <div key={emoji.unicode} className='emoji-item'>
      <span className='emoji-icon' dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />

      <div className="emoji-details">
          <div className="emoji-name">{emoji.name}</div>
          <div className="emoji-category">{emoji.category}</div>
          <div className="emoji-group">{emoji.group}</div>
      </div>
      </div>
    ))
    }
    </div>

      {/* <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
  </>
  )
}

export default Apidata  