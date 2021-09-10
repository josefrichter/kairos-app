import { MsgSend, StdFee } from '@terra-money/terra.js';
import {
  CreateTxFailed,
  Timeout,
  TxFailed,
  TxResult,
  TxUnspecifiedError,
  useConnectedWallet,
  UserDenied,
} from '@terra-money/wallet-provider';
import React, { useCallback, useState } from 'react';

const toAddress = 'terra12hnhh5vtyg5juqnzm43970nh4fw42pt27nw9g9';

export default function TxSample() {
  const [txResult, setTxResult] = useState(null);
  const [txError, setTxError] = useState(null);
  const connectedWallet = useConnectedWallet();
  const send = useCallback(() => {
      if (!connectedWallet) {
          return;
      }
      if (connectedWallet.network.chainID.startsWith('columbus')) {
          alert(`Please only execute this example on Testnet`);
          return;
      }
      setTxResult(null);
      connectedWallet
          .post({
          fee: new StdFee(1000000, '200000uusd'),
          msgs: [
              new MsgSend(connectedWallet.walletAddress, toAddress, {
                  uusd: 1000000,
              }),
          ],
      })
          .then((nextTxResult) => {
          console.log(nextTxResult);
          setTxResult(nextTxResult);
      })
          .catch((error) => {
          if (error instanceof UserDenied) {
              setTxError('User Denied');
          }
          else if (error instanceof CreateTxFailed) {
              setTxError('Create Tx Failed: ' + error.message);
          }
          else if (error instanceof TxFailed) {
              setTxError('Tx Failed: ' + error.message);
          }
          else if (error instanceof Timeout) {
              setTxError('Timeout');
          }
          else if (error instanceof TxUnspecifiedError) {
              setTxError('Unspecified Error: ' + error.message);
          }
          else {
              setTxError('Unknown Error: ' +
                  (error instanceof Error ? error.message : String(error)));
          }
      });
  }, [connectedWallet]);

  return (
    <div>
      <h3 className="text-kairos-dark text-2xl font-bold mb-2 mt-10">Example Tx</h3>
      {connectedWallet?.availablePost && !txResult && !txError && (
        <div>
          <p className="text-gray-400 mb-2">Send 1USD to {toAddress}</p>
          <button 
            className="bg-kairos-dark text-white active:bg-kairos font-bold uppercase text-xs tracking-widest px-6 py-3 rounded shadow hover:shadow-lg hover:bg-kairos outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={send}>Send</button>
        </div>
      )}
      {txResult && (
        <>
          <pre>{JSON.stringify(txResult, null, 2)}</pre>
          {connectedWallet && txResult && (
            <a
              className="text-kairos underline"
              href={`https://finder.terra.money/${connectedWallet.network.chainID}/tx/${txResult.result.txhash}`}
              target="_blank"
              rel="noreferrer"
            >
              Open Tx Result in Terra Finder
            </a>
          )}
          <br/>
          <button 
            className="text-kairos underline"
            onClick={() => setTxResult(null)}>Clear Tx Result</button>
        </>
      )}
      {txError && (
        <>
          <pre>{txError}</pre>
          <button onClick={() => setTxError(null)}>Clear Tx Error</button>
        </>
      )}
      {!connectedWallet && <p>Wallet not connected!</p>}
      {connectedWallet && !connectedWallet.availablePost && (
        <p>Can not post Tx</p>
      )}
    </div>
  );
}