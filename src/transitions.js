/**
 * Shared page transition variants — "scrapbook paper shuffle"
 * direction: 1 = forward (right→left), -1 = backward (left→right)
 */
export const pageVariants = {
  initial: (dir) => ({
    x: dir >= 0 ? '105%' : '-105%',
    rotateZ: dir >= 0 ? 1.5 : -1.5,
    opacity: 0,
  }),
  animate: {
    x: 0,
    rotateZ: 0,
    opacity: 1,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir >= 0 ? '-28%' : '28%',
    rotateZ: dir >= 0 ? -1 : 1,
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.36, ease: [0.64, 0, 0.78, 0] },
  }),
}

export const splashVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -28, scale: 0.97, transition: { duration: 0.38, ease: [0.76, 0, 0.24, 1] } },
}
