export async function loadModule(modulePath: string): Promise<any> {
  const { default: component } = await import(modulePath);
  return component;
}
