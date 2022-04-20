import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

ManageConnect.prototype = {
  data: PropTypes.object,
}
export default function ManageConnect() {
  return (
    <>
      <p className="text-2xl font-bold mb-6 text-center lg:text-left">
        Manage Your $AET
      </p>

      <div className="border rounded-xl shadow-lg bg-white p-6 mb-8">
        <div className="bg-lime-50 border border-lime-100 rounded-xl p-5 ">
          <span>Connect your wallet to track your AET tokens.</span>&nbsp;
          <Link to="#" className="underline hover:text-green-500">Connect wallet on {process.env.NETWORK_NAME}</Link>
        </div>
      </div>

    </>
  )
}