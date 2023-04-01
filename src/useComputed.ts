import { useWatch, useState } from 'soursop'

export default function useComputed(computeFn, dependencies) {
  const [computedValue, setComputedValue] = useState(computeFn());

  useWatch(() => {
    setComputedValue(computeFn());
  }, dependencies);

  return computedValue;
}
