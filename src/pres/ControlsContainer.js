import React from 'react'
import PGNLoader from './PGNLoader'
import SettingsView from './Settings'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faList, faLightbulb, faCog } from '@fortawesome/free-solid-svg-icons'

export default class ControlsContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab:'1'
          }
      }
    toggle(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab:tab})
        }
    }

    render(){
        return <div>
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            <FontAwesomeIcon icon={faUser} /> User
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            <FontAwesomeIcon icon={faList} /> Moves
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
            <FontAwesomeIcon icon={faLightbulb} /> Help
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
          >
            <FontAwesomeIcon icon={faCog} /> Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <div>{this.props.gamesProcessed>0?`Number of games Loaded: ${this.props.gamesProcessed}`:""}</div>
            <PGNLoader onChange = {this.props.settingsChange} notify = {this.props.updateProcessedGames}/>
            
            </Col></Row>
            </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
            <button onClick = {this.props.reset}>Reset</button>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="6">
            <SettingsView clear = {this.props.clear} onChange = {this.props.settingsChange}/>
            
            </Col>
          </Row>
        </TabPane>
      </TabContent>
        </div>
    }
}