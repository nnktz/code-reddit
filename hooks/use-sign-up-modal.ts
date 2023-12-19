import { create } from 'zustand'

interface SignUpModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useSignUpModal = create<SignUpModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
