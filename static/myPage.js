var ejMarkdown = `
hola
## Un titulo

* una 
* lista
`;

var MyPage = React.createClass({
  getInitialState: function () {
    return {
      index: 0,
    };
  },
  renderToolbar: function () {
    //A: Cambié el title de la tab Settings a Favoritos (Marcelo)
    const titles = ["Login", "Home", "Favoritos", "Users", "Texto"]; //Acá agregué un título para TAB nueva.
    return (
      <Ons.Toolbar>
        <div className="center">{titles[this.state.index]}</div>
      </Ons.Toolbar>
    );
  },

  cuandoLoginOk: function () {
    this.setState({ index: 1 });
  },

  renderTabs: function () {
    return [
      {
        content: <MyLogin cuandoOk={this.cuandoLoginOk} />,
        tab: <Ons.Tab label="Login" icon="md-home" />,
      },
      {
        content: <Home />,
        tab: <Ons.Tab label="Home" icon="md-view-day" />,
      },
      {
        content: <MyRadioButtons content="Change the settings" />,
        tab: <Ons.Tab label="Favoritos" icon="md-settings" />, //A: Cambié el nombre de Settings a Favoritos (Marcelo)
      },
      {
        content: <MyUsuariosTab />, //Agrego TAB Users y defino content
        tab: <Ons.Tab label="Users" icon="md-face" />,
      },
      {
        content: <MyTextoTab texto={"Mi Texto\n\n " + ejMarkdown} />, //Agrego TAB Users y defino content
        tab: <Ons.Tab label="Texto" icon="md-file" />,
      },
    ];
  },

  render: function () {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.Tabbar
          swipeable={true}
          position="auto"
          index={this.state.index}
          onPreChange={(event) => {
            if (event.index != this.state.index) {
              this.setState({ index: event.index });
            }
          }}
          renderTabs={this.renderTabs}
        />
      </Ons.Page>
    );
  },
});

ons.ready(function () {
  ReactDOM.render(<MyPage />, document.getElementById("app"));
});
