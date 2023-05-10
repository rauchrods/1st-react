

function Content({heading, desciption, children}){

    return(

        <div className="content">
          <h1>{heading}</h1>
          <p>{desciption}</p>
          {children}
        </div>
        
    )
}

export default  Content;