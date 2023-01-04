import DesignBtn from './designs';
const text =()=>{

    const designs=[{name:'TWITTER',imageURL:"./img/twitter.png"},
    {name:'LINKEDIN',imageURL:"./img/linked_in.png"},
    {name:'MEDIUM',imageURL:"./img/medium.png"}];
    return(
        <div className="row">
            <div className="col">
          <h2>Blog Posts</h2>
          <h3>I think so, this is it</h3>
          <p> Design begins after I begin to think about how to present an experience most successfully, 
            whether a button I put in can solve a problem. The only point in design is not ui design,
             if the user does not have a good experience at the end of the product,
             the design will be considered unsuccessful in my opinion.</p>
            <div className='btns'>
             {designs.map((design,index)=>
                <DesignBtn key={index}design={design}/>) }
             </div>
          </div>
          <div className="col">
            <img src="./img/mod.png" alt="" />
          </div>
           
        </div>
    )
}
export default text;