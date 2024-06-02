import React from "react";
import { getData } from "./_action";
import Card from "./_component/Card";

async function Home() {
  const data = await getData();
  return (
    <section>
      <Card item={data} />
    </section>
  );
}

export default Home;
