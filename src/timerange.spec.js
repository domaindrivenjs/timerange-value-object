import {TimeRange} from './timerange.js';

var timerange;

describe('TimeRange', function (){

  it('should validate startTime must be less than endTime ', function () {

    var now = new Date(),
      later = new Date(),
      instantiateTimeRange = function () {
        timerange = new TimeRange( now, later );
      }

    now.setHours( now.getHours() + 1 );

   expect( instantiateTimeRange ).to.throw( /endTime must be greater or equal startTime/ );

  });
});
