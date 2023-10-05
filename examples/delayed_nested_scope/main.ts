if (import.meta.main) {
  await main();
}

async function main() {
  const kv = await Deno.openKv();
  kv.listenQueue((message: unknown) => {
    console.log(message);
  });
  kv.enqueue("Hello World!", {
    delay: 10 * 1e3,
  });
}
