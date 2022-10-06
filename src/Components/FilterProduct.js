import "./filter.css"

function FilterProduct() {
    const category=["Elec", "Phone", "Clothes", "Info"]
    return(
        <div className="filerbody">
{/* search bar by name */}
<div className="search-container">
  <input type="text" name="search" placeholder="Search..." className="search-input" />
  <a  className="search-btn" >
    <i className="fas fa-search" />      
  </a>
</div>
{/* search filter rate */}
<div>
  <div className="star-source">
    <svg>
      <linearGradient x1="50%" y1="5.41294643%" x2="87.5527344%" y2="65.4921875%" id="grad">
        <stop stopColor="#bf209f" offset="0%" />
        <stop stopColor="#d62a9d" offset="60%" />
        <stop stopColor="#ED009E" offset="100%" />
      </linearGradient>
      <symbol id="star" viewBox="153 89 106 108">   
        <polygon id="star-shape" stroke="url(#grad)" strokeWidth={5} fill="currentColor" points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085" />
      </symbol>
    </svg>
  </div>
  <div className="star-container">
    <input type="radio" name="star" id="five" />
    <label htmlFor="five">
      <svg className="star">
        <use xlinkHref="#star" />
      </svg>
    </label>
    <input type="radio" name="star" id="four" />
    <label htmlFor="four">
      <svg className="star">
        <use xlinkHref="#star" />
      </svg>
    </label>
    <input type="radio" name="star" id="three" />
    <label htmlFor="three">
      <svg className="star">
        <use xlinkHref="#star" />
      </svg>
    </label>
    <input type="radio" name="star" id="two" />
    <label htmlFor="two">
      <svg className="star">
        <use xlinkHref="#star" />
      </svg>
    </label>
    <input type="radio" name="star" id="one" />
    <label htmlFor="one">
      <svg className="star">
        <use xlinkHref="#star" />
      </svg>
    </label>
  </div>
</div>

{/* filter by category */}

<div>
  
  <form id="app-cover">
    <div id="select-box">
      <input type="checkbox" id="options-view-button" />
      <div id="select-button" className="brd">
        <div id="selected-value">
          <span>Select a Category</span>
        </div>
        {/* <div id="chevrons">
          <i className="fas fa-chevron-up" />
          <i className="fas fa-chevron-down" />
        </div> */}
      </div>
      <div id="options">
        
        {category.map(el=><div className="option">
          {/* <input className="s-c top" type="radio" name="platform" defaultValue="freecodecamp" /> */}
          {/* <input className="s-c bottom" type="radio" name="platform" defaultValue="freecodecamp" /> */}
          {/* <i className="fab fa-free-code-camp" /> */}
          <span className="label">{el}</span>
          {/* <span className="opt-val">{el}</span> */}
        </div>
        )}
        <div id="option-bg" />
      </div>
    </div>
  </form>
</div>


   
        </div>
    )
    
}
export default FilterProduct