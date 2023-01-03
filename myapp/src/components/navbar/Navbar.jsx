const lists=['Portfolio','Blog','CV','Store','About Me','Contact'];
 const Navbar=()=>{
    return (
       <div>
        <ul>
          <li>
          {lists.map((list)=>list) }
          </li>
        </ul>
        </div>
    
 )}
 export default Navbar;