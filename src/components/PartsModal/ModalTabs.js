import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './ModalTabs.css'
import {connect} from 'react-redux'
import {updateVehicle} from '../../ducks/reducer'

class ModalTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'home',
      year: null,
      model: '',
      trim: ''
    };
  }

  handleUpdateYear=(val) => {
    this.setState({
      year: val,
      model: '',
      trim: '',
    })
    this.props.updateVehicle({
      year: val,
      model: '',
      trim: ''
    })
  }
  handleUpdateModel(val) {
    this.setState({
      model: val,
      trim: ''
    })
    this.props.updateVehicle({  
      year: this.state.year,
      model: val,
      trim: ''
    })
  }
  handleUpdateTrim(val) {
    this.setState({
      trim: val
    })
    this.props.updateVehicle({
      year: this.state.year,
      model: this.state.model,
      trim: val
    })
  }
  handleClear() {
    this.setState({
      year: null,
      model: '',
      trim: ''
    })
    this.props.updateVehicle({
      year: null,
      model: '',
      trim: ''
    })
  }
  handleTrims() {

    switch (this.state.model) {
      case 'Legacy':
        return (
          <div className='clicker-container'>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i')}>2.5i</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i Limited')}>2.5i Limited</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i Premium')}>2.5i Premium</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('3.6R Limited')}>3.6R Limited</p>
            <button className='btn-clear' onClick={() => this.handleClear()}>Start Over</button>
          </div>
        )
      case 'Outback':
        return (
          <div className='clicker-container'>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i')}>2.5i</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i Limited')}>2.5i Limited</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('2.5i Premium')}>2.5i Premium</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('3.6R Limited')}>3.6R Limited</p>
            <button className='btn-clear' onClick={() => this.handleClear()}>Start Over</button>
          </div>
        )
      case 'WRX':
        return (
          <div className='clicker-container'>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('Limited')}>Limited</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('Base')}>Base</p>
            <p className='clickers' role='button' onClick={() => this.handleUpdateTrim('Premium')}>Premium</p>
            <button className='btn-clear' onClick={() => this.handleClear()}>Start Over</button>
          </div>
        )
      default:
        return

    }

  }
  render() {
    const { year, model, trim } = this.props

    return (
      <div>
        <div className='selected-container'>
          <p>Year: <span className='selected'>{year}</span></p>
          <p>Model: <span className='selected'>{model}</span></p>
          <p>Trim: <span className='selected'>{trim}</span></p>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="home" title="Year">
            <div className='clicker-container'>
              <p className='clickers' role='button' onClick={() => this.handleUpdateYear(2016)}>2016</p>
              <p className='clickers' role='button' onClick={() => this.handleUpdateYear(2017)}>2017</p>
              <p className='clickers' role='button' onClick={() => this.handleUpdateYear(2018)}>2018</p>
              <button className='btn-clear' onClick={() => this.handleClear()}>Start Over</button>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Model" disabled={year ? false : true}>
            <div className='clicker-container'>
              <p className='clickers' role='button' onClick={() => this.handleUpdateModel('Legacy')}>Legacy</p>
              <p className='clickers' role='button' onClick={() => this.handleUpdateModel('Outback')}>Outback</p>
              <p className='clickers' role='button' onClick={() => this.handleUpdateModel('WRX')}>WRX</p>
              <button className='btn-clear' onClick={() => this.handleClear()}>Start Over</button>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Trim" disabled={year && model ? false : true}>
            {this.handleTrims()}
  
          </Tab>
        </Tabs>
      </div>
    );
  }
}

//   render(<ModalTabs />);

const mapToProps = (reduxState) => {
  const {year, model, trim} = reduxState
  return{
    year,
    model,
    trim
  }
}
export default connect(mapToProps,{updateVehicle})(ModalTabs)
