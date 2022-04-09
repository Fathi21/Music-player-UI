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
                <ListGroup.Item><i class="fa fa-home" aria-hidden="true"></i> Home</ListGroup.Item>
                <ListGroup.Item><i class="fa fa-search" aria-hidden="true"></i> Search</ListGroup.Item>
                <ListGroup.Item><i class="fa fa-book" aria-hidden="true"></i> library</ListGroup.Item>
                
                <span className='line'>

                </span>
                <span className='createPlayList'>
                    <ListGroup.Item><i class="fa fa-plus-square" aria-hidden="true"></i> Create Playlist</ListGroup.Item>
                </span>

                <ListGroup.Item><i class="fa fa-heart" aria-hidden="true"></i> Liked Songs</ListGroup.Item>

            </ListGroup> 
        </div>
    </div>
  );
}

export default LeftSide;
