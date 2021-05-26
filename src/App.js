import React from 'react';
import Badge from './components/Badge'
import ProfilePic1 from "./images/user.jpg";
import ProfilePic2 from "./images/user1.jfif";
import ProfilePic3 from "./images/user2.jpg";

function App() {
  return (
    <React.Fragment>
      <Badge picture={ProfilePic1}></Badge>
      <Badge picture={ProfilePic2}></Badge>
      <Badge picture={ProfilePic3}></Badge>
      <Badge picture={ProfilePic1}></Badge>
    </React.Fragment>
    
    );
}

export default App;
