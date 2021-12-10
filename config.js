const HOME = process.env.HOME;
const OCEAN_PY_PATH = `${HOME}/Ocean/ocean.py/`;
const OCEAN_ARTIFACTS_PATH = `${HOME}/.ocean/ocean-contracts/artifacts/`;

const CONTRACT_BASE = "ocean_lib/web3_internal/contract_base.py";
const BTOKEN_BASE = "ocean_lib/models/v4/btoken.py";
const ERC20_TOKEN_BASE = "ocean_lib/models/v4/erc20_token.py";
const ERCTOKEN_FACTORY_BASE = "ocean_lib/models/v4/erc_token_factory_base.py";
const FACTORY_ROUTER_BASE = "ocean_lib/models/bfactory.py";

const relativePaths = [
  [
    ["ocean_lib/models/v4/bfactory.py", CONTRACT_BASE],
    "contracts/pools/balancer/BFactory.sol/BFactory.json",
  ],
  [
    ["ocean_lib/models/v4/bpool.py", BTOKEN_BASE, CONTRACT_BASE],
    "contracts/pools/balancer/BPool.sol/BPool.json",
  ],
  [
    ["ocean_lib/models/v4/btoken.py", CONTRACT_BASE],
    "contracts/pools/balancer/BToken.sol/BToken.json",
  ],
  [
    ["ocean_lib/models/v4/dispenser.py", CONTRACT_BASE],
    "contracts/pools/dispenser/Dispenser.sol/Dispenser.json",
  ],
  [
    [
      "ocean_lib/models/v4/erc20_enterprise.py",
      ERC20_TOKEN_BASE,
      CONTRACT_BASE,
    ],
    "contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json",
  ],
  [
    [ERC20_TOKEN_BASE, CONTRACT_BASE],
    "@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json",
  ],
  [
    [
      "ocean_lib/models/v4/erc721_factory.py",
      ERCTOKEN_FACTORY_BASE,
      CONTRACT_BASE,
    ],
    "@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json",
  ],
  [
    [
      "ocean_lib/models/v4/erc721_factory.py",
      ERCTOKEN_FACTORY_BASE,
      CONTRACT_BASE,
    ],
    "@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json",
  ],
  [
    ["ocean_lib/models/v4/erc721_token.py", CONTRACT_BASE],
    "contracts/utils/ERC721/ERC721.sol/ERC721.json",
  ],
  [
    ["ocean_lib/models/v4/erc721_token.py", CONTRACT_BASE],
    "contracts/utils/ERC721/ERC721.sol/ERC721.json",
  ],
  [
    [
      "ocean_lib/models/v4/factory_router.py",
      FACTORY_ROUTER_BASE,
      CONTRACT_BASE,
    ],
    "contracts/pools/FactoryRouter.sol/FactoryRouter.json",
  ],
  [
    ["ocean_lib/models/v4/fixed_rate_exchange.py", CONTRACT_BASE],
    "contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json",
  ],
  [
    ["ocean_lib/models/v4/fixed_rate_exchange.py", CONTRACT_BASE],
    "contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json",
  ],
  [
    ["ocean_lib/models/v4/side_staking.py", CONTRACT_BASE],
    "contracts/pools/ssContracts/SideStaking.sol/SideStaking.json",
  ],
];

exports.paths = relativePaths.map((pair) => [
  pair[0].map((p) => OCEAN_PY_PATH + p),
  OCEAN_ARTIFACTS_PATH + pair[1],
]);
