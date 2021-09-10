import React from "react";
import Connect from './Connect.js'

export default function ConnectModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="absolute top-4 right-4 z-50 btn-default"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Connect Wallet
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative px-6 pt-6 flex-auto">
                  <Connect />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}