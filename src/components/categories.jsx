 import '../styles/categories.css'
 const Categories = () => {
    let categories=[
        {link:"All"},
        {link:"Sports"},
        {link:"Comedy"},
        {link:"Facgine"},
        {link:"Vloge"},
        {link:"Movie"},
        {link:"Travle"},
        {link:"Food"},
        {link:"Bollywood"},
        {link:"Kids"},
        {link:"Recent Video"},

    ]
    return(
        <div className="categories">
            <ul>
            {categories.map((data) =>{
                return(
                    <li><a href="">{data.link}</a></li>

                   
                )
            }

            )}
             </ul>
        </div>

    );
   
    
}
 
export default Categories;