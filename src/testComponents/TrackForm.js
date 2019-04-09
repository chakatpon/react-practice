import React from 'react';

class TrackForm extends React.Component {
    render() {
        return(
            <form>
              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Track NO.</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="staticEmail" value="Track NO."/>
                  </div>
              </div>

              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Track ID</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="staticEmail" value="Track ID"/>
                  </div>
              </div>

              <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">Track Name</label>
                  <div class="col-sm-10">
                    <input type="text" readonly class="form-control" id="staticEmail" value="Track Name"/>
                  </div>
              </div>

            </form>

        );

    }
}

export default TrackForm;