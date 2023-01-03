const UserCard=(props)=>{
    return (
      <div className='card'>
        <h1>hello</h1>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
        <img src={props.img} alt="" />
   </div>
    )
  }
  export default UserCard;