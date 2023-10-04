if (import.meta.main) {
  const kv = await Deno.openKv();
  kv.listenQueue((message: unknown) => {
    console.log(message);
  });
}
