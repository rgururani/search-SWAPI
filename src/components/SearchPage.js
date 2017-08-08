import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchAction from '../actions/searchPlanetAction';
import toastr from 'toastr';
import {Circle} from 'react-shapes';
import * as types from '../constants/actionTypes';


class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      planet : '',
      searchCount:0,
      //user: this.context.redux.getState().user
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    this.props.actions.getUser();
    setInterval(()=>{this.setState({searchCount: 0});},60000);
  }

  getpalnetrow(planet){

    return(
      <div id={planet.name}>
        <div className="well container">
          <div className="col-sm-12">
            <h4 className="text-info">
              <u> {planet.name} </u>
            </h4>
          </div>
        </div>
      </div>
    );
  }

  onChange(event) {
    let searchTime = this.state.searchCount;
    let user = this.props.user;
    if (user == 'Luke Skywalker' || searchTime < 16) {
      searchTime = searchTime+1;
      this.setState({searchCount: searchTime});

      this.setState({planet: event.target.value});
      this.props.actions.loadplanet(event.target.value)
        .catch(error => {
          toastr.error(error);
        });
    }
    else {
      toastr.error('Only 15 search per minute are allowed.');
    }
  }

  render() {
    const planets = this.props.planets;

    return (
      <div>
        <div className="navbar navbar-default navbar-static-top" role="navigation"  id="navbar">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand">
                Search
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div>
            <div>
              <div className="well container">
                <div className="col-sm-12">
                  <div className="col-sm-12">
                    <input type="text" name="Intitle" id="Intitle"
                           className="form-control"
                           placeholder="Search planet"
                           value={this.state.planet}
                           onChange={this.onChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12"></div>
        <div className="col-sm-12">
          <div>
            {planets.map((planet) => {
              return(
                <div id={planet.name}>
                  <div className="well container">
                    <div className="col-sm-12">
                      <h4 className="text-info">
                        <u> {planet.name} </u>
                      </h4>
                      <div>
                        <div className="col-lg-2 hidden-sm hidden-xs">
                          {!isNaN(planet.population) ?
                            <Circle r={Math.log(planet.population) * Math.LOG10E + 1 | 0} fill={{color: '#2409ba'}} stroke={{color: '#E65243'}}
                                    strokeWidth={0.5}/>
                            :
                            <strong>Un-known</strong>
                          }
                        </div>
                        <div className="col-lg-2 col-sm-12">
                          <a href="#" className="btn btn-sm btn-default">population <span>{planet.population}</span></a>
                        </div>
                        <div className="col-lg-2 col-sm-12" />
                        <div className="col-lg-2 col-sm-12" />
                        <div className="col-lg-4 col-sm-12">
                          <div className="col-sm-12 col-lg-2">
                            <a href="#" className="btn btn-sm">films</a>
                          </div>
                          <hr/>
                          {planet.films.map(film =>
                            <div className="col-sm-12 col-lg-10"><a href="#" className="btn btn-sm" key={film}>{film}</a></div>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.contextTypes = {
  router: PropTypes.object,
  //redux: React.PropTypes.object
};

SearchPage.propTypes = {
  planets: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state)
{
  return {
    planets: state.planets,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchAction, dispatch),

    // ... other custom mapped dispatch functions ...
    loadPlanets: (myParam) => {
    dispatch({ type: types.Planet_FETCH_SUCCESS, myParam});
  },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
