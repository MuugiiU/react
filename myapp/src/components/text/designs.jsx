const DesignBtn = ({design})=>{

    return <div id={`${design.name}`} className="designBtn">
            <img src={`${design.imageURL}`} alt="" />
            <div className="title">{design.name}</div>
        </div>
}

export default DesignBtn;