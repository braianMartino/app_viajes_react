async function apiFavoritos() {
  const res = await fetch("http://127.0.0.1:8000/api/favorito/");
  const data = await res.json();
  return data.results;
}

async function obtenerListaFavoritos() {
  const idFavoritos = await apiFavoritos(); //A: Traigo los IDs de las tarjetas faveadas y quien las faveo
  const tarjetas = await apiTarjetasDict(); //A: Traigo todas las tarjetas de la API
  let listaFavoritos = idFavoritos.map((fav) => tarjetas[fav.lugar]);
  return listaFavoritos;
}

var MyRadioButtons = React.createClass({
  getInitialState: function () {
    this.traerTarjetasFavoritas();
    return {
      vegetables: ["Tomato", "Cucumber", "Onion", "Eggplant", "Cabbage"],
      selectedVegetable: "",
      tarjetasFavoritas: null,
    };
  },

  traerTarjetasFavoritas: function () {
    obtenerListaFavoritos().then((tarjetasFavoritas) => {
      this.setState({
        tarjetasFavoritas: tarjetasFavoritas,
      });
    });
  },

  handleVegetableChange(vegetable) {
    this.setState({ selectedVegetable: vegetable });
  },

  renderFavoritoRow(row) {
    return (
      <Ons.ListItem key={row.id} tappable>
        {row.nombre}
      </Ons.ListItem>
    );
  },

  render: function () {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        {!this.state.tarjetasFavoritas ? (
          <Ons.ProgressCircular indeterminate />
        ) : (
          <Ons.List
            dataSource={this.state.tarjetasFavoritas} //A: Paso como prop el array de tarjetas favoritas en vez de vegetables
            renderRow={this.renderFavoritoRow}
          />
        )}
      </Ons.Page>
    );
  },
});
