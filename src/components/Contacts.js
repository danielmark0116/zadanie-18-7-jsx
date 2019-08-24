const Contacts = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired
  },

  render: function() {
    const contactsList = this.props.contacts.map((singleContact, i) => {
      return <Contact contact={singleContact} key={i} />;
    });

    return <div className={'contacts-container'}>{contactsList}</div>;
  }
});
