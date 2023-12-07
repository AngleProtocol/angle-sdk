import { ContractsRegistryType } from '../contracts';

const addresses: ContractsRegistryType['1'] = {
  agEUR: {
    AgToken: '0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8',
    bridges: {
      LayerZero: '0x4Fa745FCCC04555F2AFA8874cd23961636CdF982',
    },
    borrowCollaterals: {
      bIB01: {
        Oracle: '0x85C13d1c929774Cb8173dcd0b268c5a9784cF093',
        VaultManager: '0x913E8e1eD659C27613E937a6B6119b91D985094c',
      },
      bHIGH: {
        Oracle: '0xC1603c0d679aeFC8e8a82b543B8855927625155A',
        VaultManager: '0x9FFC8A23eafc25635DAe822eA9c4fF440226a001',
      },
      cbETH: {
        Oracle: '0xf98a200257aaCf48599aceccF9213B66b2C9dD8C',
        VaultManager: '0xE1C084e6E2eC9D32ec098e102a73C4C27Eb9Ee58',
      },
      LUSD: {
        Oracle: '0xE37ff75D665066292D350fF4BCD2679fc1814cb3',
        VaultManager: '0x8E2277929B2D849c0c344043D9B9507982e6aDd0',
      },
      USDC: {
        Oracle: '0x8c55A4145Ca4FF8830f39F74feED9059f1BDce68',
        VaultManager: '0x96de5c30F2BF4683c7903F3e921F720602F8868A',
      },
      wBTC: {
        Oracle: '0xd23269834c450D4978968D1b118172385bB2348d',
        VaultManager: '0x241D7598BD1eb819c0E9dEd456AcB24acA623679',
      },
      wETH: {
        Oracle: '0xc0837E3EC218f1A768BE4207ba47Fb632915289a',
        VaultManager: '0x1beCE8193f8Dc2b170135Da9F1fA8b81C7aD18b1',
      },
      wSTETH: {
        Oracle: '0x885448f5fC6F636901cc0cc92ef7477aE132bAF0',
        VaultManager: '0x73aaf8694BA137a7537E7EF544fcf5E2475f227B',
      },
      'cvx-crvFRAXUSDC': {
        Oracle: '0xAF2dAa417F1a5Eb6DBFaA4B434929a36B4d66Fc8',
        VaultManager: '0x0652B4b3D205300f9848f0431296D67cA4397f3b',
        additionalProperties: {
          LPToken: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B'],
          Staker: '0xC68421f20bf6f0Eb475F00b9C5484f7D0AC0331e',
          Swapper: '0xe1A6D84604C5B17f5fd1fCcbA4c385A8b9670266',
        },
      },
      'cvx-3CRV': {
        Oracle: '0x93A3A7ACA63415077de65c415c90A9e490825721',
        VaultManager: '0x0B3AF9fb0DE42AE70432ABc5aaEaB8F9774bf87b',
        additionalProperties: {
          LPToken: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B'],
          Staker: '0xbff202E3Cb58aB0A09b2Eb1D9a50352B9aAf196c',
          Swapper: '0x490Bc019DE997F1F94e3063560e4d412E19A9d72',
        },
      },
      'cvx-crvLUSD3CRV': {
        Oracle: '0x85a2a9EDa073bd489392e8D4Ea71461fD99EF6A6',
        VaultManager: '0x989ed2DDCD4D2DC237CE014432aEb40EfE738E31',
        additionalProperties: {
          LPToken: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B'],
          Staker: '0x9650821B3555Fe6318586BE997cc0Fb163C35976',
          Swapper: '0x7A4C8a54C254E4ed02D4E90ff3CBBc72cC980d38',
        },
      },
      'sd-crvFRAXUSDC': {
        Oracle: '0xAF2dAa417F1a5Eb6DBFaA4B434929a36B4d66Fc8',
        VaultManager: '0xdEeE8e8a89338241fe622509414Ff535fB02B479',
        additionalProperties: {
          LPToken: '0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F'],
          Staker: '0xa9d2Eea75C80fF9669cc998c276Ff26D741Dcb26',
          Swapper: '0x71E1AE62EA08A7D1AB1A142b7C6fADc43450ED22',
        },
      },
      'sd-3CRV': {
        Oracle: '0x93A3A7ACA63415077de65c415c90A9e490825721',
        VaultManager: '0x29e9D3D8e295E23B1B39DCD3D8D595761E032306',
        additionalProperties: {
          LPToken: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F'],
          Staker: '0xe80298eE8F54a5e1b0448bC2EE844901344469bc',
          Swapper: '0xBDFDE284c7d8E712214c037C7f4c9F321A95e28C',
        },
      },
      'sd-crvLUSD3CRV': {
        Oracle: '0x85a2a9EDa073bd489392e8D4Ea71461fD99EF6A6',
        VaultManager: '0xe0C8B6c4ea301C8A221E8838ca5B80Ac76E7A10b',
        additionalProperties: {
          LPToken: '0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA',
          Rewards: ['0xD533a949740bb3306d119CC777fa900bA034cd52', '0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F'],
          Staker: '0x97F0A7954904a7357D814ACE2896021496e5f321',
          Swapper: '0x633bA1eeDbE63a779Eca6A1EbE86908Ac2710D0b',
        },
      },
    },
    collaterals: {
      DAI: {
        FeeManager: '0xE6d9bD6796bDAF9B391Fac2A2D34bAE9c1c3c1C4',
        LiquidityGauge: '0x8E2c0CbDa6bA7B65dbcA333798A3949B07638026',
        Oracle: '0xb41A7CE1Def5a9557695C6Ca0B63fAF05F99daA5',
        PerpetualManager: '0xfc8f9eefC5FCe1D9dAcE2B0a11A1e184381787C4',
        PoolManager: '0xc9daabC677F3d1301006e723bD21C60be57a5915',
        SanToken: '0x7B8E89b0cE7BAC2cfEC92A371Da899eA8CBdb450',
        Staking: '0x65e4992250B296790c07FAdF0f0723902a07E91d',
      },
      FEI: {
        FeeManager: '0x4A5E967100CA28566CB2A39216992C6dB57e95A4',
        LiquidityGauge: '0x7c0fF11bfbFA3cC2134Ce62034329a4505408924',
        Oracle: '0x236D9032d96226b900B0D557Ae6Fd202f3a26b6a',
        PerpetualManager: '0x98fDBC5497599eFF830923ea1EE152Adb9a4cEA5',
        PoolManager: '0x53b981389Cfc5dCDA2DC2e903147B5DD0E985F44',
        SanToken: '0x5d8D3Ac6D21C016f9C935030480B7057B21EC804',
        Staking: '0x3d7E670d105e8FBcAE3BF2bFC54324302cDb6aD5',
      },
      FRAX: {
        FeeManager: '0x9c8438713cEa5466125f0331d9d875Ea43115bc9',
        LiquidityGauge: '0xb40432243E4F317cE287398e72Ab8f0312fc2FE8',
        Oracle: '0x98aa7123e524F7d60DaE238Bdd35ec53a654cf69',
        PerpetualManager: '0x4121a258674e507c990cDF390F74d4EF27592114',
        PoolManager: '0x6b4eE7352406707003bC6f6b96595FD35925af48',
        Adapter4626Stakable: '0x14244978b1CC189324C3e35685D6Ae2F632e9846',
        SanToken: '0xb3B209Bb213A5Da5B947C56f2C770b3E1015f1FE',
        Staking: '0xbB9485e2b9B0da40Db3874A144700e31bd9c40C2',
      },
      USDC: {
        FeeManager: '0x97B6897AAd7aBa3861c04C0e6388Fc02AF1F227f',
        LiquidityGauge: '0x51fE22abAF4a26631b2913E417c0560D547797a7',
        Oracle: '0xccaC05D378342B4717195d3436a4Cb083ca604bc',
        PerpetualManager: '0x5efE48F8383921d950683C46B87E28e21DEa9FB5',
        PoolManager: '0xe9f183FC656656f1F17af1F2b0dF79b8fF9ad8eD',
        SanToken: '0x9C215206Da4bf108aE5aEEf9dA7caD3352A36Dad',
        Staking: '0x2Fa1255383364F6e17Be6A6aC7A56C9aCD6850a3',
      },
      wETH: {
        FeeManager: '0x3C69835bc56cf4F356CdedE634415f847DaA4753',
        Oracle: '0xF7bE58afEa895c3Dde1dbe4CfdB5a815d990fE3c',
        PerpetualManager: '0xB924497a1157B1F8835c93cb7F3d4Aa6D2f227BA',
        PoolManager: '0x3f66867b4b6eCeBA0dBb6776be15619F73BC30A2',
        SanToken: '0x30c955906735e48D73080fD20CB488518A6333C8',
      },
    },
    OracleTokenUSD: '0xb49f677943BC038e9857d61E7d053CaA2C1734C1',
    Savings: '0x004626A008B1aCdC4c74ab51644093b155e59A23',
    StableMaster: '0x5adDc89785D75C86aB939E9e15bfBBb7Fc086A87',
    Staking: '0xb1F2A25fFB2b095E99f430cAF507cC31F9A3EaAB',
    Swapper: '0x4E4A605c1F2E3303e6967Cb6D3D964474Eb3C4Fd',
    SwapperV2: '0x601057CaAE843Bf34598217E95FB572F5e04186e',
    Treasury: '0x8667DBEBf68B0BFa6Db54f550f41Be16c4067d60',
    Transmuter: '0x00253582b2a3FE112feEC532221d9708c64cEFAb',
  },
  agGOLD: {
    AgToken: '0x5F27184fA83fE0E5aEf2344B6D9eB3Bd2118A290',
    borrowCollaterals: {
      USDC: {
        Oracle: '0x25340624EF3f8047bBc0d8A2bf2d6D49A6671E2C',
        VaultManager: '0x1B396Aee50bb55cEB5e316996fc86b360f654463',
      },
      wETH: {
        Oracle: '0x6Eca8E792a178DCd863E1d4831D38FB9CC984cD9',
        VaultManager: '0x72AC0731baF3f3a632A609a3E20F9E4743440B91',
      },
      wSTETH: {
        Oracle: '0x576e414fB89C54a21422b0A6feBd6AE2348F42e4',
        VaultManager: '0xBA018E91C5E11B2A0B74055235095Ef13cC68f3a',
      },
    },
    OracleTokenUSD: '0x214eD9Da11D2fbe465a6fc601a91E62EbEc1a0D6',
    Swapper: '0x4E4A605c1F2E3303e6967Cb6D3D964474Eb3C4Fd',
    SwapperV2: '0x601057CaAE843Bf34598217E95FB572F5e04186e',
    Treasury: '0x19F925a26A3a8eeE2438603CB04F39cbC007EfFB',
  },
  ANGLE: '0x31429d1856aD1377A8A0079410B297e1a9e214c2',
  AngleHelpers: '0x1B17ac6B8371D63E030C5981891d5FBb3E4e068E',
  AngleDistributor: '0x4f91F01cE8ec07c9B1f6a82c18811848254917Ab',
  AngleRouter: '0xBB755240596530be0c1DE5DFD77ec6398471561d',
  AngleRouterV2: '0x4579709627CA36BCe92f51ac975746f431890930',
  bridges: {
    LayerZero: '0x1056178977457A5F4BE33929520455A7d2E28670',
  },
  Core: '0x61ed74de9Ca5796cF2F8fD60D54160D47E30B7c3',
  CoreBorrow: '0x5bc6BEf80DA563EBf6Df6D6913513fa9A7ec89BE',
  FeeDistributor_sanUSDC_EUR: '0x7F82ff050128e29Fd89D85d01b93246F744E62A0',
  FlashAngle: '0x4A2FF9bC686A0A23DA13B6194C69939189506F7F',
  GaugeController: '0x9aD7e7b0877582E14c17702EecF49018DD6f2367',
  Governor: '0xdC4e6DFe07EFCa50a197DF15D9200883eF4Eb1c8',
  Guardian: '0x0C2553e4B9dFA9f83b1A6D3EAB96c4bAaB42d430',
  KeeperMulticall: '0xa0062b7A5e494d569059E2f1A98B5f6C99BFAAfe',
  KeeperRegistry: '0xc48B15492A4c4F48808576f6fCbC6dea9388E942',
  Merkl: {
    CoreMerkl: '0x0E632a15EbCBa463151B5367B4fCF91313e389a6',
    DistributionCreator: '0x8BB4C975Ff3c250e0ceEA271728547f3802B36Fd',
    Distributor: '0x3Ef3D8bA38EBe18DB133cEc108f4D14CE00Dd9Ae',
  },
  MerkleRootDistributor: '0x5a93D504604fB57E15b0d73733DDc86301Dde2f1',
  MerklGaugeMiddleman: '0x46918e4b0e64279c1d5f16D13aEB0c7BCd210b87',
  Middleman: '0x4B00103802Da5f51A9218010a1073Ea432165f13',
  MulticallWithFailure: '0xbd26A92D587981482B4Eec012d13fA0D55ca0135',
  OracleNativeUSD: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  ProxyAdmin: '0x1D941EF0D3Bba4ad67DBfBCeE5262F4CEE53A32b',
  ProxyAdminGuardian: '0xD9F1A8e00b0EEbeDddd9aFEaB55019D55fcec017',
  RewardsDistributor: '0xC06481fc1D0196C138770fD2148DCB306cB24E20',
  SmartWalletWhitelist: '0xAa241Ccd398feC742f463c534a610529dCC5888E',
  SurplusConverterSanTokens_EUR_USDC: '0x2E2063080A05FfdaA6D57f9358C2a5e1C65c70EC',
  SurplusConverterUniV3_IntraCollaterals: '0xD302484DC0fB3D50F60E1a2a82c882174aBC6eBe',
  Timelock: '0x5183f032bf42109cD370B9559FD22207e432301E',
  veANGLE: '0x0C462Dbb9EC8cD1630f1728B2CFD2769d09f0dd5',
  veBoostProxy: '0x52701bFA0599db6db2b2476075D9a2f4Cb77DAe3',
};

export default addresses;
