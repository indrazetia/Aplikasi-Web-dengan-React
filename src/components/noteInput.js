import React from 'react';
 
class ContactInput extends React.Component {
    constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
          characterLeft: 50,
          isTitleEmpty: false,
          isBodyEmpty: false,
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
      
    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
          const maxChar = 50;
          const inputTitle = event.target.value.slice(0, maxChar);
          const inputTitleLength = inputTitle.length;
    
          return {
            ...prevState,
            title: inputTitle,
            characterLeft: maxChar - inputTitleLength,
            isTitleEmpty: false,
          };
        });
    }
    
    onBodyChangeEventHandler(event) {
    this.setState(() => {
        return {
        body: event.target.value,
        isBodyEmpty: false,
        }
    });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        const {title, body} = this.state;
        if (title === "" && body === "") {
            this.setState((prevState) => {
              return {
                ...prevState,
                isTitleEmpty: true,
                isBodyEmpty: true,
              };
            });
          } else if (title === "") {
            this.setState((prevState) => {
              return {
                ...prevState,
                isTitleEmpty: true,
              };
            });
          } else if (body === "") {
            this.setState((prevState) => {
              return {
                ...prevState,
                isBodyEmpty: true,
              };
            });
          } else {    
            this.props.addNote(this.state);
            console.log(this.state);
            this.setState((prevState) => {
              return {
                ...prevState,
                title: "",
                body: "",
                characterLeft: 50,
              };
            });
          }
        
        }

    render() {
        return (     
                   
            <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                <label>Judul</label>
                <input type="text" placeholder="Isi Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <span>Sisa Karakter: {this.state.characterLeft}</span><br></br>
                {this.state.isTitleEmpty ? (
                    <p className='text-red'>Title tidak boleh kosong</p>
                ) : null}
                <label>Isi Catatan</label>
                <input type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                {this.state.isBodyEmpty ? (
                    <p className='text-red'>Isi catatan tidak boleh kosong</p>
                ) : null}
                <button type="submit">Buat</button>
            </form>
        )
    }
}
 
export default ContactInput;