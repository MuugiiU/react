import Logo from '../logo/Logo';
const lists=['Portfolio','Blog','CV','Store','About Me','Contact'];
 const Navbar=()=>{
    return (
       <div className='navbar'>
        <Logo/>
        <ul>
         
          {lists.map((list, index)=>
           <li key={index}>{list}
           </li>
          ) }
        </ul>
        </div>
    
 )}
 export default Navbar;