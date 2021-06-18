import Loader from "react-loader-spinner";
import PropTypes from 'prop-types';

const Loading = () => {
  return (
    <div style={{ textAlign: "center"}}>
      	<Loader className="flex justify-center items-center" type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loading;

Loading.propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string
  };
