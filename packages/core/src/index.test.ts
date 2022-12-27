import { expect, test } from 'vitest'

import * as actions from './index'

test('exports actions', () => {
  expect(actions).toMatchInlineSnapshot(`
    {
      "BaseError": [Function],
      "HttpRequestError": [Function],
      "InternalRpcError": [Function],
      "InvalidInputRpcError": [Function],
      "InvalidParamsRpcError": [Function],
      "InvalidRequestRpcError": [Function],
      "JsonRpcVersionUnsupportedError": [Function],
      "LimitExceededRpcError": [Function],
      "MethodNotFoundRpcError": [Function],
      "MethodNotSupportedRpcError": [Function],
      "ParseRpcError": [Function],
      "ResourceNotFoundRpcError": [Function],
      "ResourceUnavailableRpcError": [Function],
      "RpcError": [Function],
      "RpcRequestError": [Function],
      "TimeoutError": [Function],
      "TransactionRejectedRpcError": [Function],
      "UrlRequiredError": [Function],
      "createClient": [Function],
      "createPublicClient": [Function],
      "createTestClient": [Function],
      "createTransport": [Function],
      "createWalletClient": [Function],
      "dropTransaction": [Function],
      "etherUnits": {
        "gwei": 9,
        "wei": 18,
      },
      "ethereumProvider": [Function],
      "formatBlock": [Function],
      "formatEther": [Function],
      "formatGwei": [Function],
      "formatTransaction": [Function],
      "formatTransactionRequest": [Function],
      "formatUnit": [Function],
      "getAddress": [Function],
      "getAutomine": [Function],
      "getBalance": [Function],
      "getBlock": [Function],
      "getBlockNumber": [Function],
      "getBlockTransactionCount": [Function],
      "getChainId": [Function],
      "getTransaction": [Function],
      "getTransactionConfirmations": [Function],
      "getTransactionCount": [Function],
      "getTransactionReceipt": [Function],
      "getTxpoolContent": [Function],
      "getTxpoolStatus": [Function],
      "gweiUnits": {
        "ether": -9,
        "wei": 9,
      },
      "hexToNumber": [Function],
      "http": [Function],
      "impersonateAccount": [Function],
      "increaseTime": [Function],
      "inspectTxpool": [Function],
      "isAddress": [Function],
      "isAddressEqual": [Function],
      "mine": [Function],
      "numberToHex": [Function],
      "parseEther": [Function],
      "parseGwei": [Function],
      "parseUnit": [Function],
      "removeBlockTimestampInterval": [Function],
      "requestAccounts": [Function],
      "reset": [Function],
      "revert": [Function],
      "sendTransaction": [Function],
      "sendUnsignedTransaction": [Function],
      "setAutomine": [Function],
      "setBalance": [Function],
      "setBlockGasLimit": [Function],
      "setBlockTimestampInterval": [Function],
      "setCode": [Function],
      "setCoinbase": [Function],
      "setIntervalMining": [Function],
      "setLoggingEnabled": [Function],
      "setMinGasPrice": [Function],
      "setNextBlockBaseFeePerGas": [Function],
      "setNextBlockTimestamp": [Function],
      "setNonce": [Function],
      "setStorageAt": [Function],
      "snapshot": [Function],
      "stopImpersonatingAccount": [Function],
      "transactionType": {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
      },
      "waitForTransactionReceipt": [Function],
      "watchBlockNumber": [Function],
      "watchBlocks": [Function],
      "webSocket": [Function],
      "weiUnits": {
        "ether": -18,
        "gwei": -9,
      },
    }
  `)
})
