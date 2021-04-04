function apiObtenerFavoritos() {
  let listaFavoritos = JSON.parse(localStorage.Favoritos || "{}"); //A: Si no hay nada en localStorage asignamos un objeto vacio
  listaFavoritos = Object.entries(listaFavoritos); //A: Me devuelve un array donde cada posicion del mismo es un arreglo ['key', 'value']
  listaFavoritos = listaFavoritos.filter(
    //A: Filtro el array devuelto para obtener solo las tarjetas marcadas como favoritas
    (tarjetaFavorita) => tarjetaFavorita[1] === true
  );
  listaFavoritos = listaFavoritos.map((tarjeta) => tarjeta[0]); //A: Termino guardando solo los nombres de los lugares (es decir su key, no su value)
  return listaFavoritos;
}

var MyRadioButtons = React.createClass({
  getInitialState: function () {
    return {
      vegetables: ["Tomato", "Cucumber", "Onion", "Eggplant", "Cabbage"],
      selectedVegetable: "",
      tarjetasFavoritas: apiObtenerFavoritos(),
    };
  },

  handleVegetableChange(vegetable) {
    this.setState({ selectedVegetable: vegetable });
  },

  renderRadioRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className="left">
          <Ons.Radio
            inputId={`radio-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`radio-${row}`} className="center">
          {row}
        </label>
      </Ons.ListItem>
    );
  },

  render: function () {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.List
          dataSource={this.state.tarjetasFavoritas} //A: Paso como prop el array de tarjetas favoritas en vez de vegetables
          renderRow={this.renderRadioRow}
        />
      </Ons.Page>
    );
  },
});
