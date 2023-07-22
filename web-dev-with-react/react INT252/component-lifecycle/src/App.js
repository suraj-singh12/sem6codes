import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props)
    this.state = {favouriteBook : 'ReactJS Essentials'}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favouriteBook: 'React In Action'})
    }, 4000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState);
    document.getElementById('div1').innerHTML = 
    'Before the update, the favourite book was ' + prevState.favouriteBook;
    return prevState;;
  }

  componentDidUpdate() {
    document.getElementById('div2').innerHTML = 
    'The updated favourite book is ' + this.state.favouriteBook;
  }

  render() {
    return (
      <div>
        <h1>My Favourite book is {this.state.favouriteBook}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    )
  }
}

export default Book;