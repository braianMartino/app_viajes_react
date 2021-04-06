var Tarjeta = React.createClass({
  render: function () {
    const tarjeta = this.props.tarjeta;
    const cambiarFavorito = this.props.cambiarFavorito || (() => null); //A: Si no nos pasaron función usamos una que no hace nada.
    const esFavorito = this.props.esFavorito;
    return (
      <Ons.Card>
        <div style={{ textAlign: "center", position: "relative" }}>
          <img className="post-image" src={tarjeta.imagen} />
        </div>
        <Ons.ListItem className="post-button-bar" modifier="nodivider">
          {/*
          A: Eliminar esta porción de codigo no afecta a la UI
          <div className="center" style={{ paddingTop: "0px" }}>
            <Ons.Button
              className="post-button"
              modifier="quiet"
              style={{ background: "red" }}
            >
              <Ons.Icon
                id="button-post-like-1"
                icon="ion-ios-heart-outline"
              ></Ons.Icon>
            </Ons.Button>
            <Ons.Button
              className="post-button"
              modifier="quiet"
              style={{ background: "red" }}
            >
              <Ons.Icon icon="ion-ios-chatbubble-outline"></Ons.Icon>
            </Ons.Button>
            <Ons.Button
              className="post-button"
              modifier="quiet"
              style={{ background: "red" }}
            >
              <Ons.Icon icon="ion-ios-paperplane-outline"></Ons.Icon>
            </Ons.Button>
          </div> 
          */}
          <div className="list-item__title">
            <b>{tarjeta.nombre}</b>
          </div>
          <div className="right corner-button bookmark">
            <Ons.Button //A: Agregamos boton favorito
              class="post-button"
              modifier="quiet"
              onClick={() => cambiarFavorito(tarjeta)}
            >
              <Ons.Icon
                icon="ion-ios-heart"
                style={{ color: esFavorito ? "red" : "gray" }}
              ></Ons.Icon>
            </Ons.Button>
          </div>
        </Ons.ListItem>
        <Ons.ListItem>
          <div className="center">
            {/*
            A: Movido a la linea 41, a la izquierda del fav button. 
            <div className="list-item__title">
              <b>{tarjeta.nombre}</b>
            </div>
            */}
            <div className="list-item__subtitle" style={{ fontSize: "12px" }}>
              {tarjeta.texto}
            </div>
          </div>
          {/* 
          A: Eliminar esta porción de codigo no afecta a la UI
          <div className="right">
            <Ons.Button className="corner-button" modifier="quiet">
              <Ons.Icon icon="ion-ios-more,material:ion-android-more-vertical"></Ons.Icon>
            </Ons.Button>
          </div>
          */}
        </Ons.ListItem>

        <div className="post-like-info">
          <b>someone_one</b> and 24 other liked this.
        </div>
        {/* 
        A: Comentado porque repite el titulo.
        <div className="post-caption">
          <b>{tarjeta.nombre}</b>
        </div>
         */}
        <div className="post-time">1 HOUR AGO</div>
      </Ons.Card>
    );
  },
});
