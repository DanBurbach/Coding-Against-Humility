class Counter extends React.Component {
  render() {
    const { onIncrement, onDecrement } = this.props;
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={() => onIncrement(this.props.counter)}>Add</button>

        <button
          onClick={() => onDecrement(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value;
  }
}

const enhance = compose(
  connect(({ firebase: { auth, profile } }) => ({ auth, profile }))
);

export default firebaseConnect()(enhance(Counter));