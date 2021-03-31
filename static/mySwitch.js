var MySwitch = React.createClass({
  getInitialState: function() {
    return {
      checked: false
    };
  },

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Switch</div>
      </Ons.Toolbar>
    );
  },

  handleChange(e) {
    this.setState({checked: e.target.checked});
  },

  render: function() {
    return (
        <section
          style={{
            margin: "16px",
            float: "right"
          }}
        >
          <p>{this.state.checked ? "On" : "Off"}</p>
          <p>
            <Ons.Switch
              checked={this.state.checked}
              onChange={this.handleChange}
            />
          </p>
        </section>
    );
  }
});