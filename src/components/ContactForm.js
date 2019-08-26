const ContactForm = React.createClass({
  propTypes: {
    formData: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className={'contact-form-container'}>
        <small>Add new one:</small>
        <form className={'contact-form'}>
          <div className={'form-input'}>
            <div className={'ico'}>
              <img
                src={'https://img.icons8.com/bubbles/50/000000/id-man-in-blue-shirt.png'}
                alt=""
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              value={this.props.formData.name}
            />
          </div>
          <div className={'form-input'}>
            <div className={'ico'}>
              <img
                src={'https://img.icons8.com/bubbles/50/000000/id-man-in-green-jacket.png'}
                alt=""
              />
            </div>
            <input
              type="text"
              placeholder="Surname"
              value={this.props.formData.surname}
            />
          </div>
          <div className={'form-input'}>
            <div className={'ico'}>
              <img
                src={'https://img.icons8.com/bubbles/50/000000/email.png'}
                alt=""
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              value={this.props.formData.email}
            />
          </div>
        </form>
      </div>
    );
  }
});
