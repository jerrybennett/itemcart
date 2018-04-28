let AllItems = React.Component({
  getInitialState() {
    return { items: [] }
  },
  componentDidMount() {
    console.log("Mounted!")
    // $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    fetch(`/api/v1/items`)
    .then(res => res.json())
    .then(json => this.setState({
      items: json
    }))

  },
  render() {
    let items = this.state.items.map(item => {
      return (
        <div key={item.id}>
          <h3>item.name</h3>
          <p>item.description</p>
        </div>
      )
    })
    return (
      <div>
        {items}
      </div>
    )
  }
});
