if (import.meta.main) {
  const kv = await Deno.openKv(":memory:");
  kv.listenQueue((message: unknown) => {
    console.log(message);
  });
}
