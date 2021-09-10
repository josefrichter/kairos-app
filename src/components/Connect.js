import { useWallet, WalletStatus } from '@terra-money/wallet-provider';

function Connect() {
    const {
        status,
        network,
        wallets,
        availableConnectTypes,
        availableInstallTypes,
        connect,
        install,
        disconnect,
    } = useWallet();

    return (
        <>
            {status === WalletStatus.WALLET_NOT_CONNECTED && (
                <>
                {availableInstallTypes.map((connectType) => (
                    <button
                    className="w-full btn-default"
                    key={'install-' + connectType}
                    onClick={() => install(connectType)}
                    >
                    Install {connectType}
                    </button>
                ))}
                {availableConnectTypes.map((connectType) => (
                    <button
                    className="w-full btn-default"
                    key={'connect-' + connectType}
                    onClick={() => connect(connectType)}
                    >
                    Connect {connectType}
                    </button>
                ))}
                </>
            )}
            {status === WalletStatus.WALLET_CONNECTED && (
                <button 
                className="bg-kairos-dark text-white active:bg-kairos font-bold uppercase text-xs tracking-widest px-6 py-3 rounded shadow hover:shadow-lg hover:bg-kairos outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={
                    () => disconnect()
                }>
                Disconnect
                </button>
            )}
        </>
    )

}

export default Connect;