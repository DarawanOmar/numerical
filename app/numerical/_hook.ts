function GetFn() {
  const functionToEvaluate = (funcStr: any, x: any) => {
    try {
      const func = new Function("x", `return ${funcStr}`);
      return func(x);
    } catch (error) {
      return null;
    }
  };

  const falsePositionMethod = (a: any, b: any, tol: any, funcStr: any) => {
    let fa = functionToEvaluate(funcStr, a);
    let fb = functionToEvaluate(funcStr, b);
    let c, fc;
    let iteration = 0;
    let iterArray = [];

    while (true) {
      c = b - fb * ((b - a) / (fb - fa));
      fc = functionToEvaluate(funcStr, c);
      iterArray.push({ iteration, a, b, c, fc });

      if (Math.abs(fc) < tol) break;

      if (fa * fc < 0) {
        b = c;
        fb = fc;
      } else {
        a = c;
        fa = fc;
      }

      iteration++;
    }
    return { c, iterArray };
  };

  return { functionToEvaluate, falsePositionMethod };
}

export default GetFn;
