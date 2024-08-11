import { useEffect, useState } from 'react'

import { StoreApi, UseBoundStore } from 'zustand'

const usePersistedStore = <T, V>(
  useStore: UseBoundStore<StoreApi<T>>,
  initialStore: T,
  selector: (store: T) => V,
) => {
  const [hydrated, setHydrated] = useState(false)
  const storeState = useStore(selector)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated ? storeState : selector(initialStore)
}

export default usePersistedStore
