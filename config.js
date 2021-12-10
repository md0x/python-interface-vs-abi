const HOME = process.env.HOME;
const OCEAN_PY_PATH = `${HOME}/Ocean/ocean.py/`;
const OCEAN_ARTIFACTS_PATH = `${HOME}/.ocean/ocean-contracts/`;

const CONTRACT_BASE = "ocean_lib/web3_internal/contract_base.py";
const BTOKEN_BASE = "ocean_lib/models/v4/btoken.py";
const ERC20_TOKEN_BASE = "ocean_lib/models/v4/erc20_token.py";
const ERCTOKEN_FACTORY_BASE = "ocean_lib/models/v4/erc_token_factory_base.py";
const FACTORY_ROUTER_BASE = "ocean_lib/models/bfactory.py";

const relativePaths = [
  [
    ["ocean_lib/models/v4/bfactory.py", CONTRACT_BASE],
    [
      "artifacts/contracts/pools/balancer/BFactory.sol/BFactory.json",
      "artifacts/contracts/pools/balancer/BConst.sol/BConst.json",
    ],
  ],
  [
    ["ocean_lib/models/v4/bpool.py", BTOKEN_BASE, CONTRACT_BASE],
    [
      "artifacts/contracts/pools/balancer/BPool.sol/BPool.json",
      "artifacts/contracts/pools/balancer/BMath.sol/BMath.json",
      "artifacts/contracts/pools/balancer/BToken.sol/BToken.json",
    ],
  ],
  [
    ["ocean_lib/models/v4/btoken.py", CONTRACT_BASE],
    [
      "artifacts/contracts/pools/balancer/BToken.sol/BToken.json",
      "artifacts/contracts/pools/balancer/BNum.sol/BNum.json",
    ],
  ],
  [
    ["ocean_lib/models/v4/dispenser.py", CONTRACT_BASE],
    ["artifacts/contracts/pools/dispenser/Dispenser.sol/Dispenser.json"],
  ],
  [
    [
      "ocean_lib/models/v4/erc20_enterprise.py",
      ERC20_TOKEN_BASE,
      CONTRACT_BASE,
    ],
    [
      "artifacts/contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json",
      "artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json",
      "artifacts/contracts/utils/ERC20Roles.sol/ERC20Roles.json",
      "artifacts/@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol/ERC20Burnable.json",
    ],
  ],
  [
    [ERC20_TOKEN_BASE, CONTRACT_BASE],
    ["artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json"],
  ],
  [
    [
      "ocean_lib/models/v4/erc721_factory.py",
      ERCTOKEN_FACTORY_BASE,
      CONTRACT_BASE,
    ],
    ["artifacts/contracts/ERC721Factory.sol/ERC721Factory.json"],
  ],
  [
    ["ocean_lib/models/v4/erc721_token.py", CONTRACT_BASE],
    [
      "artifacts/contracts/utils/ERC721/ERC721.sol/ERC721.json",
      "artifacts/contracts/templates/ERC721Template.sol/ERC721Template.json",
      "artifacts/contracts/utils/ERC721RolesAddress.sol/ERC721RolesAddress.json",
      "artifacts/contracts/utils/ERC725/ERC725Ocean.sol/ERC725Ocean.json",
      "artifacts/contracts/utils/ERC721/IERC721.sol/IERC721.json",
      "artifacts/contracts/utils/ERC721/IERC721Metadata.sol/IERC721Metadata.json",
    ],
  ],
  [
    [
      "ocean_lib/models/v4/factory_router.py",
      FACTORY_ROUTER_BASE,
      CONTRACT_BASE,
    ],
    [
      "artifacts/contracts/pools/FactoryRouter.sol/FactoryRouter.json",
      "artifacts/contracts/pools/balancer/BFactory.sol/BFactory.json",
    ],
  ],
  [
    ["ocean_lib/models/v4/fixed_rate_exchange.py", CONTRACT_BASE],
    [
      "artifacts/contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json",
    ],
  ],
  [
    ["ocean_lib/models/v4/side_staking.py", CONTRACT_BASE],
    ["artifacts/contracts/pools/ssContracts/SideStaking.sol/SideStaking.json"],
  ],
];

exports.paths = relativePaths.map((pair) => [
  pair[0].map((p) => OCEAN_PY_PATH + p),
  pair[1].map((p) => OCEAN_ARTIFACTS_PATH + p),
]);
