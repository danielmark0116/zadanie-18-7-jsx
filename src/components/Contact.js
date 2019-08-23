const Contact = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={'contact-container'}>
        <div className={'user-photo'}>
          <img
            src={'https://img.icons8.com/bubbles/50/000000/user.png'}
            alt=""
          />
        </div>
        <div className={'user-info'}>
          <p>
            <span>Name: </span>
            {this.props.contact.name}
          </p>
          <p>
            <span>Surname: </span>
            {this.props.contact.surname}
          </p>
          <p>
            <span>Email: </span>
            {this.props.contact.email}
          </p>
        </div>
      </div>
    );
  }
});
