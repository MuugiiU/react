import Logo from '../logo/Logo';
const lists=['Portfolio','Blog','CV','Store','About Me','Contact'];
 const Navbar=()=>{
    return (
       <div className='navbar'>
        <Logo/>
        <ul>
         
          {lists.map((list)=>
           <li >{list}
           </li>
          ) }
        </ul>
        </div>
    
 )}
 export default Navbar;