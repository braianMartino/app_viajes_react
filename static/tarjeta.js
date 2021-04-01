
var Tarjeta = React.createClass({
    render: function() {
        const tarjeta = this.props.tarjeta;
        return (
            <Ons.Card>
                <Ons.ListItem>
                    <div className="center">
                        <div className="list-item__title"><b>{tarjeta.nombre}</b></div>
                        <div className="list-item__subtitle" style={{fontSize: "12px"}}>{tarjeta.texto}</div>
                    </div>
                    <div className="right"><Ons.Button className="corner-button" modifier="quiet"><Ons.Icon icon="ion-ios-more,material:ion-android-more-vertical">
                        </Ons.Icon></Ons.Button>
                    </div>
                </Ons.ListItem>
                <div style={{textAlign: "center", position: "relative"}} >
                    <img className="post-image" src={tarjeta.imagen} />
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
                <div className="post-caption"><b>{tarjeta.nombre}</b></div>
                <div className="post-time">1 HOUR AGO</div>
            </Ons.Card>
        );
    }
    
});