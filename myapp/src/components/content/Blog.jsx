const pictures=[
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020", title:"This way is wrong about UI Design",description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    },
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020", title:"This way is wrong about UI Design",description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    },
    {
        imageURL:"./img/computer.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    },
    {
        imageURL:"./img/laptop.png",ogno:"NOV 23 2020",title:"This way is wrong about UI Design", description:"A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ", article_link:"READ MORE"
    }

];
const Card = (props) => {
   return  (<div className="card" key={props.index}> 
                <img src={props.img}/>
                 <h5>{props.ogno}</h5>
                 <h2>{props.title}</h2>
                 <p>{props.description}</p>
                 <a href="">{props.article_link}</a>
            </div>)
}

const Blog =()=>{
    return( 
    <div className="blog">

        {
           pictures.map((pictures,index )=>{
            return <Card key={index} img={pictures.imageURL} ogno={pictures.ogno} title={pictures.title} description={pictures.description} article_link={pictures.article_link} />
        }
      


        ) 
}
</div>
);
   
};
export default Blog;