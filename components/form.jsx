const Form = (props) => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        {props.error && error()}

        <div className="row py-2">
          <div className="col-md-4 my-2 mt-md-0">
            <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" />
          </div>
          <div className="col-md-4 my-2 mt-md-0">
            <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off" />
          </div>
          <div className="col-md-4 mt-2 mt-md-0">
            <button className="btn btn-primary fullwidth">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger my-4" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
