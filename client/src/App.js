import React, { Component } from 'react';
import axios from 'axios';
import List from './List'
import Add from './Add'
import Update from './Update'
import Delete from './Delete'
import './App.css'

class App extends Component {
  
  state = {
    data: [],
    id: 1,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  postDataToDB = (message) => {
    console.log(message + 'message')
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 1;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/postData', {
      id: idToBeAdded,
      message: message
    });
  };

  deleteFromDB = (idTodelete) => {
    idTodelete = parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });
    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete
      },
    });
  };

  updateDB = (update) => {
    let objIdToUpdate = null;
    update[0] = parseInt(update[0]);
    this.state.data.forEach((dat) => {
      if (dat.id === update[0]) {
        objIdToUpdate = dat._id;
      }
    });

    axios.put('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: update[1] }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div className='container'>

        <h3>Things to do for today:</h3>
            {data.length === 0
              ? 'NO PLANS YET'
            : <List getData={data}/> }
        <Add postData={this.postDataToDB}/>
        <hr align='left'/>
          
        <Delete deleteData={this.deleteFromDB}/>
        <hr align='left'/>
        
        <Update updateData={this.updateDB} />
      </div>
    );
  }
}

export default App;