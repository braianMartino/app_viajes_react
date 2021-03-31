var url1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
var url2 = "https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=694&q=80";
var url3 = "https://www.freejpg.com.ar/image-900/8d/8d6c/F100011737-paisaje_de_la_isla_san_martin_y_las_cataratas_del_iguazu_en_verano.jpg";
var urlIm1 = "https://www.freejpg.com.ar/image-900/06/0660/F100012782-costa_en_la_ciudad_de_mar_del_plata_argentina.jpg";
var urlIm2 = "https://www.freejpg.com.ar/image-900/32/3246/F100011740-cabildo_de_buenos_aires_en_plaza_de_mayo.jpg";
var urlIm3 = "https://www.freejpg.com.ar/image-900/8d/8d6c/F100011737-paisaje_de_la_isla_san_martin_y_las_cataratas_del_iguazu_en_verano.jpg";

var Cards = React.createClass({
    getInitialState: function() {
        return {
            usuarios:[{nombre: 'Eros Martino', fotoCara: url1, imagen: urlIm1, texto: 'Costa en la ciudad de Mar del Plata, Buenos Aires', tags: 'Hermosa Mar del Plata #MDQ #mardel' },
                     {nombre: 'Mirta Guzman', fotoCara: url2, imagen: urlIm2, texto: 'Cabildo Plaza de Mayo, Buenos Aires', tags: 'Cabildo #cabildoBuenosAires ' },
                     {nombre: 'Facundo Benitez', fotoCara: url3, imagen: urlIm3, texto: 'Cataratas del Iguazú, Misiones', tags: '#cataratas #iguazu #misiones ' }]
      };
    },
    render: function() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>  
                <section>
                    {this.state.usuarios.map((
                        usr
                    ) => (
                        <Ons.Card>
                            <Ons.ListItem>
                                <div className="left">
                                    <img className="list-item__thumbnail" src={usr.fotoCara} />
                                </div>
                                <div className="center">
                                    <div className="list-item__title"><b>{usr.nombre}</b></div>
                                    <div className="list-item__subtitle" style={{fontSize: "12px"}}>{usr.texto}</div>
                                </div>
                                <div className="right"><Ons.Button className="corner-button" modifier="quiet"><Ons.Icon icon="ion-ios-more,material:ion-android-more-vertical">
                                    </Ons.Icon></Ons.Button>
                                </div>
                            </Ons.ListItem>

                                <div style={{textAlign: "center", position: "relative"}} >
                                    <img className="post-image" src={usr.imagen} />
                                </div>

                            <Ons.ListItem className="post-button-bar" modifier="nodivider">
                                <div className="center" style={{paddingTop: "0px"}}>
                                    <Ons.Button className="post-button" modifier="quiet" ><Ons.Icon id="button-post-like-1" icon="ion-ios-heart-outline"></Ons.Icon></Ons.Button>
                                    <Ons.Button className="post-button" modifier="quiet"><Ons.Icon icon="ion-ios-chatbubble-outline"></Ons.Icon></Ons.Button>
                                    <Ons.Button className="post-button" modifier="quiet"><Ons.Icon icon="ion-ios-paperplane-outline"></Ons.Icon></Ons.Button>
                                </div>
                                <div className="right corner-button bookmark">
                                    <Ons.Button class="post-button" modifier="quiet"><Ons.Icon icon="md-bookmark-outline"></Ons.Icon></Ons.Button>
                                </div>
                            </Ons.ListItem>

                            <div className="post-like-info"><b>someone_one</b> and 24 other liked this.</div>
                            <div className="post-caption"><b>{usr.nombre}</b> {usr.tags} </div>
                            <div className="post-time">1 HOUR AGO</div>
                        </Ons.Card>
                    ))}
                </section>
            </Ons.Page>
      );
    }
});
  