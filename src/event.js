import React, { Component } from 'react';
import './App.css';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hobby: '',
      usia: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, hobby, usia } = this.state;
    alert(`Halo, Nama saya adalah ${name}, Hobby saya adalah ${hobby}, dan Usia saya adalah ${usia} tahun`);
  }

  render() {
    const { name, hobby, usia } = this.state;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <h2>Masukkan nama Anda:</h2>
          <input type="text" name="name" value={name} onChange={this.handleChange} className="form1" />
          <h2>Masukkan Hobby Anda:</h2>
          <input type="text" name="hobby" value={hobby} onChange={this.handleChange} className="form1" />
          <h2>Masukkan Usia Anda:</h2>
          <input type="number" name="usia" value={usia} onChange={this.handleChange} className="form1" />
          <button type="button" className="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Selamat Datang!</h1>
        <Greeting />
      </div>
    );
  }
}

export default App;
