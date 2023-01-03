const lists=['Portfolio','Blog','CV','Store','About Me','Contact'];
 const Navbar=()=>{
    return (
       <div>
        <ul>
          {lists.map((list)=>list) }
        </ul>
        </div>
    
 )}
 export default Navbar;