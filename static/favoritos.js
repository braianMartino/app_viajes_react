async function apiFavoritos() {
  const res = await fetch("http://127.0.0.1:8000/api/favorito/");
  const data = await res.json();
  return data.results;
}

async function obtenerListaFavoritos() {
  const idFavoritos = await apiFavoritos(); //A: Traigo los IDs de las tarjetas faveadas y quien las faveo
  const tarjetas = await apiTarjetasDict(); //A: Traigo todas las tarjetas de la API
  let listaFavoritos = [];
  idFavoritos.forEach((f) => { //A: solo carga favoritos si coinciden el campo de_quien de api/favorito con el id que se pase por parametro
    //que deberia ser el id del USUARIO LOGU(EADO
    if ( f.de_quien == idUsuarioLogeado ) {//A: le paso directamente la variable que declare y cargo en myLogin
      listaFavoritos.push(tarjetas[f.lugar]);
    }//TODO: escribir más corto?
  }) 
  //DBG: console.log(listaFavoritos)
  return listaFavoritos;
}

var Favoritos = React.createClass({
  getInitialState: function () {
    this.traerTarjetasFavoritas();
    return {
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
        <Ons.Button 
          onClick={this.traerTarjetasFavoritas} //A: btn que llama a esa funcion , vuelve a setear tarjetasFavoritas y actualiza componente
        >
          Refresh
        </Ons.Button>
      </Ons.Page>
    );
  },
});

<Ons.Page renderToolbar={this.renderToolbar}>
<section>
  {this.tarjetasFavoritas == null ? ( //A: todavia no cargo las tarjetas
    console.log("no hay nada en tarjetasFavoritas")
  ) : (
    this.tarjetasFavoritas.map((estaTarjeta) => (
      <Tarjeta
        tarjeta={estaTarjeta}
      />
    ))
  )}
</section>
</Ons.Page>