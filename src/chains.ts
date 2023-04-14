export enum ChainId {
  PULSE_TESTNET = 942
}

export enum StakingType {
  LEGACY = 'LEGACY',
  SAR_POSITIONS = 'SAR_POSITIONS',
  NEAR_STAKING = 'NEAR_STAKING'
}

interface StakingContract {
  address: string
  active: boolean
  reward_token: string
  type: StakingType
}

export enum AirdropType {
  LEGACY = 'LEGACY',
  MERKLE = 'MERKLE',
  MERKLE_TO_STAKING = 'MERKLE_TO_STAKING',
  MERKLE_TO_STAKING_COMPLIANT = 'MERKLE_TO_STAKING_COMPLIANT',
  NEAR_AIRDROP = 'NEAR_AIRDROP'
}

interface AirdropContract {
  address: string
  active: boolean
  type: AirdropType
}

interface AirdropContractTitled extends AirdropContract {
  title: string
}

export enum ChefType {
  MINI_CHEF = 'MINI_CHEF',
  MINI_CHEF_V2 = 'MINI_CHEF_V2',
  PANGO_CHEF = 'PANGO_CHEF',
  NEAR_CHEF = 'NEAR_CHEF'
}

interface ChefContract {
  address: string
  active: boolean
  type: ChefType
  compoundPoolIdForNonPngFarm?: number // this is compound pool id for non-png farm
}

export enum NetworkType {
  EVM = 'EVM',
  COSMOS = 'COSMOS'
}

export interface BridgeChain extends Omit<Chain, 'chain_id'> {
  chain_id?: number | string
  network_type?: NetworkType
  meta_data?: {
    [key: string]: any
  }
}

export interface Chain {
  id: string
  name: string
  chain_id?: number
  mainnet: boolean
  evm: boolean
  pangolin_is_live: boolean
  tracked_by_debank: boolean
  supported_by_gelato: boolean
  supported_by_twap: boolean
  rpc_uri: string
  subgraph?: {
    exchange?: string
    blocks?: string
    minichef?: string
    pangochef?: string
  }
  symbol: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls?: string[]
  png_symbol?: string
  logo?: string
  coingecko_id?: string
  debank_pangolin_id?: string
  contracts?: {
    png: string
    factory: string
    router: string
    router_daas?: string
    wrapped_native_token: string
    local_multisig?: string
    community_treasury?: string
    treasury_vester?: string
    mini_chef?: ChefContract
    timelock?: string
    migrator?: string
    airdrop?: AirdropContract
    specialAirdrops?: AirdropContractTitled[]
    foundation_multisig?: string
    joint_multisig?: string
    revenue_distributor?: string
    governor?: string
    fee_collector?: string
    multicall: string
    staking?: StakingContract[]
  }
}

export const PULSE_TESTNET: Chain = {
  id: 'pulse_testnet',
  chain_id: 942,
  name: 'PulseChain Testnet V3',
  symbol: 'PLS',
  png_symbol: 'WAVE',
  mainnet: false,
  evm: true,
  logo: 'https://raw.githubusercontent.com/pangolindex/sdk/master/src/images/chains/avax.png',
  pangolin_is_live: false,
  tracked_by_debank: false,
  supported_by_gelato: false,
  supported_by_twap: false,
  rpc_uri: 'https://rpc.v3.testnet.pulsechain.com',
  // subgraph: {
  //   exchange: 'https://api.thegraph.com/subgraphs/name/pangolindex/exchange',
  // },
  // coingecko_id: 'avalanche',
  // debank_pangolin_id: 'avax_pangolin',
  contracts: {
    png: '0x70499adEBB11Efd915E3b69E700c331778628707', // wrapped native - must change!
    factory: '0x3aA799fbBeD860e2Df3623dCAfa557DA27Cb4C62',
    router: '0xB07FE748Cf95DBcb23133088E0b2335C6Ce01A06',
    wrapped_native_token: '0x70499adEBB11Efd915E3b69E700c331778628707',
    multicall: '0x05f32B3cC3888453ff71B01135B34FF8e41263F2',
  //   local_multisig: '0x0',
  //   community_treasury: '0x0',
  //   treasury_vester: '0x0',
  //   mini_chef: '0x0',
  //   airdrop: '0x0',
  //   timelock: '0x0',
  //   governor: '0x0',
  //   migrator: '0x0',
  //   staking: [
  //     {
  //       address: '0x0',
  //       active: true,
  //       reward_token: '0x0',
  //     }
  //   ]
  },
  nativeCurrency:{
    name: 'Pulse',
    symbol: 'PLS',
    decimals: 18,
  },
  blockExplorerUrls: ['https://scan.v3.testnet.pulsechain.com'],
}

export const CHAINS: { [chainId in ChainId ]: Chain } = {
  [ChainId.PULSE_TESTNET]: PULSE_TESTNET,
}

export const ALL_CHAINS: Chain[] = [
  PULSE_TESTNET
]
