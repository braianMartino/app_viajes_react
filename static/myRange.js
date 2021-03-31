var MyRange = React.createClass({
  getInitialState: function() {
    return {
      value: 0
    };
  },

  handleChange(e) {
    this.setState({value: e.target.value});
  },

  render: function() {
    return (
      <section
          style={{
            float: "left",
            margin: "16px"
          }}
        >
          <p>
            <span>-50 </span>
            <Ons.Range
              onChange={this.handleChange}
              value={this.state.value}
              min={-50}
              max={50}
            />
            <span> +50</span>
          </p>
          <p>Value: {this.state.value}</p>
        </section>
    );
  }
});


        