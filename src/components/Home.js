import React from "react";
import { Container,Carousel, Image, Row, Col} from "react-bootstrap";


const Home = () => (
  <>
  <Container> 

  <br></br>

    <header>
    <h1 class="text-center" >Welcome Dough Delivered!</h1>
    </header> 

    <br></br> 

    <Carousel align="center">
  <Carousel.Item interval={2000}>

    <img width={1300} height={500} alt="1000x500"src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="First slide"
    />
  
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img width={1300} height={500} alt="1000x500"src="https://images.unsplash.com/photo-1534963063257-6b65b54e438b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img width={1300} height={500} alt="1000x500"
      src="https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

    <br></br>

    
    <Row>
    <Col>
    <Image src="https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80" rounded />
   </Col>

   <Col> 
    <p class="text-justify center" class="text-secondary">Our dough balls are made with the finest quality ingredients: Caputo Tipo 00 Pizzeria flour, live yeast, purified water and Himalayan pink salt. Our dough balls are made to our own 60% hydration recipe, and each dough ball weighs 250 grams, perfect for a 12" pizza.

Dough balls will be semi-frozen on arrival, and can safely be refrozen without affecting the final result (amazing pizza!).

Once shipped dough balls will be delivered via a specialist 24-hour courier, so they’re only available in mainland UK. Sorry, at this time we cannot deliver to the Highlands, Islands, Northern Ireland and selected postcodes.

Each package of dough balls comes with complete defrosting and preparation instructions. The minimum defrosting time required is one hour, but they can be left in the fridge overnight too.

Please note: Your dough balls will be shipped immediately, as per delivery schedule below, even if your order includes other products (for example, ovens on pre-order!). If you’d like to use your dough balls with a new oven, we recommend you wait until you receive your oven before placing an order.</p>

<p class="text-justify center" class="text-secondary">Our dough balls are made with the finest quality ingredients: Caputo Tipo 00 Pizzeria flour, live yeast, purified water and Himalayan pink salt. Our dough balls are made to our own 60% hydration recipe, and each dough ball weighs 250 grams, perfect for a 12" pizza.

Dough balls will be semi-frozen on arrival, and can safely be refrozen without affecting the final result (amazing pizza!).

Once shipped dough balls will be delivered via a specialist 24-hour courier, so they’re only available in mainland UK. Sorry, at this time we cannot deliver to the Highlands, Islands, Northern Ireland and selected postcodes.

Each package of dough balls comes with complete defrosting and preparation instructions. The minimum defrosting time required is one hour, but they can be left in the fridge overnight too.

Please note: Your dough balls will be shipped immediately, as per delivery schedule below, even if your order includes </p>
<br></br>
<p class="text-justify center" class="text-secondary">Our dough balls are made with the finest quality ingredients: Caputo Tipo 00 Pizzeria flour, live yeast, purified water and Himalayan pink salt. Our dough balls are made to our own 60% hydration recipe, and each dough ball weighs 250 grams, perfect for a 12" pizza.

Dough balls will be semi-frozen on arrival, and can safely be refrozen without affecting the final result (amazing pizza!).

Once shipped dough balls will be delivered via a specialist 24-hour courier, so they’re only available in mainland UK. Sorry, at this time we cannot deliver to the Highlands, Islands, Northern Ireland and selected postcodes.

Each package of dough balls comes with complete defrosting and preparation instructions. The minimum defrosting time required is one hour, but they can be left in the fridge overnight too.

Please note: Your dough balls will be shipped immediately, as per delivery schedule below, </p>
</Col>
  </Row>

 
  
  </Container>
  </>
);

export default Home;
