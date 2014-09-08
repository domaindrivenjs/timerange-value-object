var startTime = Symbol(),
  endTime = Symbol();

export class TimeRange {
  constructor ( start, end ) {

    // TODO validate parameter are (castable to) date type
    // ...

    if ( end < start ) {
      throw new Error('endTime must be greater or equal startTime');
    }

    this[ startTime ] = start;
    this[ endTime ] = end;
  }

  get start () {
    return this[ startTime ];
  }

  get end () {
    return this[ endTime ];
  }

  toString () {
    //TODO use string interpolation!
    return 'from: ' + this[ startTime ].toTimeString() + ' to: ' + this[ endTime ].toTimeString();
  };
}

