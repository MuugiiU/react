const pictures=[
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020", title:"This way is wrong about UI Design",description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    },
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020", title:"This way is wrong about UI Design",description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    },
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"/article"
    }
];
const Blog =()=>{
    return( 
    <div className="blog">

        {
           pictures.map((pictures,index )=>{
            return( 
            <div className="card" key={index}> 
                <img className="img" src={pictures.imageURL}/>
                 <h5>{pictures.ogno}</h5>
                 <h2>{pictures.title}</h2>
                 <p>{pictures.description}</p>
            </div>
            )
        }
      


        ) 
}
</div>
);
   
};
export default Blog;