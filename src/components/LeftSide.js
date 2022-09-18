import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

function LeftSide() {

    return (
        <div className='LeftSide d-none d-md-block bg-light sidebar'>
            <div className='Logo'>
                    <h1>
                        Melody
                    </h1>
            </div>
            
            <div className='ListLeftNav'>
                <ListGroup variant="flush">
                    <ListGroup.Item><i className="fa fa-home" aria-hidden="true"></i> Home</ListGroup.Item>
                    <ListGroup.Item><i className="fa fa-search" aria-hidden="false"></i> Search</ListGroup.Item>
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
