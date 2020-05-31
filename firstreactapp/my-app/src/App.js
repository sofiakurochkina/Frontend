import React from 'react';
import Tweet from './Tweet';

function App(){

  return(
    <div className="app"> 
      <Tweet name="Sonya" message="This is a random tweet" likes="Likes: 770" />
      <Tweet name="Danya" message="I am the true king" likes="Likes: 990" />
      <Tweet name="Ksenia" message="700k my dudes"likes="Likes: 110" />
      <Tweet name="Alex" message="My course is available" likes="Likes: 508"/>
    </div>
  )
}
export default App;
