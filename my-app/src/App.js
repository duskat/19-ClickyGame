import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Section from './components/section/section';
import Images from './components/images/images';
import images from './friends.json' 

class App extends Component {
   // Setting this.state.friends to the images json array
   constructor () {
     super();
     this.removeClass = this.removeClass.bind(this)
     
   
   this.state = {
    images: images,
    count: 0,
    topCount:0,
    ids: [],
    class : "",
  }
}
  
  removeClass = () => {

    this.setState({class: ""});
  }

  shuffleImage = (id) => {
    // const images = this.state.images.filter(image => image.id !== id)
    let images = ((images) => {
    
      //stateImages.map((images) => {
      // Array.from({length: images.length}, () => Math.floor(Math.random() * images.length));
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      
     // this.setState({images: images})
      return images;
   // })
  })(this.state.images);
    
  if (this.state.ids.indexOf(id) != -1){
    console.log("fail")
    this.state.class = "wrong";
    setTimeout( this.removeClass, 300);
    this.state.ids = [];
    this.state.count = 0;
    console.log(this.state.ids.length)
    this.setState(this.state);
    return;

  }
    console.log(id)
    this.state.ids.push(id);
    this.state.count += 1;
    this.state.class = "correct";
    setTimeout( this.removeClass, 300);
    if (this.state.count >= this.state.topCount ){
      this.state.topCount =  this.state.count
    }
    this.setState(this.state);
  }

  render() {
  
    let stateImages = this.state.images;
      console.log(stateImages);
      const imageComponents = stateImages.map((image) => { return (
       <Images 
           shuffleImage={this.shuffleImage}
           id={image.id}
          key={image.id}
          name={image.name}
          image={image.image} />  
        );
    });
    return (
      <div className="App">

             <Header 
             count = {this.state.count}
             class = {this.state.class}
             topCount ={this.state.topCount}
             />

         
          <main role="main">
          <Section />
          {imageComponents}
            

          </main>      
      </div>
    );
  }
}
          

export default App;
