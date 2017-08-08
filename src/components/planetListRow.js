import React from 'react';
import PropTypes from 'prop-types';
import {Circle} from 'react-shapes';

const planetListRow = ({key, name , films}) => {
  return (
    <div id={key}>
      <div className="well container">
        <div className="col-sm-12">
          <h4 className="text-info">
            <u> {name} </u>
          </h4>

          <div>
            <div className="col-lg-2 hidden-sm hidden-xs">
              <Circle r={100} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
            </div>
            <div className="col-lg-2 col-sm-12">
              <a href="#" className="btn btn-sm btn-default">population <span>{1000}</span></a>
            </div>
            <div className="col-lg-2 col-sm-12" />
            <div className="col-lg-2 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="col-sm-12 col-lg-2">
                <a href="#" className="btn btn-sm">films</a>
              </div>
              <hr/>
              {films.map(film =>
                <div className="col-sm-12 col-lg-10"><a href="#" className="btn btn-sm" key={film}>{film}</a></div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

planetListRow.propTypes = {
  name: PropTypes.string.isRequired,
  films: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired
};

export default planetListRow;
