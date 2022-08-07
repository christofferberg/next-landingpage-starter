import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import clsx from 'clsx'
import type { Variants } from 'framer-motion'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useToggle } from 'react-use'

import {
  Cross2Icon,
  ExternalLinkIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'

import { mobileMenuLinks } from '@config/routes'

import { Container } from '@components/elements/Container'

const menuToggleContainerVariants: Variants = {
  initial: {},
  animate: {},
  exit: {},
}

const menuToggleVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { scale: 0, opacity: 0 },
}

const menuToggleLabelVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const menuContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
}

const menuListVariants: Variants = {
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}

const menuItemVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', damping: 18, stiffness: 160 },
  },
  exit: {
    opacity: 0,
    x: -14,
    transition: { type: 'spring', damping: 18, stiffness: 160 },
  },
}

const MotionIcon = ({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) => {
  return (
    <motion.div
      variants={menuToggleContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex flex-col items-center justify-center"
    >
      <motion.div variants={menuToggleVariants} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>

      <motion.span
        variants={menuToggleLabelVariants}
        transition={{ duration: 0.2 }}
        className="text-xs"
      >
        {label}
      </motion.span>
    </motion.div>
  )
}

export const MobileMenu = () => {
  const [open, toggleOpen] = useToggle(false)
  const router = useRouter()

  // Prevent scrolling when menu is open
  useEffect(() => {
    const noScroll = ['overflow-hidden', 'fixed']

    if (open) {
      document.body.classList.add(...noScroll)
    } else {
      document.body.classList.remove(...noScroll)
    }

    return () => {
      document.body.classList.remove(...noScroll)
    }
  }, [open, toggleOpen])

  return (
    <>
      <div className="flex flex-row-reverse items-center gap-4">
        <button
          onClick={toggleOpen}
          className="relative h-[50px] w-[40px]"
          aria-label="Open/close menu"
          data-test-id="mobile-menu"
        >
          <AnimatePresence initial={false}>
            {open ? (
              <MotionIcon key="close" label="Luk">
                <Cross2Icon width={30} height={30} />
              </MotionIcon>
            ) : (
              <MotionIcon key="open" label="Menu">
                <HamburgerMenuIcon width={30} height={30} />
              </MotionIcon>
            )}
          </AnimatePresence>
        </button>
      </div>

      <Dialog.Root open={open} modal={false}>
        <Dialog.Portal forceMount>
          <div>
            <AnimatePresence initial={false} exitBeforeEnter>
              {open ? (
                <motion.div
                  key="menu-container"
                  variants={menuContainerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="fixed left-0 bottom-0 right-0 top-[110px] z-40 bg-gray-2"
                >
                  <Dialog.Content
                    forceMount
                    className="flex h-full flex-1 flex-col outline-none"
                  >
                    <Container className="h-full">
                      <motion.ul
                        key="menu-list"
                        className="flex flex-col gap-6 py-8 outline-none"
                        variants={menuListVariants}
                      >
                        {mobileMenuLinks.map((link) => (
                          <motion.li
                            key={link.id}
                            className={clsx(
                              'text-lg font-medium outline-none',
                              {
                                underline: router.pathname === link.href,
                              }
                            )}
                            variants={menuItemVariants}
                          >
                            <Link href={link.href}>
                              <a
                                target={link.target}
                                className="flex items-center gap-1"
                              >
                                {link.title}
                                {link.target === '_blank' ? (
                                  <span>
                                    <ExternalLinkIcon />
                                  </span>
                                ) : null}
                              </a>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </Container>
                  </Dialog.Content>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
