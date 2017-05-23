var React = require('react');
var ReactDOM = require('react-dom');
import {Image, Button, Form, Grid, Segment, Modal, Message } from 'semantic-ui-react';
var axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
	<Grid centered columns={12}>
	<Grid.Row className="seccion1">
	  <Grid.Column width={8} textAlign='center'>
		<Seccion1 />
	   </Grid.Column>
	</Grid.Row>
      <Grid.Row  className="seccion2">
	  <Grid.Column width={12} textAlign='left'>
		Nuestras apps
	  </Grid.Column>
	  </Grid.Row>
		<Grid.Row className="seccion2">
		<Grid.Column width={4} >
		<Lightbox lightbox={'/img/kunga.png'} modal= {'/img/kunga1.png'} />
		</Grid.Column>
		<Grid.Column width={4}>
		<Lightbox lightbox={'/img/foto-middle.png'} modal= {'/img/foto-middle.png'} shape='circular' />
		</Grid.Column>
		<Grid.Column width={4}>
		<Lightbox lightbox={'/img/directtv.png'} modal= {'/img/directtv1.png'} />
		</Grid.Column>
      </Grid.Row>
	  <Grid.Row className="seccion3">
		<Grid.Column  width={12}>
		  <Image src='/img/parallax.jpg' centered/>
		</Grid.Column>
      </Grid.Row>
      <Grid.Row className="footer">
		<Grid.Column  width={12}>
		 <Image src='/img/NuncheeInteractive White.png' centered/>
		</Grid.Column>
      </Grid.Row>
	</Grid>
			);
  }
}
class Seccion1 extends React.Component {
render(){

return ( 
<div>
<div>
<Image src='/img/icon.png'  centered />
</div>
<br></br>
<div>
<Image src='/img/NuncheeInteractive.png'  centered />
</div>
<br></br>
<div>
Etiam dignissim lobortis ligula eget luctus. Nulla suscipit urna sed molestie ullamcorper. Etiam dignissim eusmod magna. In vulputate accumsan luctus. Sed vehicula, felis et fitnibus pharetra, justo nisl congue risus, vitae volutpat ipsum nunc non massa. Duis nec varius purus, et sagittis tellus.
</div>
<br></br>
<br></br>
</div>
)
}
}


class Lightbox extends React.Component{
  
	render(){
	return(
	<div>
 <Modal trigger={<Image src={ this.props.lightbox } shape={this.props.shape} centered/>} 
         basic
        size='small'
 >
    <Modal.Content>
    <Image centered size='medium' src={ this.props.modal } />
    <br></br>
    <Formulario />
    </Modal.Content>
   
  </Modal>
  </div>
	);
	}
}

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
     alert('A password was submitted: ' + this.state.password);
    event.preventDefault();
    axios.post('http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend', {
      username: this.state.username,// + cualquier otro parámetro que se desee enviar en la solicitud POST
	  password: this.state.password
    }).then(response => {
      // Hacer algo con la respuesta
	  alert("ok");
	  console.log(response);
    }).catch(error => {
      //Hacer algo cuando la solicitud no tuvo éxito
	  console.log(error);
	  alert("error");
    });
  }

  render() {
    return (
     <Form onSubmit={this.handleSubmit}>
         <Form.Field>
			<input placeholder='Username'  name="username" value={this.state.username} onChange={this.handleChange} /> 
		 </Form.Field>
		 <Form.Field>
            <input placeholder='Password'  type='password' name="password" value={this.state.password} onChange={this.handleChange} />
		 </Form.Field>
       <Button color='blue' type='submit'>Enviar</Button>
      </Form>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

