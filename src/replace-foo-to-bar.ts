export function replaceFooToBar(input: string): string {
  return input.replace(/foo\b/gi, "bar");
}
