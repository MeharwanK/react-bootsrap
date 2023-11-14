import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import auction1 from '../assets/images/auction1.png'
import auction2 from '../assets/images/auction2.png'
import auction3 from '../assets/images/auction3.png'
import auction4 from '../assets/images/auction4.jpg'

export const Auction = () =>{
    return(
        <>
        <h2 className='mt-4' >Hot auctions</h2>

        <div className="container row d-flex me-2">
            <div className="col col-sm-12 col-md-3 ">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={auction1} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>lorem Ispum          1.20 weth</ListGroup.Item>
                        <ListGroup.Item>Ends in 01,34,45</ListGroup.Item>    
                    </ListGroup>
                
                </Card>

            </div>
            <div className="col col-sm-12 col-md-3">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={auction2} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>lorem Ispum          1.20 weth</ListGroup.Item>
                        <ListGroup.Item>Ends in 01,34,45</ListGroup.Item>    
                    </ListGroup>
                
                </Card>
            </div>
            <div className="col col-sm-12 col-md-3">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={auction3} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>lorem Ispum          1.20 weth</ListGroup.Item>
                        <ListGroup.Item>Ends in 01,34,45</ListGroup.Item>    
                    </ListGroup>
                
                </Card>
            </div>
            <div className="col col-sm-12 col-md-3 ">
                <Card style={{ width: '15rem'}}>
                    <Card.Img variant="top" src={auction4} />
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>lorem Ispum          1.20 weth</ListGroup.Item>
                        <ListGroup.Item>Ends in 01,34,45</ListGroup.Item>    
                    </ListGroup>
                
                </Card>
            </div>
        </div>
        </>
    )
}