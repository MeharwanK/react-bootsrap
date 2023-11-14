import hero from '../assets/images/hero.png'
import heroLady from '../assets/images/heroLady.png'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function HeroSection(){
  const abc = {
    height: "90vh"
  }
 
    return(
        <>
            <div className="container row mt-4 ml-2 pt-8"style={abc}>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className=" text-white fs-1 ml-3">
                        Discover, collect, and charity in extraordinary NFT marketplace
                    </div>
                    <p className='text-white fs-4 mt-4'> In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
                    <div className='mt-4 '>
                    <Button className="text-white bold me-2" variant="outline-success">Explore</Button>
                    <Button className="text-white bold" variant="outline-primary">Create</Button>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <Card style={{ width: '20rem',height:'100px' }}>
                    <Card.Img variant="top" src={hero} />
                    <Card.Body>
                        <Card.Text>
                            <span><img src={heroLady} alt="" /></span>
                            <span>Laura 0.21 weigh
                            </span>
                        </Card.Text>
                    </Card.Body>
                    </Card> 
                </div>
            </div>
        </>
    )
}