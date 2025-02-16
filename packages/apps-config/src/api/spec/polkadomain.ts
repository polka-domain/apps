// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type {OverrideBundleDefinition} from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        CurrencyId: {
          _enum: {
            Token: 'TokenSymbol',
          }
        },
        CurrencyIdOf: 'CurrencyId',
        Amount: 'i128',
        AmountOf: 'Amount',
        Order: {
          base_currency_id: 'CurrencyId',
          base_amount: 'Compact<Balance>',
          target_currency_id: 'CurrencyId',
          target_amount: 'Compact<Balance>',
          owner: 'AccountId'
        },
        OrderOf: 'Order',
        OrderId: 'u32',
        Balance: 'u128',
        AuctionId: 'u32',
        CID: 'Vec<u8>',
        ClassId: 'u32',
        ClassIdOf: 'ClassId',
        TokenId: 'u64',
        TokenIdOf: 'TokenId',
        ClassInfoOf: {
          metadata: 'CID',
          totalIssuance: 'TokenId',
          owner: 'AccountId',
          data: 'ClassData'
        },
        TokenInfoOf: {
          metadata: 'CID',
          owner: 'AccountId',
          data: 'TokenData'
        },
        ClassData: {
          deposit: 'Balance',
          properties: 'Properties'
        },
        TokenData: {
          deposit: 'Balance'
        },
        Properties: {
          _set: {
            _bitLength: 8,
            Transferable: 1,
            Burnable: 2
          }
        },
        DomainInfo: {
          native: 'AccountId',
          bitcoin: 'Option<MultiAddress>',
          ethereum: 'Option<MultiAddress>',
          polkadot: 'Option<MultiAddress>',
          kusama: 'Option<MultiAddress>',
          deposit: 'Balance',
          nft_token: '(ClassId, TokenId)'
        },
        TokenSymbol: {
          _enum: {
            NAME: 0,
            AUSD: 1,
            DOT: 2,
            LDOT: 3,
            RENBTC: 4,
            KAR: 128,
            KUSD: 129,
            KSM: 130,
            LKSM: 131
          }
        },
        PoolDetails: {
          maker: 'AccountId',
          taker: 'Option<AccountId>',
          token0: '(ClassId, TokenId)',
          token1: 'CurrencyId',
          total1: 'Balance'
        },
        AuctionDetails: {
          creator: 'AccountId',
          winner: 'Option<AccountId>',
          token0: '(ClassId, TokenId)',
          token1: 'CurrencyId',
          min1: 'Balance',
          duration: 'BlockNumber',
          start_at: 'BlockNumber'
        }
      }
    }
  ]
};

export default definitions;
