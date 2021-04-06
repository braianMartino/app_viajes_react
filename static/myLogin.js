var MyLogin = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
    };
  },

  handleChange(value, property) {
    //Función genérica para setear varias propiedades
    let state = {};
    state[property] = value; //crea un objto, lo carga con el atributo y la propiedad
    this.setState(state); //setea el valor del atributo al state
  },

  handleClick: function() {
    if (
      this.state.username === "braian" &&
      this.state.password === "barrilete"
    ) {
      this.props.cuandoOk();
    } else {
      ons.notification.alert("Username or password incorrect!");
    }
  },

  render: function() {
    return (
      <Ons.Page
        renderToolbar={this.renderToolbar}
        style={{ display: "inline" }}>
        <section style={{ textAlign: "center" }}>
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={e => {
                this.handleChange(e.target.value, "username");
              }}
              modifier="underbar"
              float
              placeholder="Username"
            />
          </p>
          <p>
            <Ons.Input
              value={this.state.password}
              onChange={e => {
                this.handleChange(e.target.value, "password");
              }}
              modifier="underbar"
              type="password"
              float
              placeholder="Password"
            />
          </p>
          <p>
            <Ons.Button onClick={this.handleClick}>Sign in</Ons.Button>
          </p>
        </section>
      </Ons.Page>
    );
  }
});

const usuariosFav = {nombre: "Mirta", id: 4}
