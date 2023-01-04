const lists=['All','UI Design','UX Design','Product Design','Articles','Tutorials','News'];
 const Menus=()=>{
    return(
        <div className="menu">
            <ul>
                {lists.map((list)=>
                <li><a href="">{list} </a> </li>
                )}
            </ul>
        </div>
    )

 }
 export default Menus;