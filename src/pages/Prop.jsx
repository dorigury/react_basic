const Prop = (props) => {
    console.log(props);
    return (
        <div className="prop-page page">
          <h2>Prop.jsx</h2>
          <p>이름: {props.name}</p>
          <p>나이: {props.age}</p>
          <p>국적: {props.nation}</p>
        </div>
    );
};

export default Prop;