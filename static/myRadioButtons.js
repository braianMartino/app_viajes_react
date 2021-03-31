var MyRadioButtons = React.createClass({
  getInitialState: function() {
    return {
      vegetables: ["Tomato", "Cucumber", "Onion", "Eggplant", "Cabbage"],
      selectedVegetable: "Onion"
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

  render: function() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar}>
        <Ons.List
          dataSource={this.state.vegetables}
          renderRow={this.renderRadioRow}
        />
      </Ons.Page>
    );
  }
});