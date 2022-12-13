import React, { Component } from 'react';
import Footer from './Footer';
import { Card, Icon, Image } from 'semantic-ui-react'
import BB from '../pictures/BB.png';

function Rules(){ 

      return (
  
    <React.Fragment>
        
  <div className='radio'>
    
  <Card>
    <Card.Content>
      <Card.Header><b>RULE 1</b></Card.Header>
      
      <Card.Description>
      Only 5 people allowed per lane
      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header><b>RULE 2</b></Card.Header>
      
      <Card.Description>
      Please take care of your belongings
            </Card.Description>
    </Card.Content>
    <Card.Content>
      <Card.Header><b>RULE 3</b></Card.Header>
     
      <Card.Description>
      Get you own shoes
      </Card.Description>
    </Card.Content>
  </Card>

   
  
          </div>
        
 <Footer/>
          
      </React.Fragment>
      );
  }
  

  export default Rules
