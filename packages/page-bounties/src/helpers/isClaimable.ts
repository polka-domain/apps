// Copyright 2017-2020 @polkadot/app-council authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId } from '@polkadot/types/interfaces';

import BN from 'bn.js';

export function isClaimable (accounts: string[], beneficiary: AccountId, payoutDue: BN): boolean {
  return payoutDue.ltn(0) && accounts.includes(beneficiary.toString());
}
