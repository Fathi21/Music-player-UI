import ListGroup from 'react-bootstrap/ListGroup';

function LeftSide() {
  //<h2> Listen to your <br></br>favourite music </h2>  


  return (
    <div>
        <div className='Logo'>
            Melody
        </div>
        
        <div className='ListLeftNav'>
            <ListGroup variant="flush">
                <ListGroup.Item><i className="fa fa-home" aria-hidden="true"></i> Home</ListGroup.Item>
                <ListGroup.Item><i className="fa fa-search" aria-hidden="true"></i> Search</ListGroup.Item>
                <ListGroup.Item><i className="fa fa-book" aria-hidden="true"></i> library</ListGroup.Item>
                
                <span className='line'>

                </span>
                <span className='createPlayList'>
                    <ListGroup.Item><i className="fa fa-plus-square" aria-hidden="true"></i> Create Playlist</ListGroup.Item>
                </span>
                
                <ListGroup.Item><i className="fa fa-heart" aria-hidden="true"></i> Liked Songs</ListGroup.Item>
                
                <span>
                <ListGroup.Item> Sign Up</ListGroup.Item>

                <ListGroup.Item> Sign In</ListGroup.Item>

                <ListGroup.Item> Sharif</ListGroup.Item>

                <ListGroup.Item> Logout</ListGroup.Item>
                </span>
            </ListGroup> 
        </div>
    </div>
  );
}

export default LeftSide;
