import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class ModalTabs extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        key: 'home',
        year: 2017,
        model: 'Outback',
        trim: '2.5i Limited'
      };
    }
  
    render() {

      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Year">
            <p>2016</p>
            <p>2017</p>
            <p>2018</p>
          </Tab>
          <Tab eventKey="profile" title="Model" disabled={this.props.year ? false : true}>
            <p>Legacy</p>
            <p>Outback</p>
            <p>WRX</p>
          </Tab>
          <Tab eventKey="contact" title="Trim" disabled={this.props.year && this.props.model ? false : true}>
            <p>Hi!</p>
          </Tab>
        </Tabs>
      );
    }
  }
  
//   render(<ModalTabs />);

  export default ModalTabs
