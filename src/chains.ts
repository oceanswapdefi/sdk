export enum ChainId {
  PULSE_TESTNET = 942
}

interface StakingContract {
  address: string;
  active: boolean;
  reward_token: string;
}

export interface Chain {
  id: string;
  name: string;
  chain_id?: number;
  mainnet: boolean;
  evm: boolean;
  pangolin_is_live: boolean;
  tracked_by_debank: boolean;
  supported_by_gelato: boolean;
  rpc_uri: string;
  subgraph?: {
    exchange: string;
  }
  symbol: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  }
  blockExplorerUrls?: string[]
  png_symbol?: string;
  logo?: string;
  coingecko_id?: string;
  debank_pangolin_id?: string;
  contracts?: {
    png: string;
    factory: string;
    router: string;
    wrapped_native_token: string;
    local_multisig?: string;
    community_treasury?: string;
    treasury_vester?: string;
    mini_chef?: string;
    timelock?: string;
    migrator?: string;
    airdrop?: string;
    foundation_multisig?: string;
    joint_multisig?: string;
    revenue_distributor?: string;
    governor?: string;
    fee_collector?: string;
    staking?: StakingContract[];
  }
}



export const CHAINS: { [chainId in ChainId ]: Chain } = {
  [ChainId.PULSE_TESTNET]: PULSE_TESTNET,
}

export const ALL_CHAINS: Chain[] = [
  PULSE_TESTNET
]
