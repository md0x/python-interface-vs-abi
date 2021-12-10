const fs = require("fs");

const { paths } = require("./config");

const getRegexMatches = (regex, str) => {
  const results = [];
  let m = regex.exec(str);
  while (m !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      if (groupIndex === 1) results.push(match);
    });

    m = regex.exec(str);
  }
  return results;
};

const parsePythonInterface = (paths) => {
  const payableRegex = /self\.send_transaction\([\s]*"(.*)"/gm;
  const eventsRegex = /self\.events\.(.*)\(/gm;
  const viewFunctionsRegex = /self\.contract\.caller\.(.*)\(/gm;

  const output = { event: [], view: [], nonpayable: [] };

  paths.forEach((path) => {
    const str = fs.readFileSync(path, "utf8");
    output.nonpayable = output.nonpayable.concat(
      getRegexMatches(payableRegex, str)
    );
    output.view = output.view.concat(getRegexMatches(viewFunctionsRegex, str));
    output.event = output.event.concat(getRegexMatches(eventsRegex, str));
  });

  return output;
};

const parseAbi = (paths) => {
  const event = [];
  const view = [];
  const nonpayable = [];
  paths.forEach((path) => {
    const str = fs.readFileSync(path, "utf8");
    const input = JSON.parse(str).abi;
    input.forEach((el) => {
      if (el.type === "event" && !event.includes(el.name)) {
        return event.push(el.name);
      }
      if (el.type === "function") {
        if (el.stateMutability === "view" && !view.includes(el.name))
          return view.push(el.name);
        if (!nonpayable.includes(el.name)) nonpayable.push(el.name);
      }
    });
  });

  return {
    event,
    view,
    nonpayable,
  };
};

const getDiff = (pythonInterfacePaths, artifactPaths) => {
  const parsedPython = parsePythonInterface(pythonInterfacePaths);
  const parsedAbi = parseAbi(artifactPaths);

  console.log(parsedPython)
  console.log(parsedAbi)

  const extraStuff = {};
  const missingStuff = {};

  Object.entries(parsedPython).forEach(([key, value]) => {
    extraStuff[key] = [];
    value.forEach((el) => {
      if (!parsedAbi[key].includes(el) && !extraStuff[key].includes(el)) {
        extraStuff[key].push(el);
      }
    });
  });

  Object.entries(parsedAbi).forEach(([key, value]) => {
    missingStuff[key] = [];
    value.forEach((el) => {
      if (!parsedPython[key].includes(el)) {
        missingStuff[key].push(el);
      }
    });
  });

  return { extraStuff, missingStuff };
};

const getFileName = (path) => path.slice(path.lastIndexOf("/") + 1);

paths.forEach((pths) => {
  const { extraStuff, missingStuff } = getDiff(pths[0], pths[1]);
  console.log(
    `\n**** COMPARING ${pths[0]
      .map((p) => getFileName(p))
      .join(", ")} and ${pths[1]
        .map((p) => getFileName(p))
        .join(", ")} ****\n`
  );
  console.log("Interface vs ABI \n");
  // Present in python interface but not present in contract ABI. Possible reasons: missing, became internal function, changes in contract ...
  console.log(extraStuff);
  console.log("\nABI vs interface \n");
  //Present in contract ABI but not present in python interface. Possible reasons: missing, changes in contract ...
  console.log(missingStuff);
});
