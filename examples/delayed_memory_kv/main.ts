if (import.meta.main) {
  const kv = await Deno.openKv(":memory:");
  kv.listenQueue((message: unknown) => {
    console.log(message);
  });
  kv.enqueue("Hello World!", {
    delay: 10 * 1e3,
  });
}
