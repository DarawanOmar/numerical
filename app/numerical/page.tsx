"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ProfileForm } from "./_component";

const FalsePositionMethod = () => {
  //   const [a, setA] = useState("");
  //   const [b, setB] = useState("");
  //   const [tolerance, setTolerance] = useState("");
  //   const [result, setResult] = useState(0);
  //   const [iterations, setIterations] = useState([]);

  //   const functionToEvaluate = (x) => {
  //     return x ** 3 - x - 2; // Example function: f(x) = x^3 - x - 2
  //   };

  //   const falsePositionMethod = (a, b, tol) => {
  //     let fa = functionToEvaluate(a);
  //     let fb = functionToEvaluate(b);
  //     let c, fc;
  //     let iteration = 0;
  //     let iterArray = [];

  //     while (true) {
  //       c = b - fb * ((b - a) / (fb - fa));
  //       fc = functionToEvaluate(c);
  //       iterArray.push({ iteration, a, b, c, fc });

  //       if (Math.abs(fc) < tol) break;

  //       if (fa * fc < 0) {
  //         b = c;
  //         fb = fc;
  //       } else {
  //         a = c;
  //         fa = fc;
  //       }

  //       iteration++;
  //     }

  //     setIterations(iterArray);
  //     return c;
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const root = falsePositionMethod(
  //       parseFloat(a),
  //       parseFloat(b),
  //       parseFloat(tolerance)
  //     );
  //     setResult(root);
  //   };

  return (
    <div className="mt-20">
      <ProfileForm />
    </div>
    // <div className="container mx-auto p-4">
    //   <h1 className="text-2xl font-bold mb-4">False Position Method</h1>
    //   <form onSubmit={handleSubmit} className="mb-4">
    //     <div className="mb-2">
    //       <label className="block">a:</label>
    //       <input
    //         type="number"
    //         value={a}
    //         onChange={(e) => setA(e.target.value)}
    //         className="border p-2 rounded w-full"
    //         required
    //       />
    //     </div>
    //     <div className="mb-2">
    //       <label className="block">b:</label>
    //       <input
    //         type="number"
    //         value={b}
    //         onChange={(e) => setB(e.target.value)}
    //         className="border p-2 rounded w-full"
    //         required
    //       />
    //     </div>
    //     <div className="mb-2">
    //       <label className="block">Tolerance:</label>
    //       <input
    //         type="number"
    //         step="any"
    //         value={tolerance}
    //         onChange={(e) => setTolerance(e.target.value)}
    //         className="border p-2 rounded w-full"
    //         required
    //       />
    //     </div>
    //     <button type="submit" className="bg-blue-500 text-white p-2 rounded">
    //       Calculate
    //     </button>
    //   </form>
    //   {result !== null && (
    //     <div>
    //       <h2 className="text-xl font-bold">Result:</h2>
    //       <p>Root: {result}</p>
    //     </div>
    //   )}
    //   <div>
    //     <h2 className="text-xl font-bold">Iterations:</h2>
    //     <table className="min-w-full bg-white border">
    //       <thead>
    //         <tr>
    //           <th className="border px-4 py-2">Iteration</th>
    //           <th className="border px-4 py-2">a</th>
    //           <th className="border px-4 py-2">b</th>
    //           <th className="border px-4 py-2">c</th>
    //           <th className="border px-4 py-2">f(c)</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {iterations.map((iter) => (
    //           <tr key={iter.iteration}>
    //             <td className="border px-4 py-2">{iter.iteration}</td>
    //             <td className="border px-4 py-2">{iter.a}</td>
    //             <td className="border px-4 py-2">{iter.b}</td>
    //             <td className="border px-4 py-2">{iter.c}</td>
    //             <td className="border px-4 py-2">{iter.fc}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default FalsePositionMethod;
